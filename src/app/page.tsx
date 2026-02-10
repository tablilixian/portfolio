"use client";

import PageTransition from "@/components/animations/PageTransition";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <PageTransition location="home">
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        {/* Hero 区域 */}
        <div className="container mx-auto px-4 py-20 md:py-32 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            {/* 欢迎文字 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                你好，我是
                <br />
                <span className="text-blue-200">你的名字</span>
              </h1>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                创意开发者 | 动画工程师 | 设计爱好者
              </motion.p>
            </motion.div>

            {/* 动作按钮 */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button size="lg">查看作品</Button>
              <Button variant="ghost" size="lg">联系我</Button>
            </motion.div>

            {/* 滚动提示 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-center"
            >
              <p className="text-blue-200 text-sm sm:text-base mb-2">
                向下滚动了解更多
              </p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg
                  className="w-6 h-6 mx-auto text-blue-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* 渐变遮罩 */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* 简短介绍部分 */}
      <div className="container mx-auto px-4 py-20 lg:px-8">
        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              关于我
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              我是一名热衷于创造美观且功能强大的 Web 应用的开发者。
              专注于前端开发和动画设计，致力于为用户提供流畅、美观的用户体验。
              无论是构建响应式网站、设计动画效果，还是优化性能，
              我都致力于将每一个项目做到极致。
            </p>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
