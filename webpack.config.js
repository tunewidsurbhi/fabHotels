module.exports = {
  entry: './reactJS/main.js',
  output: {
    path: __dirname +'./reactJS',
    filename: './bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './reactJS'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}