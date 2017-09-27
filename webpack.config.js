var path = require('path');
var copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/App.jsx",
    output: {
        filename: 'common.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        },{
            test: /\.scss$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader'
                }
            ]
        },{
            test: /\.(jpg|png)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            ]
        }]
    },

    plugins: [
        new copyWebpackPlugin([
            { from: 'src/index.html' },
            { from: 'img/*'}
        ])
    ]
}