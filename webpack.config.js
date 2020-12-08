const path = require('path');

module.exports = {
  entry: [
    './src/main.ts'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  },
};
