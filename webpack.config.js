const path = require('path');

module.exports = {
    entry: './server.js', // 入口文件
    target: 'node', // 指定目标为Node.js环境
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出目录
        filename: 'bundle.js', // 输出文件名
    },
    externals: {}, // 这里可以配置不需要打包的依赖
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};