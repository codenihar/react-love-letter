module.exports = {
    // other configurations
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
        },
      ],
    },
    // other configurations
  };
  