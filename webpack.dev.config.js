/*global require module*/

const Path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const nodeModulesDir = Path.resolve('node_modules');

module.exports = {
	devServer: {
		contentBase: Path.join(__dirname, 'dist'),
		compress: true,
		host: 'localhost',
		port: 3333,
		hot: true,
	},

	entry: ['react-hot-loader/patch', Path.resolve('./src/index.js')],
	output: {
		path: `${__dirname}/dist`,
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [
			// context,
			nodeModulesDir,
		],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpg|png)$/,
				use: {
					loader: 'url-loader',
				},
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: Path.join(__dirname, 'src/assets/index.html'),
			dev: true,
		}),
	],
	devtool: 'cheap-module-eval-source-map',
};
