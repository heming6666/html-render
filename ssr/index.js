const webpack = require('webpack');
const config = require('./webpack.server.js');

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.log(err);
  }
});