const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
		publicPath: '/'
  },
	watch: true,
	watchOptions: {
		aggregateTimeout:300,
		poll: 1000,
		ignored:/node_modules/
	}
});
