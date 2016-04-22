var path = require("path");
module.exports = {
  entry: {
    main: ["./app/main.js"],
    page1: ["./app/page1.js"],
    // index: "./app/index.html"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "",
    filename: "[name].js"
  },
  module: {
  	loaders: [
	  	{
	  		test: /\.css$/,
	  		loader: "style-loader!css-loader"
	  	},
	  	{
	  		test: /\.html$/,
	  		loader: "html-loader"
	  	}
  	]
  }
};