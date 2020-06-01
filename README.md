# whell 打包工具
--------------------------------
可以打包less,sass,js

## 安装
`npm install whell-build` or `yarn add whell-build`

## 运行
* 开发模式:`yarn dev` or `npm dev`
* 编译:`yarn build` or `npm build`

## 配置
* 在package.json中加入
```javascript
{
    "scripts": {
        "dev": "webpack-dev-server --config node_modules/whell-build/dist/webpack.dev.config.js --parameters webpack.config.js",
        "build": "webpack --config node_modules/whell-build/dist/webpack.build.config.js --parameters webpack.config.js"
    }
}
```

* 创建文件/webpack.config.js
```javascript
// 编译路径
const basePath = '/resources/static-src';
// 输出路径
const basePublicPath = '/public/static-dist';

module.exports = {
    basePath: basePath,
    basePublicPath: basePublicPath,
    // 复制目录
    copy: [
        {from: '/resources/static-src/common/images', to: '/public/static-dist/common/images'},
    ],
    // 开发模式
    devServer: {
        // 端口
        port: 8086,
        // 开放host
        host: '0.0.0.0',
    },
}
```
