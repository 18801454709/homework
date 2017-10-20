var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
	module:{
		rules:[{
	        test: /\.js|.jsx$/,
	        use: ["babel-loader"],
	        exclude: /node_modules/
	    },
		{
			test:/\.css$/,
			use:["style-loader","css-loader?modules"]
		},
		{
			test:/\.html$/,
			use:["html-loader"]
		},
 		{
			test:/\.png|.jpg$/,
			use:["url-loader"]
		},
        {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader'
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
            loader: 'file-loader',
            query: {
               name: '[name].[ext]?[hash]'
            }
        }]
	},
	resolve: {

        alias: {
            "vue": "vue/dist/vue.js"
        }
    },
	plugins:[
		// new webpack.optimize.UglifyJsPlugin(),
		new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            template: "./index.html"
        })
	],
	devServer: {
		port: 9090,
        host: 'localhost',
        hot: true,
        contentBase:__dirname+"/src/static",
        watchContentBase:true,
        // setup(app){
        //     app.get("/message",function(req,res){
        //         res.setHeader("Access-Control-Allow-Origin","*");
        //         res.setHeader("content-type","application/json;charset=utf-8");
        //         res.json(data);
        //     })
        // },
        proxy:{
                '/api':{
                target: 'http://localhost:9090', // 你接口的域名
                secure: false,      // 如果是https接口，需要配置这个参数
                changeOrigin: true,     // 如果接口跨域，需要进行这个参数配置
            }
        }
	}

}