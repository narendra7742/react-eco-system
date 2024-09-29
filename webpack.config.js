// const path = require('path');
// const webpack = require('webpack');

// module.exports = {
//     entry:'./src/index.js',
//     mode: 'development',
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /(node_modules)/,
//                 loader: 'babel-loader',
//                 options: { presets: ["@babel/env"]}
//             },
//             {
//                 test: /\.css$/,
//                 use: ["style-loader", "css-loader"]
//             }
//         ]
//     },
//     resolve: { extensions: ['*', '.js', '.jsx']},
//     output: {
//         path: path.resolve(__dirname, 'dist/'),
//         publicPath: '/dist',
//         filename: 'bundle.js'
//     },
//     devServer: {
//         contentBase: path.join(__dirname, 'public/'),
//         port: 3000,
//         publicPath: 'http://localhost:3000/dist/',
//         hotOnly: true
//     },
//     plugins: [new webpack.HotModuleReplacementPlugin()]
// };

// const path = require('path');
// const webpack = require('webpack');

// module.exports = {
//     entry: './src/index.js',
//     mode: 'development',
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /(node_modules)/,
//                 loader: 'babel-loader',
//                 options: { presets: ["@babel/env"] }
//             },
//             {
//                 test: /\.css$/,
//                 use: ["style-loader", "css-loader"]
//             }
//         ]
//     },
//     resolve: { extensions: ['*', '.js', '.jsx'] },
//     output: {
//         path: path.resolve(__dirname, 'dist/'),
//         publicPath: '/dist/',
//         filename: 'bundle.js'
//     },
//     devServer: {
//         contentBase: path.join(__dirname, 'public/'),
//         port: 3000,
//         publicPath: 'http://localhost:3000/dist/',
//         hot: true,
//         liveReload: true
//     },
//     plugins: [new webpack.HotModuleReplacementPlugin()]
// };

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',  // This is correct for output
        filename: 'bundle.js'
    },
    devServer: {
        static: path.join(__dirname, 'public/'), // Use `static` instead of `contentBase`
        port: 3000,
        hot: true,
        liveReload: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
