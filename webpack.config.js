const path = require ('path')
const {CleanWebpackPlugin} = require ('clean-webpack-plugin')
const CopyWebpackPlugin = require ('copy-webpack-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");

module.exports = {
    
    entry: ['./src/index.js', './src/style/style.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `[name].bundle.js`
    },
    mode: 'production',
    devServer: {
        port: 5555,
        open: true
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery'
        //   }),
     
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
      
        new HtmlWebpackPlugin ({
            filename: 'index.html',
            template: './src/html/index.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin ({
            filename: 'main.html',
            template: './src/html/main.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin ({
            filename: 'portfolio.html',
            template: './src/html/portfolio.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin ({
            filename: 'rewiews.html',
            template: './src/html/rewiews.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin ({
            filename: 'blog.html',
            template: './src/html/blog.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin ({
            filename: 'content.html',
            template: './src/html/content.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin ({
            filename: 'vacancy.html',
            template: './src/html/vacancy.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin ({
            filename: 'contacts.html',
            template: './src/html/contacts.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin ({
            filename: 'about.html',
            template: './src/html/about.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin ({
            filename: 'context.html',
            template: './src/html/context.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin ({
            filename: 'smm.html',
            template: './src/html/smm.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin ({
            filename: 'dev.html',
            template: './src/html/dev.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin ({
            filename: 'projTehnonic.html',
            template: './src/html/projTehnonic.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin ({
            filename: 'projAlphsh.html',
            template: './src/html/projAlphsh.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin ({
            filename: 'projFeod.html',
            template: './src/html/projFeod.html',
            inject: 'body'
        }),
       
        new HtmlWebpackPlugin ({
            filename: 'projsplavslov.html',
            template: './src/html/projsplavslov.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin ({
            filename: 'projdiplomat.html',
            template: './src/html/projdiplomat.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin ({
            filename: 'projaltai.html',
            template: './src/html/projaltai.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin ({
            filename: 'projkitchen.html',
            template: './src/html/projkitchen.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin ({
            filename: 'projautolombard.html',
            template: './src/html/projautolombard.html',
            inject: 'body'
        }),




        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/assets'
                }
            ]
        }),
        new ImageminWebpWebpackPlugin(

            {
                config: [{
                  test: /\.(jpe?g|png)/,
                  options: {
                    quality:  95
                  }
                }],
                overrideExtension: true,
                detailedLogs: false,
                silent: false,
                strict: true
              }

        ),

    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            },
            {
                test: /\.(png|gif|jpe?g|svg|bmp|webp)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|gif|jpe?g|svg|bmp)$/,
                use: [
                    {
                        loader: 'imagemin-webp-webpack-plugin',
                        options: {
                            outputPath: 'images',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|ttf|otf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts'
                        }
                    }
                ]
            }
        ]
            
        }
    
}

