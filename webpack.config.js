const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/index.ts',
    experiments: {
        asyncWebAssembly: true,
        importAsync: true
    },
    output: {
        publicPath: '',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '',
                        },
                    },
                    'css-loader',
                ],
                include: [path.resolve(__dirname, 'src')],
            },
            // {
            //     test: /\.rs$/,
            //     type: 'webassembly/experimental',
            //     use: {
            //         loader: 'rust-native-wasm-loader',
            //         options: {
            //             release: true
            //         }
            //     }
            // }
            // {
            //     test: /\.wasm$/,
            //     loader: 'base64-loader',
            // }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        // new WasmPackPlugin({
        //     crateDirectory: __dirname,
        // }),
    ],
};
