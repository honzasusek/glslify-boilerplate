"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(glsl|frag|vert)$/,
        exclude: /node_modules/,
        use: [
          "raw-loader",
          {
            loader: "glslify-loader"
          }
        ]
      }
    ]
  },
  serve: {
    port: 1337,
    content: "./dist"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    https: false // true for self-signed, object for cert authority
    // noInfo: true // only errors & warns on hot reload
  },
  plugins: [new HtmlWebpackPlugin()]
};
