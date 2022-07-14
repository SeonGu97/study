const path = require('path');

module.exports = {
  entry: '/JS/app/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
};