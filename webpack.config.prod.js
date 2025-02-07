const path = require('path');
const common = require('./webpack.config.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',

	output: {
		filename: 'script.[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},

	plugins: [new CleanWebpackPlugin()],
});
