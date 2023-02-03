const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const DEV_SERVER_PORT = 3050
const mode = 'development'

module.exports = {
    mode,
    target: 'web',
    context: path.resolve(__dirname, 'src'),
    entry: './index.tsx',
    // shared: ['react', 'react-dom'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.css', '.js', '.jsx']
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    devServer: {
        port: DEV_SERVER_PORT,
        historyApiFallback: true,
        hot: true,
        client: {
            progress: true,
        },
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'babel-loader'},
                    {loader: 'ts-loader'}
                ]
            }, {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    }
                ]
            }
        ]
    },
    devtool: 'source-map'
}