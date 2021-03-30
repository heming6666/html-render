# ssr

测试服务端渲染 React

## 运行

```bash
git clone git@github.com:heming6666/html-render.git
cd html-render
cd ssr
npm install
node index.js
node output/bundle.js
```

打开 http://localhost:3001/

## 目录说明

```
- component             React 组件文件夹
  - Home.js
- express.js            主要入口文件，加载 React 组件，启动 express
- indexjs               调用 webpack 打包
- webpack.server.js     webpack 配置文件
```
