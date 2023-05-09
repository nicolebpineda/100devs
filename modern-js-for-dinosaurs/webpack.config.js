// webpack.config.js
module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
      filename: 'main.js',
      publicPath: 'dist'
    },
    devtool: "source-map",
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    }
};