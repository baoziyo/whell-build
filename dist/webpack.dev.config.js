'use strict';var _fs=require('fs');var _fs2=_interopRequireDefault(_fs);var _gracefulFs=require('graceful-fs');var _gracefulFs2=_interopRequireDefault(_gracefulFs);require('console-polyfill');var _webpack=require('webpack');var _webpack2=_interopRequireDefault(_webpack);var _webpackConfig=require('./webpack.config.js');var _webpackConfig2=_interopRequireDefault(_webpackConfig);var _option=require('./option');var _option2=_interopRequireDefault(_option);var _friendlyErrorsWebpackPlugin=require('friendly-errors-webpack-plugin');var _friendlyErrorsWebpackPlugin2=_interopRequireDefault(_friendlyErrorsWebpackPlugin);var _nodeNotifier=require('node-notifier');var _nodeNotifier2=_interopRequireDefault(_nodeNotifier);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_gracefulFs2.default.gracefulify(_fs2.default);_webpackConfig2.default.mode='development';_webpackConfig2.default.devtool='source-map';_webpackConfig2.default.devServer=_option2.default.devServer;_webpackConfig2.default.plugins.push(new _webpack2.default.DefinePlugin({"process.env.NODE_ENV":JSON.stringify("development")}));_webpackConfig2.default.plugins.push(new _friendlyErrorsWebpackPlugin2.default({onErrors:function onErrors(severity,errors){if(severity!=='error'){return;}var error=errors[0];_nodeNotifier2.default.notify({title:"Webpack error",message:severity+': '+error.name,subtitle:error.file||''});}}));module.exports=_webpackConfig2.default;