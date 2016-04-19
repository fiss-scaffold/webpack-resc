
// var ExtractText = require('extract-text-webpack-plugin');


module.exports = {
	entry: './src/js/pkg/main.js',
	output: {
		path: __dirname + '/build/',
		filename: '[name].bundl.js',
		sourceMapFilename: '[file].map'
	},
	module: {
		loaders: [
			// 打包 css，最终以 <style> 形式内嵌到页面中
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},

			// extract text from bundle
			// 从打包好的文件中抽离 css 样式合成一个样式包
			// {
			// 	test: /\.css$/,
			// 	loader: ExtractText.extract('css-loader')
			// },
			// {
			// 	test: /\.scss$/,
			// 	loader: ExtractText.extract('sass-loader') // 有问题
			// },

			{
				test: /\.(jpg|gif|png)$/,
				loader: 'url-loader?limit=8192'
			}
		]
	},
	// plugins: [
	// 	new ExtractText('[name].css', {
	// 		allChunks: true
	// 	})
	// ],
	debug: true,
	devtool: '#source-map'
}