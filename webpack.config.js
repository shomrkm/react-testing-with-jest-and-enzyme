const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const basePath = __dirname;

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(basePath, "dist/"),
    filename: "main.js"
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    modules: [path.resolve(basePath, 'src'), 'node_modules'],
  },
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: path.join(basePath, "dist"),
    inline: true,
    host: "localhost",
    hot: true,
    open: true,
    port: 3000,
    disableHostCheck: true,
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 200,
    poll: 1000,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]",
          esModule: false,
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};