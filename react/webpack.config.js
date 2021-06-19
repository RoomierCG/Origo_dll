const { resolve } = require("path");

const config = {
  mode: "development",
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },

  entry: { index: resolve(__dirname, "src/index.js") },
  output: { path: resolve(__dirname, "static/web") },

  module: {
    rules: [
      {
        test: /\.js(|x)?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "build"),
  },
};

module.exports = config;
