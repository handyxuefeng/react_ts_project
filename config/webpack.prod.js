const { smart } = require("webpack-merge");
const base = require("./webpack.base");

module.exports = smart(base,{
  mode: "production",
  devtool:false
  // devtool: "inline-source-map", 生产环境不需要生成sourceMap
});
