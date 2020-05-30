# whell 打包工具
--------------------------------
可以打包less,sass,js

## 配置
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
