const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const resolve = dir => path.join(__dirname, '../', dir);

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: resolve('app/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: '[name].css',
});

const CleanWebpackPluginConfig =  new CleanWebpackPlugin({
  verbose: true,
});

module.exports = {
  entry: [
    './app/styles/index.scss',
    './app/assets/index.js',
    './app/index.js',
  ],
  output: {
    filename: '[name].js',
    path: resolve('build'),
  },
  resolve: {
    alias: {
      _atoms: resolve('app/components/atoms/'),
      _molecules: resolve('app/components/molecules/'),
      _organisms: resolve('app/components/organisms/'),
      _templates: resolve('app/components/templates/'),
      _pages: resolve('app/components/pages/'),
      _environment: resolve('app/components/environment/'),
      _hooks: resolve('app/hooks/'),
      _store: resolve('app/store/'),
      _actions: resolve('app/store/actions/'),
      _thunks: resolve('app/store/thunks/'),
      _reducers: resolve('app/store/reducers/'),
      _assets: resolve('app/assets/'),
      _styles: resolve('app/styles/'),
      _utils: resolve('app/utils/'),
      _api: resolve('app/api/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('app')],
      },
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/i,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'images/[name].[ext]' },
          },
          {
            loader: 'image-webpack-loader',
            query: {
              optipng: { optimizationLevel: 7 },
              mozjpeg: { progressive: true },
              gifsicle: { interlaced: false },
              pngquant: { quality: '75-90', speed: 3 },
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[ext]',
          limit: 8192,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: { name: 'icons/[name].[ext]' },
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: { name: 'fonts/[name].[ext]' },
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    MiniCssExtractPluginConfig,
    CleanWebpackPluginConfig,
  ],
  performance: {
    hints: false,
  },
};
