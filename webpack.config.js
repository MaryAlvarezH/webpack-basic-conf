const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./js/index.js",
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/epy.css"
    }),
    new CopyWebpackPlugin([{ from: "assets", to: "assets" }])
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                return path.relative(path.dirname(resourcePath), context) + "/";
              }
            }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          outputPath: "/assets/icons"
        }
      }
    ]
  }
};
