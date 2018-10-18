var gulp = require("gulp");
var webpack = require("webpack");
var i = 0
gulp.task('scripts', function(callback){
	console.log("msjom");
	console.log(i);
	i++;
	webpack(require('../../webpack.config.js'), function(err, stats){
		if (err) {
			console.log( err.toString() );
		}
		console.log(stats.toString());
		callback();

	})

});

