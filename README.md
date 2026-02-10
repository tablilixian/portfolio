# 个人作品集网站 🎨

基于 Next.js 15 + Framer Motion + Tailwind CSS + D3.js 构建的现代化个人作品集网站。

## 🌟 特色项目

### 水浒传人物关系表
- 📊 D3.js 力导向关系图可视化
- 🎯 30位主要人物 + 25条关系
- 🖱️ 可拖拽、缩放、点击交互
- 🎨 分组颜色编码

**访问地址**：https://yourusername.github.io/portfolio/portfolio/shuihu-characters

## 🚀 技术栈

- **Next.js 15** - React 框架
- **TypeScript** - 类型安全
- **Framer Motion** - 动画库
- **Tailwind CSS** - 样式框架
- **D3.js v7** - 数据可视化
- **Mobile-first Design** - 移动端优先

## 📱 响应式设计

完全适配以下设备：
- 📱 iPhone SE / 12 / 13 / 14 / 14 Pro / 14 Pro Max
- 📱 Samsung Galaxy S21 / S20
- 📱 iPad (竖屏)
- 💻 桌面浏览器

## 🛠️ 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问
http://localhost:3000
```

## 📦 部署到 GitHub Pages

### 方式一：自动部署（推荐）

1. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "feat: 初始化个人作品集项目"
   git push
   ```

2. **启用 GitHub Pages**
   - 进入 GitHub 仓库
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `/ (root)`
   - Save

3. **访问网站**
   ```
   https://yourusername.github.io/portfolio
   ```

### 方式二：手动部署

```bash
# 构建静态文件
npm run build

# 输出到 out 目录
# 将 out 目录内容推送到 gh-pages 分支
```

## 📁 项目结构

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # 首页
│   │   ├── about/              # 关于页
│   │   ├── portfolio/          # 作品展示
│   │   │   ├── page.tsx        # 作品列表
│   │   │   └── shuihu-characters/  # 水浒传项目
│   │   └── 404/                # 404页面
│   ├── components/
│   │   ├── ui/                 # UI组件
│   │   ├── animations/         # 动画组件
│   │   ├── layouts/            # 布局组件
│   │   └── ForceGraph.tsx      # D3.js关系图
│   └── lib/                    # 工具库
├── public/                     # 静态资源
└── package.json
```

## 🎨 页面列表

- **首页** (`/`) - Hero区 + 个人介绍
- **关于页** (`/about`) - 技能 + 经历
- **作品列表** (`/portfolio`) - 项目展示
- **水浒传人物关系** (`/portfolio/shuihu-characters`) - 力导向关系图

## ✨ 功能特性

### 动画效果
- ✅ 页面切换动画
- ✅ 元素淡入滑入
- ✅ 卡片悬停放大
- ✅ 进度条动态增长
- ✅ 按钮交互动画

### 水浒传项目
- ✅ 30位人物数据
- ✅ 25条关系数据
- ✅ D3.js 力导向图
- ✅ 可拖拽节点
- ✅ 缩放视图
- ✅ 点击查看详情
- ✅ 双视图切换

## 📝 自定义指南

### 修改个人信息
- `src/app/page.tsx` - 首页名字和介绍
- `src/app/about/page.tsx` - 详细信息和技能
- `src/app/portfolio/page.tsx` - 作品列表

### 添加新作品
1. 在 `src/app/portfolio/` 创建新目录
2. 在作品列表中添加链接
3. 实现作品页面

### 修改主题颜色
编辑 `tailwind.config.ts` 自定义配色

## 📄 许可证

MIT

## 🔗 相关链接

- [Next.js 文档](https://nextjs.org/docs)
- [Framer Motion 文档](https://www.framer.com/motion/)
- [D3.js 文档](https://d3js.org/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)

---

**作者**：你的名字  
**GitHub**：https://github.com/yourusername
