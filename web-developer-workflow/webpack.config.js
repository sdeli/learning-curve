const webpack = require('webpack');
const path = require('path');

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app : './exercise-sites/travel-site/app/assets/js/app.js',
		vendor : './exercise-sites/travel-site/app/assets/js/vendor.js'	
	},

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(
			__dirname,
			'exercise-sites/travel-site/app/assets/tmp/js'
		)
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env']
				}
			}
		]
	},

	plugins: [new UglifyJSPlugin()]
};
