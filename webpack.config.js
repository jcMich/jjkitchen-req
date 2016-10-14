const sassLoaderIncludePaths = '';

const basicCssLoaders = [
  'css-loader',
  'postcss-loader',
];

const sassLoaders= basicCssLoaders.concat([
  'sass-loader?precision=10&outputStyle=expanded&sourceMap' + sassLoaderIncludePaths,
]);


module.exports = {
  entry: [
    './cookbook/cookbook_index.jsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.css$/,
        loaders: basicCssLoaders
      },
      {
        test: /\.scss$/,
        loaders: sassLoaders,
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
