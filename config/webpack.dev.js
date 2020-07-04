const {smart} =require('webpack-merge');
const base = require('./webpack.base');

//合并相关配置
module.exports = smart(base, {
  mode: "development",
  devtool: "inline-source-map",
});