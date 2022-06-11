module.exports = {
    resolve: {
        extensions: ['.ts', '.js']
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ]
    }
}