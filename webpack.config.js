// entrypoint -> output ->
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  mode: "development",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
              modifyVars: {
                "primary-color": "#DAB49D",
                "link-color": "#5E3023",
                "success-color": "#C08552",
                "error-color": "#5E3023",
                "warning-color": "#DAB49D",
              },
            },
          },
        ],
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: path.join(__dirname, "public"),
  },
};
