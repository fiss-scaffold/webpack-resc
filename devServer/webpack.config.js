var path = require("path");
module.exports = {
  entry: {
    index: ["./app/main.js"],
    page1: ["./app/page1.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "[name].bundle.js"
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