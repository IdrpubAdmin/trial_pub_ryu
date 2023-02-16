const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const postcssPresetEnv = require('postcss-preset-env');
const path = require('path');

module.exports = {
  // mode: 'production',
  mode: 'development',
  entry: {
    index: path.join(__dirname, 'src', 'index.js'),
    intro: path.join(__dirname, 'src', 'intro.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "./js/[name].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html', //번들전 html
      filename: './index.html', //번들후 html
      hash: true, //auto refrash
      showErrors: true, //error html 출력
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: './src/intro.html', //번들전 html
      filename: './intro.html', //번들후 html
      hash: true, //auto refrash
      showErrors: true, //error html 출력
      chunks: ["intro"],
    }),
    new MiniCssExtractPlugin({
      filename: './css/display.css', //번들후 html
    })
  ],
  devServer: {
    static: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,  //css 파일을 선택하는 정규표현식
        use: [
          // 순서 중요!
          {loader: "style-loader"},
          // MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {importLoaders: 1}
          },
          {loader: "postcss-loaderw},  // postcss 적용하기
          // {loader: "sass-loader"}
        ],
        exclude: /node_modules/,
      },
    ]
  },
};
