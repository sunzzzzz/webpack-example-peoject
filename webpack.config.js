var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app/index.js');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:APP_PATH,
    output:{
        path:BUILD_PATH,     //_dirname nodejs的全局变量，指向
        filename:"bundle.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'hot update'
        }),
     ],
    devServer:{
        historyApiFallback:true,
        inline:true
    }
}

