const path = require('path');

console.log('__dirname', __dirname);

module.exports = {
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, './example/js'),
    filename: 'bundle.js',
  }
};
