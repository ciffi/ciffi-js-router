module.exports = {
	entry: {
		main: './src/scripts/main.js'
	},
	output: {
		path: __dirname + '/' + '../static',
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'eslint-loader',
				exclude: __dirname + '/' + './node_modules',
				options: {
					configFile: './.eslintrc'
				}
			},
			{
				test: /\.twig$/,
				loader: 'twig-loader'
			}
		]
	}
};