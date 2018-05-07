const merge = require("webpack-merge");
const path = require("path");

const commonConfig = require("./webpack.common.config.js");

const devConfig = {
  devtool: "inline-source-map",
  entry: {
    app: ["react-hot-loader/patch", path.join(__dirname, "src/index.js")]
  },
  output: {
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader",'postcss-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    historyApiFallback: true
  }
};

module.exports = merge({
  customizeArray(a, b, key) {
    /*entry.app不合并，全替换*/
    if (key === "entry.app") {
      return b;
    }
    return undefined;
  }
})(commonConfig, devConfig);