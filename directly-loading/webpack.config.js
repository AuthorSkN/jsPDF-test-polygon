const HtmlWebPackPlugin = require('html-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    ///...
    plugins: [
        ///...
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
        ///...
    ],
    module: {
        rules: [
            ///...
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: !isDevelopment}
                    }
                ]
            }
        ]
    }
}