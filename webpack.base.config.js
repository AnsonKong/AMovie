module.exports = {
	mode: process.env.NODE_ENV,
	output: {
		publicPath: process.env.NODE_ENV === 'production' ? '/public/' : '/'
	},
	module: {
		rules: [
			{
	      test: /\.js$/,
	      exclude: /node_modules/,
	      use: [ 'babel-loader' ]
	    },
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				use: [ 'file-loader' ]
			},
			{
				test: /\.vue$/,
				use: [ 'vue-loader' ],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [ 'file-loader' ]
			}
		]
	},
};