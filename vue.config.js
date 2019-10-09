module.exports={
    devServer: {
        port: 8001, // 端口号，如果端口号被占用，会自动提升1
        host: "localhost",
        https: false,
        open: true, // 启动服务自动打开浏览器
        proxy:{
            // 动态获取前缀
            [process.env.VUE_APP_BASE_API]:{
                // 目标服务地址
                target: process.env.VUE_APP_SERVICE_URL,
                // 开启代理服务器
                changeOrigin: true,
                // 将地址前缀 /dev-api 替换为空的
                pathRewrite:{
                    ['^'+process.env.VUE_APP_BASE_API]: '',
                }

            }
        }
    },
    // 打包时不会生成 .map 文件，加快打包速度
    productionSourceMap: false,
}