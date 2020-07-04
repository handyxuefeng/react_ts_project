// 清理产出目录的插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

//产出html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const outputPath = path.join(process.cwd(), "dist");
// console.log("path = ", path.join(process.cwd(), "dist"));

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: outputPath, //代码输出目录
    filename: "main.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer: {
    contentBase: "../dist",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },

      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["./dist"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};