var path = require('path');
//var webpack = require('webpack');

module.exports = {
  mode: "production",
  
  entry: "./lib/index.js",

  output: {
    path: __dirname + "/dist",
    filename: "markdown-it-imsize.js",
    library: "markdown-it-imsize.js",
    libraryTarget: "umd"
  },

  resolve: {
    modules: [__dirname + "/lib", "node_modules"], 
    fallback: {
        "fs": false,
        "path": false ,
        "os": false
    }
  }
};
