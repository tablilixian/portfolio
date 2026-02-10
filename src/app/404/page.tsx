"use client";

import PageTransition from "@/components/animations/PageTransition";
import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <PageTransition location="not-found">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <FadeIn delay={0.2}>
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8"
          >
            404
          </motion.h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            页面未找到
          </motion.h2>
        </FadeIn>

        <FadeIn delay={0.6}>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-md text-center mb-8"
          >
            抱歉，您访问的页面不存在
          </motion.p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="/"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
            >
              返回首页
            </a>
          </motion.div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
