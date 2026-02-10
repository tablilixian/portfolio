import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',   // 小屏手机
        'sm': '640px',   // 中屏手机
        'md': '768px',   // 平板竖屏
        'lg': '1024px',  // 平板横屏/小笔记本
        'xl': '1280px',  // 桌面
        '2xl': '1536px', // 大屏桌面
      },
      // 移动端优先的字体大小
      fontSize: {
        'xs': '0.75rem',    // 12px
        'sm': '0.875rem',   // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
      },
      // 移动端间距
      spacing: {
        'mobile': '0.5rem',   // 8px
        'mobile-lg': '1rem',  // 16px
      },
    },
  },
  plugins: [],
};

export default config;
