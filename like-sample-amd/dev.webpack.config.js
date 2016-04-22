var path = require('path');
var webpack = require('webpack');
var ExtractText = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var SpritesmithPlugin = require('webpack-spritesmith');


// 使用 commonsChunkplugin 对公共资源进行优化
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    entry: {
        main: './src/js/pkg/main.js',
        page1: './src/js/pkg/page1.js',
        page2: './src/js/pkg/page2.js',
        page3: './src/js/pkg/page3.js'
    },
    output: {
        path: __dirname + '/dev/',
        // publicPath: '/webpack-test/',
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
                // loader: ExtractText.extract('style-loader', 'css-loader!csslint-loader')
            }, {
                test: /\.scss$/,
                loader: ExtractText.extract('style', 'css!sass') // 有问题
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /(node_modules|lib)/
            },

            {
                test: /\.(jpg|gif|png)$/,
                // loader: 'url-loader?limit=8192'
                loader: 'file?name=img/[name].[ext]'
            },
            // 与使用 html-webpack-plugin require html 片段时
            // 使用 html-loader 有冲突
            // {
            // 	test: /\.html$/,
            // 	loader: 'html-loader'
            // }
        ]
    },
    // eslint-loader 配置
    eslint: {
        configFile: './.eslintrc.json', // 指定 eslint 配置文件
        // emitError: true
    },
    plugins: [

        // commonsPlugin, // 共用资源优化
        // main 和 page1 里的公共模块合并到 common1
        new CommonsChunkPlugin({
            name: 'common1',
            chunks: ['main', 'page1']
        }),

        new CommonsChunkPlugin({
            name: 'common2',
            chunks: ['page2', 'page3']
        }),

        // page1 与 common2 的公共模块合并到 common3
        new CommonsChunkPlugin({
            name: 'common3',
            chunks: ['page1', 'common2']
        }),


        new ExtractText('css/[name].css', {
            allChunks: true
        }),

        // 对 index_template HTML 模板文件处理
        // 最终生成 index.html
        new HtmlWebpackPlugin({
            // configuration
            inject: 'body',
            template: './src/index_template.html',
            filename: 'html/index.html',
            chunks: ['main', 'common1'] // 只引入 main 和 common1 ，排除其他一切资源，包括 common2/3
            // excludeChunks: ['page1', 'page2', 'page3', 'common3'] // 排除 page1 的资源
        }),

        // 对 page1_template HTML 模板文件处理
        // 最终生成 page1.html
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/page1_template.html',
            filename: 'html/page1.html',
            // chunks: ['page1']
            excludeChunks: ['main'] // 排除 main 的资源
        }),

        // sprite 操作
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'src/img'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(__dirname, 'dev/img/sprite/sprite.png'),
                css: path.resolve(__dirname, 'dev/img/sprite/sprite.css')
            },
            apiOptions: {
                cssImageRef: "/img/sprite/sprite.png"
            }
        })
    ],
    debug: true,
    devtool: '#source-map'
}
