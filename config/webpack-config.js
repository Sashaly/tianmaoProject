
const pathUtil = require('path')

const webpackConfig = {
    mode: 'development',//当前模式
    entry: {
        index: pathUtil.join(__dirname, '../src/javascripts/index.js')
    },
    output: {
        filename: '[name].js'
    },
    module: {//loader配置 webpack有个思想 一切皆模块
        rules: [
            {
                test: /\.html$/, // 找到引入到js中的html文件
                use: ['string-loader']//对这些模块使用什么来处理
            }
        ]
    }
}

module.exports = webpackConfig