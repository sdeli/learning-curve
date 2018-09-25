var gulp = require("gulp");
var imageMin = require("gulp-imagemin");
var del = require("del");
var usemin = require("gulp-usemin");
var cssNano = require("gulp-cssnano");
var gulpRev = require("gulp-rev");
var uglify = require("gulp-uglify");
browserSync = require("browser-sync").create();

gulp.task("prewievDist", function(){

	browserSync.init({ 
		notify:false,
		server: {
			baseDir: "./docs"
		}	
	})

})

gulp.task("delDistFolder",['styles'], function(){

	return del(['./docs']);

})

gulp.task("optimizeImgs", ["delDistFolder", "icons"], function(){

	return gulp.src(["./exercise-sites/travel-site/app/assets/images/**/*", '!./exercise-sites/travel-site/app/assets/images/icons', '!./exercise-sites/travel-site/app/assets/images/icons/**/*'])
	.pipe( imageMin({
		progressive : true,
		interlaced : true,
		multipass : true
	}) )
	.pipe( gulp.dest("./docs/assets/images") );

})

gulp.task("usemin",["delDistFolder", "scripts"], function(){

	return gulp.src("./exercise-sites/travel-site/app/index.html")
	.pipe( usemin({

			css:[function(){return gulpRev()}, function(){return cssNano()}],
			js:	[function(){return gulpRev()}, function(){return uglify()}]

		  }) )
	.pipe(gulp.dest("./docs"))
})

gulp.task("build",["delDistFolder","optimizeImgs", "usemin"]);