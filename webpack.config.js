const    HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const           CopyPlugin = require("copy-webpack-plugin");

module.exports = {

    mode: 'development',

    output: {
        clean: true,
    },

    module:{
        rules:[
            {
                test:/\.html$/i,
                loader:'html-loader',
                options:{minimize: false}
            },
            {
                test:/\.css$/i,
                exclude: /style.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /style.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test:/\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            },
        ],
    },

    plugins:[
        // el plugin genera un documento HTML que incluye todos los bundles webpack inyectados en el body mediante un script
        new HtmlWebPackPlugin({           
            template: './src/index.html',
            filename: './index.html'
        }),

        new MiniCssExtractPlugin({
            
        }),

        /* new CopyPlugin({
            
        }), */
    ]
};