const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// const WeappWebpackPlugin = require('./build/weapp-webpack-plugin');
const protocolPath = path.resolve(__dirname, 'shared/protocols');

module.exports = {
    entry: './index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin([
            'res/**/*.*'
        ])
    ]
}