# GitHub 发布指南 📦

## 🎯 目标

将个人作品集网站部署到 GitHub Pages，让全世界都能访问！

**最终访问地址**：`https://yourusername.github.io/portfolio`

---

## 📋 准备工作

✅ 代码已提交到本地 Git 仓库  
✅ Next.js 配置已更新为静态导出  
✅ README 已更新

---

## 🚀 步骤一：创建 GitHub 仓库

### 方式一：在 GitHub 网站创建（推荐）

1. **访问 GitHub**
   - 登录 https://github.com
   - 点击右上角 `+` → `New repository`

2. **填写仓库信息**
   - **Repository name**: `portfolio` （或你喜欢的名字）
   - **Description**: `个人作品集网站 - Next.js + Framer Motion + D3.js`
   - **Public** ✅ （GitHub Pages 需要公开仓库）
   - **不要**勾选 "Add a README file"（我们已经有了）
   - 点击 `Create repository`

3. **复制仓库 URL**
   ```
   https://github.com/yourusername/portfolio.git
   ```

### 方式二：使用 GitHub CLI（如果已安装）

```bash
# 创建公开仓库
gh repo create portfolio --public --description "个人作品集网站"

# 推送代码
git push -u origin main
```

---

## 📤 步骤二：推送代码到 GitHub

### 1. 添加远程仓库

```bash
cd portfolio

# 替换 yourusername 为你的 GitHub 用户名
git remote add origin https://github.com/yourusername/portfolio.git

# 查看远程仓库
git remote -v
```

### 2. 推送代码

```bash
# 推送到 main 分支
git push -u origin main

# 或者使用 SSH（如果配置了 SSH）
git remote set-url origin git@github.com:yourusername/portfolio.git
git push -u origin main
```

### 3. 验证推送成功

访问：`https://github.com/yourusername/portfolio`

应该能看到所有文件！

---

## 🌐 步骤三：启用 GitHub Pages

### 1. 进入仓库设置

- 访问你的仓库：`https://github.com/yourusername/portfolio`
- 点击 `Settings` 标签

### 2. 启用 Pages

- 左侧菜单找到 `Pages`
- **Source**: 选择 `Deploy from a branch`
- **Branch**: 选择 `main`
- **Folder**: 选择 `/ (root)`
- 点击 `Save`

### 3. 等待部署

- GitHub 会自动构建和部署
- 通常需要 1-3 分钟
- 页面顶部会显示部署状态

### 4. 访问网站

部署完成后，访问：
```
https://yourusername.github.io/portfolio
```

---

## 🔧 方式二：使用 GitHub Actions 自动部署（高级）

### 1. 创建 GitHub Actions 工作流

创建文件 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### 2. 推送代码

```bash
git add .
git commit -m "feat: 添加 GitHub Actions 自动部署"
git push
```

### 3. 配置 Pages

- Settings → Pages
- Source: 选择 `GitHub Actions`

---

## ✅ 验证部署

### 1. 检查部署状态

访问仓库的 `Actions` 标签，查看部署进度。

### 2. 测试访问

打开浏览器，访问：
```
https://yourusername.github.io/portfolio
```

应该能看到：
- ✅ 首页 Hero 区域
- ✅ 关于页
- ✅ 作品列表
- ✅ 水浒传人物关系图

---

## 🐛 常见问题

### Q1: 页面显示 404

**原因**：
- GitHub Pages 未启用
- 部署未完成
- 文件夹路径错误

**解决方案**：
1. 检查 Settings → Pages 是否已启用
2. 等待部署完成（1-3分钟）
3. 确认 main 分支有 `out` 文件夹（使用 GitHub Actions）

### Q2: 样式丢失或图片不显示

**原因**：路径问题

**解决方案**：
- 检查 `next.config.ts` 中的 `assetPrefix` 配置
- 确保图片放在 `public` 目录

### Q3: 水浒传关系图不显示

**原因**：D3.js 加载问题

**解决方案**：
- 检查浏览器控制台是否有错误
- 确认已安装 `d3` 和 `@types/d3`

### Q4: 移动端布局错乱

**原因**：响应式配置问题

**解决方案**：
- 检查 `tailwind.config.ts` 断点配置
- 清除浏览器缓存重新加载

---

## 🔄 更新网站

### 1. 修改代码

在本地修改代码后：

```bash
# 测试
npm run dev

# 构建
npm run build

# 提交
git add .
git commit -m "feat: 更新内容"
git push
```

### 2. 自动部署

如果配置了 GitHub Actions，推送后会自动部署。

### 3. 手动部署（如果未配置 Actions）

```bash
npm run build
# GitHub Pages 会自动检测更新
```

---

## 🎉 完成！

恭喜！你的个人作品集网站已经成功部署到 GitHub Pages！

**分享你的作品**：
```
https://yourusername.github.io/portfolio
```

**下一步**：
- 📱 在手机上测试访问
- 🎨 继续完善内容和设计
- 📊 添加更多作品
- 🌟 给项目加星

---

## 📞 需要帮助？

如果遇到问题：
1. 查看 GitHub Pages 文档：https://docs.github.com/pages
2. 检查浏览器控制台错误
3. 查看仓库的 Actions 日志

---

**祝部署顺利！** 🚀
