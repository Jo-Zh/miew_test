const webpack = require("webpack");
const path = require("path");
module.exports = {
  mode: "development",
  target: "web",
  entry: "./assets/index.js",
  output: {
    path: path.resolve(__dirname, "./static"), // path to our Django static directory
    // chunkFilename: "[name].bundle.js",
    filename: "miew_via_webpack.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  performance: {
    hints: false,
  },
};
