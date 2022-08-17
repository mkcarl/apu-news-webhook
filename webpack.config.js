const path = require('path');
module.exports = {
    resolve: {
        extensions: ['.ts', '.js'],
    },
    mode: 'development',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
        ],
    },
    entry: './src/app.js',
    output: {
        clean: true,
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        devtoolModuleFilenameTemplate: '[resource-path]',
    },
    target: 'node',
};
