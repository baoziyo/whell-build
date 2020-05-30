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
        {from: '/resources/static-src/common/js', to: '/public/static-dist/common/js'},
        {from: '/resources/static-src/fonts', to: '/public/static-dist/fonts'},
        {from: '/resources/static-src/images', to: '/public/static-dist/images'},
        {from: '/resources/static-src/libs', to: '/public/static-dist/libs'},
    ],
    // 开发模式
    devServer: {
        // 端口
        port: 8086,
    },
}
