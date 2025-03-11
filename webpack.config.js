const path = require("path");
const SRC_DIR = path.resolve(__dirname, "./src");
const DIST_DIR = path.resolve(__dirname, "./dist");


const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


let mode = "production";

var target = "web";

if (process.env.NODE_ENV === "production") {
    mode = "production";
}

module.exports = {
    mode: mode,
    target: ['web'],
    entry: {
        index: SRC_DIR + "/index.js",
    },

    output: {
        path: DIST_DIR,
        //assetModuleFilename: "images/[name][ext][query]",
        chunkLoading: false,
        wasmLoading: false,
    },



    module: {
        rules: [
            
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                // For pure CSS - /\.css$/i,
                // For Sass/SCSS - /\.((c|sa|sc)ss)$/i,
                // For Less - /\.((c|le)ss)$/i,
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2|webp)$/i,
                // More information here https://webpack.js.org/guides/asset-modules/
                type: "asset/resource",
                generator: {
                    filename: 'images/[name][ext][query]', // This ensures images are placed in the images folder inside dist
                }
            },

            {
                test: /\.svg$/,
                use: "file-loader"
            },
            {
                test: /\.xml/,
                type: 'asset/resource',
                generator: {
                    filename: 'sitemap.xml',
                },
            },
            {
                test: /\.(webm|mp4|ogg)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'videos/[name][ext][query]', // Stores videos in a "videos" folder
                }
            },
            {
                test: /\.txt/,
                type: 'asset/resource',
                generator: {
                    filename: 'robots.txt',
                },
            },
            

        ],
    },

    devtool: "source-map",

    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    },

    devServer: {
        contentBase: "./dist",
        hot: true,
    },

    plugins: [
        // Automatically remove all unused webpack assets on rebuild
        // default: true
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        /*new CleanWebpackPlugin(),*/
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: SRC_DIR + "/index.html",
            inject: true,
            chunks: ['index'],
            meta: {
                'description': { name: 'description', content: 'Your best partner for digital transformation.' },

                'og:description': { property: 'og:description', content: 'Discover Webify, a leading web design agency providing instant access to expert creatives for your business.' },
                'og:type': { property: 'og:type', content: 'website' },
                'og:url': { property: 'og:url', content: 'https://webifymk.netlify.app/' },
                   'og:image': { property: 'og:image', content: 'https://webifymk.netlify.app/images/webify_poster.webp' },
                'twitter:card': { name: 'twitter:card', content: 'summary_large_image' },
                'twitter:title': { name: 'twitter:title', content: 'Webify - Acsessible Website Design & Development' },
                'twitter:description': { name: 'twitter:description', content: 'Discover Webify, a leading web design agency providing instant access to expert creatives for your business.' },
                'twitter:image': { name: 'twitter:image', content: 'https://webifymk.netlify.app/images/webify_poster.webp' }
            }
        }),

        // Macedonian Version
        new HtmlWebpackPlugin({
            filename: 'mk.html',
            template: './src/mk.html',
            inject: true,
            chunks: ['index'],
            meta: {
                'description': { name: 'description', content: 'Вашиот најдобар партнер за дигитализација на бизнис.' },

                'og:description': { property: 'og:description', content: 'Откријте го Webify, водечки веб-дизајнери со пристап до искусни креативци за вашиот бизнис.' },
                'og:type': { property: 'og:type', content: 'website' },
                'og:url': { property: 'og:url', content: 'https://webifymk.netlify.app/mk' },
                'og:image': { property: 'og:image', content: 'https://webifymk.netlify.app/images/webify_poster.webp' },
                'twitter:card': { name: 'twitter:card', content: 'summary_large_image' },
                'twitter:title': { name: 'twitter:title', content: 'Webify - Најдостапни Веб-страници' },
                'twitter:description': { name: 'twitter:description', content: 'Откријте го Webify, водечки веб-дизајнери со пристап до искусни креативци за вашиот бизнис.' },
                'twitter:image': { name: 'twitter:image', content: 'https://webifymk.netlify.app/images/webify_poster.webp' }
            }
        }),

        // Terms and Conditions Page
        new HtmlWebpackPlugin({
            filename: 'termsNconditions.html',
            template: './src/termsNconditions.html',
            inject: true,
            chunks: ['index'],
            meta: {
                'description': { name: 'description', content: 'Terms and conditions for using Webify services.' },
                'og:title': { property: 'og:title', content: 'Webify - Terms and Conditions' },
                'og:description': { property: 'og:description', content: 'Read the terms and conditions for using Webifys services.' },
                'og:type': { property: 'og:type', content: 'website' },
                'og:url': { property: 'og:url', content: 'https://webifymk.netlify.app/termsnconditions' },
                'og:image': { property: 'og:image', content: 'https://webifymk.netlify.app/images/webify_poster.webp' },
                'twitter:card': { name: 'twitter:card', content: 'summary_large_image' },
                'twitter:title': { name: 'twitter:title', content: 'Webify - Terms and Conditions' },
                'twitter:description': { name: 'twitter:description', content: 'Read the terms and conditions for using Webifys services.' },
                'twitter:image': { name: 'twitter:image', content: 'https://webifymk.netlify.app/images/webify_poster.webp' }
            }
        }),
    ],
};