const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Webpack = require("webpack");

commonConfig = {
  entry: {
    app: [path.join(__dirname, "src/index.jsx")],
    vender: ["react", "react-router-dom", "redux", "react-dom", "react-redux"]
  },
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: ["babel-loader?cacheDirectory=true"],
        include: path.join(__dirname, "src")
      },
      {
        test: /\.js$/,
        use: ["babel-loader?cacheDirectory=true"],
        include: path.join(__dirname, "src")
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      pages: path.join(__dirname, "src/pages"),
      components: path.join(__dirname, "src/components"),
      router: path.join(__dirname, "src/router"),
      actions: path.join(__dirname, "src/redux/actions"),
      reducers: path.join(__dirname, "src/redux/reducers")
    },
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src/index.html")
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: "vender"
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: "runtime"
    }),
    new Webpack.HashedModuleIdsPlugin(),
  ]
};

module.exports = commonConfig;
