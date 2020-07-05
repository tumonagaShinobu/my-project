const path = require('path');
module.exports = {
  // publicPath: '/public',
  outputDir: 'dist/',
  pages: {
    list: {
      // 最初に実行されるファイル名
      entry: 'src/pages/list/main.js',
      // テンプレートファイル
      template: 'src/pages/list/index.html',
      // 出力されるファイル名
      filename: 'index.html',
      // タイトルの設定
      // <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'List',
      // チャンクの指定
      //chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    confirm: {
      entry: 'src/pages/confirm/main.js',
      template: 'src/pages/confirm/index.html',
      filename: 'confirm.html',
      title: 'Confirm'
    },
    // サブページをせっているするとエントリーページのファイル以外はこちらが参照される。
    // テンプレートファイルは、 `public/subpage.html`
    // public/subpage.htmlがなかったら `public/index.html`が呼び出される。
    // 出力されるファイル名は `subpage.html`となる。
    // subpage: 'src/subpage/main.js'
  },
  // キャッシュバスティングのためにファイル名にハッシュをつけている。
  // デフォルトでtrueなので、falseの場合のみ指定
  filenameHashing: false,
  // ポートなどの設定
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, 'src'),
      }
    },
    plugins: [
      // plugin
    ]
  },
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, 'src/'),
    host: 'localhost',
  },
}