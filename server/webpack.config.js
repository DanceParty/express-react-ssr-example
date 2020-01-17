const path = require("path");
const nodeExternals = require("webpack-node-externals");

console.log(path.resolve(__dirname, "index.js"));

module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "server-build"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "ignore-loader"
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-inline-loader'
      }
    ]
  }
}