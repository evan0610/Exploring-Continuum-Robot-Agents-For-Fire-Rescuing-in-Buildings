# Deployment and local preview

## 快速部署到 GitHub Pages

1. 在 GitHub 新建仓库，仓库名称 `Exploring-Continuum-Robot-Agents-For-Fire-Rescuing-in-Buildings`，默认分支使用 `main`。
2. 将**本目录中的内容**上传到仓库根目录（`index.html` 应直接在根目录）。`.github/workflows/pages.yml` 也必须上传。最稳妥的方法是使用 Git 或 GitHub Desktop，避免网页上传漏掉隐藏目录。
3. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
4. 打开 **Actions → Deploy research project page → Run workflow**；后续推送到 `main` 会自动部署。
5. 部署成功后，Pages 设置中会显示主页地址，通常为 `https://你的用户名.github.io/Exploring-Continuum-Robot-Agents-For-Fire-Rescuing-in-Buildings/`。

也可以不使用 Actions：在 Pages 中选择 **Deploy from a branch → main → /(root)**。纯静态页面，无需 Node、npm 或构建步骤。具体 GitHub 设置操作参考 [GitHub 官方文档](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## Local preview

```bash
python -m http.server 8000
```

Open `http://localhost:8000`. Run the asset check:

```bash
python scripts/check_site.py
```

## Repository layout

```text
.
├── index.html                    # Research project homepage
├── assets/
│   ├── css/style.css             # Responsive layout
│   ├── js/main.js                # Scenario / viewpoint selection
│   ├── images/                   # Source figures and video posters
│   ├── videos/                   # 10 original embedded MP4 clips
│   └── documents/research-poster.pdf
├── docs/
│   ├── CONTENT_GUIDE.md          # Editing and publication notes
│   └── SOURCE_MAP.md             # Figure / video provenance
├── scripts/check_site.py         # Local asset validation
├── .github/workflows/pages.yml   # GitHub Pages deployment
└── .nojekyll
```

