var webpack = require("webpack");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: "dist/webpack",
		filename: "bundle.js",
		publicPath: "webpack"
	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3000
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: ["babel-loader"],
				query: {
					presets: ["latest", "stage-0", "react"]
				}
			},
			{
				test: /\.css$/,
				loader: ["style-loader!css-loader!autoprefix-loader"]
			}
		]
	}
}