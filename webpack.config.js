var path = require('path')
var ExtractText = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var SpritesmithPlugin = require('webpack-spritesmith');


module.exports = {
    entry: {
        main: './src/js/pkg/main.js',
        page1: './src/js/pkg/page1.js'
    },
    output: {
        path: __dirname + '/build/',
        publicPath: '/webpack-test/',
        filename: 'js/[name]/[name].bundl.js',
        sourceMapFilename: '[file].map'
    },
    resolve: {
    	modulesDirectories: ['sprite']
    },
    module: {
        loaders: [
            // 打包 css，最终以 <style> 形式内嵌到页面中
            // {
            // 	test: /\.css$/,
            // 	loader: 'style-loader!css-loader'
            // },
            // {
            // 	test: /\.scss$/,
            // 	loader: 'style-loader!css-loader!sass-loader'
            // },

            // extract text from bundle
            // 从打包好的文件中抽离 css 样式合成一个样式包
            {
                test: /\.css$/,
                loader: ExtractText.extract('style-loader', 'css-loader')
            }, {
                test: /\.scss$/,
                loader: ExtractText.extract('style', 'css!sass') // 有问题
            },

            {
                test: /\.(jpg|gif|png)$/,
                // loader: 'url-loader?limit=8192'
                loader: 'file?name=img/[name]_[hash].[ext]'
            },
            // 与使用 html-webpack-plugin require html 片段时
            // 使用 html-loader 有冲突
            // {
            // 	test: /\.html$/,
            // 	loader: 'html-loader'
            // }
        ]
    },
    plugins: [
        new ExtractText('css/[name].css', {
            allChunks: true
        }),

        // 对 index_template HTML 模板文件处理
        // 最终生成 index.html
        new HtmlWebpackPlugin({
            // configuration
            inject: 'head',
            template: './src/index_template.html',
            filename: 'html/index.html',
            excludeChunks: 'page1.bundl.js'
        }),

        // 对 page1_template HTML 模板文件处理
        // 最终生成 page1.html
        new HtmlWebpackPlugin({
            inject: 'head',
            template: './src/page1_template.html',
            filename: 'html/page1.html',
            excludeChunks: 'main.bundl.js'
        }),

        // sprite 操作
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'src/img'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(__dirname, 'build/img/sprite/sprite.png'),
                css: path.resolve(__dirname, 'build/img/sprite/sprite.css')
            },
            apiOptions: {
                cssImageRef: "~sprite.png"
            }
        })
    ],
    debug: true,
    devtool: '#source-map'
}
