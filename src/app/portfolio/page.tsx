"use client";

import PageTransition from "@/components/animations/PageTransition";
import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "水浒传人物关系表",
    description: "水浒传主要角色（30位）及其关系展示，支持点击查看详细信息和关联人物",
    tags: ["Next.js", "React", "TypeScript", "Framer Motion"],
    link: "/portfolio/shuihu-characters",
  },
  {
    id: 2,
    title: "电商平台",
    description: "一个现代化的电商网站，支持商品展示、购物车、支付等功能",
    tags: ["React", "Next.js", "Tailwind", "Stripe"],
  },
  {
    id: 3,
    title: "社交媒体 App",
    description: "一款跨平台社交媒体应用，支持实时聊天、朋友圈、动态发布",
    tags: ["React Native", "Firebase", "Redux"],
  },
  {
    id: 4,
    title: "动画展示页面",
    description: "使用 Framer Motion 构建的动画展示页面，包含多种动画效果",
    tags: ["Framer Motion", "React", "GSAP"],
  },
  {
    id: 5,
    title: "企业官网",
    description: "为科技公司打造的专业企业官网，展示产品和服务",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 6,
    title: "数据可视化平台",
    description: "基于 React 的数据可视化仪表板，实时展示业务数据",
    tags: ["D3.js", "React", "Chart.js"],
  },
];

export default function PortfolioPage() {
  return (
    <PageTransition location="portfolio">
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20 lg:px-8">
          {/* 标题 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              作品展示
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              查看我最近的项目和作品
            </p>
          </motion.div>

          {/* 作品网格 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  {/* 项目图片 */}
                  <div className="aspect-video bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {project.id}
                    </span>
                  </div>

                  {/* 项目内容 */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* 技术标签 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* 查看详情按钮 */}
                    {project.link ? (
                      <a href={project.link}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full"
                        >
                          查看详情
                        </Button>
                      </a>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full"
                      >
                        查看详情
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA 区域 */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <FadeIn delay={0.8}>
              <h2 className="text-3xl font-bold mb-4">
                有项目合作意向？
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                如果你有任何想法或合作需求，欢迎随时联系我
              </p>
              <Button size="lg">联系我</Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
