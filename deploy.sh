#!/bin/bash

echo "🚀 准备部署个人作品集到 GitHub Pages"
echo ""

# 检查是否有未提交的更改
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  发现未提交的更改，正在提交..."
    git add .
    git commit -m "chore: 准备部署"
fi

echo "✅ 代码已准备就绪"
echo ""
echo "📝 接下来请按以下步骤操作："
echo ""
echo "1️⃣  在 GitHub 创建新仓库"
echo "   - 访问: https://github.com/new"
echo "   - 仓库名: portfolio"
echo "   - 设置为: Public"
echo "   - 不要勾选 README"
echo ""
echo "2️⃣  添加远程仓库并推送"
echo "   git remote add origin https://github.com/你的用户名/portfolio.git"
echo "   git push -u origin main"
echo ""
echo "3️⃣  启用 GitHub Pages"
echo "   - 进入仓库 Settings → Pages"
echo "   - Source: Deploy from a branch"
echo "   - Branch: main / (root)"
echo "   - 点击 Save"
echo ""
echo "4️⃣  等待 1-3 分钟后访问"
echo "   https://你的用户名.github.io/portfolio"
echo ""
echo "📚 详细说明请查看 DEPLOYMENT_GUIDE.md"
