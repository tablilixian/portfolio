"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface Node {
  id: string;
  name: string;
  nickname: string;
  group: string;
  size: number;
  desc: string;
}

interface Link {
  source: string;
  target: string;
  rel: string;
}

interface ForceGraphProps {
  nodes: Node[];
  links: Link[];
  onNodeClick?: (nodeId: string) => void;
}

export default function ForceGraph({ nodes, links, onNodeClick }: ForceGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight || 600,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!svgRef.current || nodes.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const { width, height } = dimensions;

    // 颜色映射
    const colorScale = d3.scaleOrdinal<string>()
      .domain(["梁山首领", "马军五虎将", "马军八骠骑", "步军头领", "水军头领", "贵族", "地主豪强", "梁山将领"])
      .range(["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c", "#e67e22", "#95a5a6"]);

    // 创建力模拟
    const simulation = d3.forceSimulation(nodes as any)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(150))
      .force("charge", d3.forceManyBody().strength(-800))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(50));

    // 创建容器
    const container = svg.append("g");

    // 缩放功能
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on("zoom", (event) => {
        container.attr("transform", event.transform);
      });

    svg.call(zoom);

    // 绘制连线
    const link = container.append("g")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 2);

    // 绘制关系标签
    const linkText = container.append("g")
      .selectAll("text")
      .data(links)
      .enter()
      .append("text")
      .attr("class", "rel-label")
      .attr("font-size", "10px")
      .attr("fill", "#666")
      .attr("text-anchor", "middle")
      .text((d: any) => d.rel);

    // 绘制节点
    const node = container.append("g")
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g")
      .style("cursor", "pointer")
      .call(d3.drag<SVGGElement, any>()
        .on("start", dragStarted)
        .on("drag", dragged)
        .on("end", dragEnded));

    // 节点圆形
    node.append("circle")
      .attr("r", (d: any) => d.size)
      .attr("fill", (d: any) => colorScale(d.group) as string)
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .on("click", (event: MouseEvent, d: any) => {
        if (onNodeClick) {
          onNodeClick(d.id);
        }
      })
      .on("mouseover", function(event: MouseEvent, d: any) {
        d3.select(this).attr("stroke-width", 4).attr("stroke", "#FFD700");
      })
      .on("mouseout", function(event: MouseEvent, d: any) {
        d3.select(this).attr("stroke-width", 2).attr("stroke", "#fff");
      });

    // 节点标签
    node.append("text")
      .attr("class", "node-label")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "#333")
      .attr("text-anchor", "middle")
      .attr("dy", (d: any) => d.size + 15)
      .text((d: any) => d.name);

    // 绰号标签
    node.append("text")
      .attr("class", "nickname-label")
      .attr("font-size", "9px")
      .attr("fill", "#888")
      .attr("text-anchor", "middle")
      .attr("dy", (d: any) => d.size + 28)
      .text((d: any) => d.nickname);

    // 模拟tick函数
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      linkText
        .attr("x", (d: any) => (d.source.x + d.target.x) / 2)
        .attr("y", (d: any) => (d.source.y + d.target.y) / 2);

      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    // 拖拽函数
    function dragStarted(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragEnded(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    // 清理
    return () => {
      simulation.stop();
    };
  }, [nodes, links, dimensions, onNodeClick]);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[600px] bg-gray-50 rounded-xl overflow-hidden">
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-full"
      />
    </div>
  );
}
