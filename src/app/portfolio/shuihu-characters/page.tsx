"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/animations/PageTransition";
import FadeIn from "@/components/animations/FadeIn";
import ForceGraph from "@/components/ForceGraph";
import { characters, relations, Character, getGraphData } from "@/lib/shuihu-data";

export default function ShuihuCharactersPage() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [filterGroup, setFilterGroup] = useState<string>("全部");
  const [viewMode, setViewMode] = useState<"grid" | "graph">("graph");

  const groups = ["全部", ...Array.from(new Set(characters.map(c => c.group)))];

  const filteredCharacters = filterGroup === "全部"
    ? characters
    : characters.filter(c => c.group === filterGroup);

  const getRelatedCharacters = (charId: string) => {
    const related = relations.filter(r => r.from === charId || r.to === charId);
    return related.map(r => {
      const relatedId = r.from === charId ? r.to : r.from;
      return {
        character: characters.find(c => c.id === relatedId)!,
        relation: r,
      };
    }).filter(r => r.character);
  };

  const getRelationColor = (type: string) => {
    const colors: Record<string, string> = {
      '兄弟': 'bg-red-100 text-red-700 border-red-300',
      '师徒': 'bg-blue-100 text-blue-700 border-blue-300',
      '朋友': 'bg-green-100 text-green-700 border-green-300',
      '同乡': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      '义兄弟': 'bg-purple-100 text-purple-700 border-purple-300',
      '亲兄弟': 'bg-pink-100 text-pink-700 border-pink-300',
      '结拜': 'bg-indigo-100 text-indigo-700 border-indigo-300',
    };
    return colors[type] || 'bg-gray-100 text-gray-700 border-gray-300';
  };

  const { nodes, links } = getGraphData();

  return (
    <PageTransition location="shuihu-characters">
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 py-20 lg:px-8">
          {/* 标题 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
              水浒传人物关系表
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              一百零八将中的三十位主要人物及其关系
            </p>
          </motion.div>

          {/* 视图切换和分组筛选 */}
          <FadeIn delay={0.2}>
            <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* 视图切换 */}
              <div className="flex bg-white rounded-full p-1 shadow-md">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode("graph")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    viewMode === "graph"
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  📊 关系图
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode("grid")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    viewMode === "grid"
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  📋 网格列表
                </motion.button>
              </div>

              {/* 分组筛选 */}
              {viewMode === "grid" && (
                <div className="flex flex-wrap justify-center gap-2">
                  {groups.map((group) => (
                    <motion.button
                      key={group}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFilterGroup(group)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        filterGroup === group
                          ? 'bg-amber-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-amber-50'
                      }`}
                    >
                      {group}
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
          </FadeIn>

          {/* 视图内容 */}
          {viewMode === "graph" ? (
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
                <div className="p-4 bg-amber-50 border-b border-amber-200">
                  <h3 className="font-bold text-gray-900">💡 使用说明</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    • 拖拽节点可以调整位置 • 滚轮缩放视图 • 点击节点查看详情 • 鼠标悬停高亮节点
                  </p>
                </div>
                <div className="h-[600px]">
                  <ForceGraph
                    nodes={nodes}
                    links={links}
                    onNodeClick={(nodeId) => {
                      const char = characters.find(c => c.id === nodeId);
                      if (char) setSelectedCharacter(char);
                    }}
                  />
                </div>
              </div>
            </FadeIn>
          ) : (
            <>
              {/* 人物网格 */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
                {filteredCharacters.map((char, index) => (
                  <motion.div
                    key={char.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCharacter(char)}
                    className={`bg-white rounded-xl p-4 shadow-md cursor-pointer transition-all border-2 ${
                      selectedCharacter?.id === char.id
                        ? 'border-amber-500 shadow-xl'
                        : 'border-transparent hover:shadow-lg'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">第{char.rank}位</div>
                      <div className="text-lg font-bold text-gray-900 mb-1">
                        {char.name}
                      </div>
                      <div className="text-xs text-amber-600 font-medium mb-2">
                        {char.nickname}
                      </div>
                      <div className="text-xs text-gray-500">
                        {char.group}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* 选中人物详情 */}
          {selectedCharacter && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-2xl p-6 mb-12"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* 基本信息 */}
                <div className="md:w-1/3">
                  <div className="text-center md:text-left">
                    <div className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm mb-3">
                      排名第 {selectedCharacter.rank} 位
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedCharacter.name}
                    </h2>
                    <p className="text-xl text-amber-600 font-medium mb-3">
                      {selectedCharacter.nickname}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {selectedCharacter.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {selectedCharacter.group}
                    </div>
                  </div>
                </div>

                {/* 关系列表 */}
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    人物关系 ({getRelatedCharacters(selectedCharacter.id).length})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {getRelatedCharacters(selectedCharacter.id).map((rel, index) => (
                      <motion.div
                        key={`${rel.character.id}-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedCharacter(rel.character)}
                        className="bg-gray-50 rounded-lg p-3 cursor-pointer hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">
                              {rel.character.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {rel.character.nickname}
                            </div>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getRelationColor(rel.relation.type)}`}>
                            {rel.relation.type}
                          </div>
                        </div>
                        {rel.relation.description && (
                          <div className="text-xs text-gray-600 mt-2 pl-0">
                            {rel.relation.description}
                          </div>
                        )}
                      </motion.div>
                    ))}
                    {getRelatedCharacters(selectedCharacter.id).length === 0 && (
                      <div className="col-span-2 text-center text-gray-500 py-8">
                        暂无关系数据
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 关闭按钮 */}
              <div className="mt-6 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCharacter(null)}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
                >
                  关闭详情
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* 关系类型说明 */}
          <FadeIn delay={0.4}>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                关系类型说明
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {['兄弟', '师徒', '朋友', '同乡', '义兄弟', '亲兄弟', '结拜'].map((type) => (
                  <div
                    key={type}
                    className={`px-4 py-2 rounded-lg text-center text-sm font-medium border ${getRelationColor(type)}`}
                  >
                    {type}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 返回按钮 */}
          <div className="mt-8 text-center">
            <motion.a
              href="/portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-amber-600 text-white font-semibold rounded-full hover:bg-amber-700 transition-colors shadow-lg"
            >
              返回作品列表
            </motion.a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
