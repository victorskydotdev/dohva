const path = require('path');
const common = require('./webpack.config.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
	mode: 'production',

	output: {
		filename: 'script.[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		new CleanWebpackPlugin(),
	],

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, // 3. Extract css into file
					'css-loader', // 2. turns css into commonjs
					'sass-loader', // 1. turns scss into css
				],
			},
		],
	},
});
