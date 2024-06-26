const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/main.js', // Entry point for JavaScript
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'images/[hash][ext][query]', // Output directory for images
	},
	module: {
		rules: [
			// JavaScript/JSX transpilation and minification
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			// SCSS compilation, extraction, and optimization
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			// Image optimization and handling
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				include: path.resolve(__dirname, './src/images'),
				type: 'asset/resource',
				generator: {
					filename: 'images/[hash][ext][query]',
				},
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles.css',
		}),
		new OptimizeCssAssetsPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()], // Minify JavaScript
	},
};
