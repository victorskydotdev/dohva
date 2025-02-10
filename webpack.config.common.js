// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('sass-loader');

module.exports = {
	entry: './src/index.js',

	plugins: [
		// landing page template
		new HtmlWebpackPlugin({
			template: './src/template/index.html',
			filename: 'index.html',
			// chunks: '',
		}),

		// about page template
		new HtmlWebpackPlugin({
			template: './src/template/about.html',
			filename: 'about.html',
			// chunks: '',
		}),

		// about page template
		new HtmlWebpackPlugin({
			template: './src/template/contact.html',
			filename: 'contact.html',
			// chunks: '',
		}),

		// product page quote page
		new HtmlWebpackPlugin({
			template: './src/template/quote.html',
			filename: 'quote.html',
			// chunks: '',
		}),
	],

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

			{
				test: /\.html$/,
				use: ['html-loader'],
			},

			// {
			// 	test: /\.(svg | png | jp?g | gif)$/,
			// 	use: {
			// 		loader: 'file-loader',
			// 		options: {
			// 			name: '[name].[hash].[ext]',
			// 			outputPath: 'imgs',
			// 		},
			// 	},
			// },

			{
				test: /\.png$/,
				type: 'asset/resource',
			},
			{
				test: /\.svg$/,
				type: 'asset/resource',
			},
			{
				test: /\.jpeg$/,
				type: 'asset/resource',
			},
		],
	},
};
