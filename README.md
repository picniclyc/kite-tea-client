# Kite Tea Client

Kite Tea Client 是一个面向客户沟通场景的静态展示页，用 15 张 16:9 SVG 卡片说明项目定义、功能结构、排期、交付物与报价方案。

## 在线地址

- GitHub 仓库：<https://github.com/picniclyc/kite-tea-client>
- GitHub Pages：<https://picniclyc.github.io/kite-tea-client/>

## 项目结构

- `index.html`：页面入口
- `kite-tea-client-cards.css`：页面样式
- `kite-tea-client-cards.js`：交互逻辑
- `assets/kite-tea-client/`：15 张 SVG 卡片资源
- `scripts/publish.ps1`：本地一键提交并发布脚本

## 本地预览

在仓库根目录执行：

```powershell
python -m http.server 8080
```

然后打开：

```text
http://localhost:8080
```

## 更新与发布

GitHub Pages 当前直接使用 `main` 分支根目录内容，任何推送到 `main` 的更新都会自动上线。

如果你已经改好了页面文件，可以在仓库根目录执行：

```powershell
.\scripts\publish.ps1
```

如果你想带上自定义提交说明：

```powershell
.\scripts\publish.ps1 "update: revise card copy"
```

## 维护建议

- 新增卡片时，保持 `assets/kite-tea-client/` 命名连续
- 如果修改了卡片数量，记得同步更新 `index.html` 中的导航与卡片列表
- 对外分享前，建议先本地预览一次，确认图片、锚点和打印导出都正常
