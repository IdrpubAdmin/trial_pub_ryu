const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const postcssPresetEnv = require('postcss-preset-env');
const CopyPlugin = require('copy-webpack-plugin')
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
    // publicPath: './dist',
    clean: true, //기존에 만들었었던 내용 제거
  },

  //빌드한 파일과 원본파일을 서로 연결시켜줌
  devtool : "source-map",

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
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
    }),
    new CopyPlugin({
      patterns: [
        {from: 'src/static', to: 'static'}
      ]
    }),
  ],

  //개발 서버를 오픈할때 동작시켜줄수있는 명령
  devServer: {
    static: './dist',
    // host : "localhost",
    // port : 8080,
    // open : true,
    // watchFiles: 'index.html'
  },
  module: {
    rules: [
      {
        // test: /\.css$/,  //.css라는 확장자로 끝나는 모든 css 파일을 찾는 정규식
        test: /\.s[ac]ss$/,  //scss 파일을 선택하는 정규표현식
        use: [
          // 순서 중요!
          // {loader: "style-loader"},
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {importLoaders: 1}
          },
          {loader: "postcss-loader"},  // postcss 적용하기
          {loader: "sass-loader"}
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        // type: 'asset/resource',
        loader: 'file-loader',
        options: {
          name: './images/[name].[ext]?[hash]',
          publicPath: './dist/images/',
          limit: 10000,
        },
      },
    ]
  },
  //성능최적화(압축 등) 관련된것
  optimization : {
    minimizer: [
      // new TerserWebpackPlugin(), //자바스크립트 코드를 난독화하고 debugger구문을 제거한다.
      // new CssMinimizerPlugin() //css 또한 압축가능
    ]
  },
};
