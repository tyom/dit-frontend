const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    components: './src/components/index.js',
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].build.js',
    library: 'DITComponents',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [require('postcss-cssnext')()],
          loaders: {
            scss: 'vue-style-loader!css-loader?sourceMap!sass-loader?sourceMap!postcss-loader?sourceMap',
            postcss: 'vue-style-loader!css-loader?sourceMap!postcss-loader?sourceMap',
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        loader: 'vue-style-loader!css-loader?sourceMap!sass-loader?sourceMap!postcss-loader?sourceMap'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
        }
      },
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.template.html',
    }),
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
