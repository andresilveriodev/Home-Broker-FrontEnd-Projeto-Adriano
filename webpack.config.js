const path = require('path');

module.exports = {
  entry: './src/index.js', // Ponto de entrada do seu aplicativo
  output: {
    filename: 'bundle.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, 'dist'), // Diretório de saída
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpila código JavaScript moderno (ES6+)
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Carrega e aplica estilos CSS
      },
    ],
  },
  resolve: {
    alias: {
<<<<<<< HEAD
      components: path.resolve(__dirname, 'src/components/'), // Exemplo de alias para pastas
=======
<<<<<<< HEAD
      components: path.resolve(__dirname, 'src/components/'), // Exemplo de alias para pastas
=======
      components: path.resolve(__dirname, 'src/components/'), // Alias para facilitar importações
>>>>>>> txt organizado
>>>>>>> 9734d8542b7edca61416b3f77fbcbb72c526db74
      shared: path.resolve(__dirname, 'src/shared/'),
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
