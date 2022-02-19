const path = require('path')

const webpack = require('webpack')

module.exports = 
{
  entry:
  [ path.join( __dirname, 'src/index.js' ) 
  ],
   output: 
   { path: path.join( __dirname, 'dist'),
             filename: 'bundle.js'
   },
   module:
   {
      rules:
      [
        {
           test:/\.js$/,
           use: ['babel-loader'],
           exclude: /node_modules/
        }
      ]
   }
}