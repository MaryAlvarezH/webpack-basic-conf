const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  //   entry: "./src",
  //   output: {
  //     path: path.resolve(__dirname, "dist"),
  //     filename: "bundle.js"
  //   },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  }
};
