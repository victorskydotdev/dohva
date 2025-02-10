const path = require('path');
const common = require('./webpack.config.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
	mode: 'development',

	output: {
		filename: 'script.js',
		path: path.resolve(__dirname, 'dist'),
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader', // 3. injects the styles into the DOM
					'css-loader', // 2. turns css into commonjs
					'sass-loader', // 1. turns scss into css
				],
			},
		],
	},
});
