"use client";

import PageTransition from "@/components/animations/PageTransition";
import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "Framer Motion", level: 80 },
  { name: "Tailwind CSS", level: 90 },
];

const timeline = [
  {
    year: "2024",
    title: "资深前端开发工程师",
    description: "现任职于科技公司，负责核心产品的前端开发，主导多个大型项目",
    type: "work",
  },
  {
    year: "2021",
    title: "Web 前端开发工程师",
    description: "加入创业公司，负责公司官网和多个产品的前端开发",
    type: "work",
  },
  {
    year: "2019",
    title: "计算机科学学士",
    description: "毕业于XX大学计算机科学与技术专业，主修软件工程",
    type: "education",
  },
];

export default function AboutPage() {
  return (
    <PageTransition location="about">
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
              关于我
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              专注于打造美观、流畅、高性能的 Web 应用
            </p>
          </motion.div>

          {/* 个人简介 */}
          <div className="max-w-4xl mx-auto mb-16">
            <FadeIn delay={0.2}>
              <Card className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl font-bold text-white">
                      你的名字
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">姓名</h2>
                    <p className="text-gray-600 mb-2">
                      创意开发者 & 动画工程师
                    </p>
                    <p className="text-gray-600">
                      我热衷于创造优秀的用户体验，专注于前端开发和动画设计。
                      拥有丰富的项目经验，能够将创意转化为现实。
                    </p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>

          {/* 技能展示 */}
          <div className="max-w-4xl mx-auto mb-16">
            <FadeIn delay={0.4}>
              <h2 className="text-3xl font-bold mb-8 text-center">
                技能专长
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* 经历时间线 */}
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.6}>
              <h2 className="text-3xl font-bold mb-8 text-center">
                工作经历
              </h2>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-white">
                        {item.year}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      <span className="text-sm text-gray-500">
                        {item.type === "work" ? "工作经历" : "教育背景"}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* 联系按钮 */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <FadeIn delay={0.8}>
              <Button size="lg">联系我</Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
