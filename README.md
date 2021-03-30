# html-render

测试用。为了实现 [github-analysis-report](https://github.com/X-lab2017/github-analysis-report) 的 HTML 可视化页面自动构建加载。

## 运行

```bash
git clone git@github.com:heming6666/html-render.git
cd html-render
cd test
npm install
node index.js
```

## 目录说明

```
- hypertrons-components 对应 github-analysis-report 的 hypertrons-components 文件夹
  - auto-update-report
    - index.lua.js      模拟 /auto-update-report/index.lua
  - sql-run             暂时为空
- sqls                  对应 github-analysis-report 的 sqls 文件夹
  - activity-repo-top
    - index.html        包含一个 div
    - index.js
    - sql.js            无意义，仅模拟sql语句
  - developers-top      同上，为了模拟 js 变量同名情况
    - index.html
    - index.js
    - sql.js
- test                  为了查看生成的 HTML 的效果
  - index.js
```

## 其他

渲染 React 见 [ssr 分支](https://github.com/heming6666/html-render/tree/ssr).
