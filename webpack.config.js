const path = require("path");
// const MyWebpackPlugin = require("./my-webpack-plugin");
const webpack = require("webpack");
const childProcess = require("child_process");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
    // name의 값은 entry 객체의 key값이 된다.
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        // loader: "file-loader",
        // "파일"을 모듈화 시킨다.
        loader: "url-loader",
        options: {
          publicPath: "./dist/",
          // 파일 주소 앞에 위 경로를 붙인다.
          name: "[name].[ext]?[hash]",
          limit: 20000,
          // 2kb 미만은 base64로 변환 그 이상은 file-loader 작동
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
        Build Date: ${new Date().toLocaleString()}
        Commit Version:${childProcess.execSync("git rev-parse --short HEAD")}
        Author: ${childProcess.execSync("git config user.name")}
      `,
    }),
  ],
};

// Loader: 파일 단위로 각 로더를 적용시킴. / module
// Plugin: 번들된 결과물을 가공 / plugins
