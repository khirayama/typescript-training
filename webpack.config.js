module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/dist/public",
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: [/\.ts?$/, /\.tsx?$/], loader: "ts-loader" },
    ]
  },
};
