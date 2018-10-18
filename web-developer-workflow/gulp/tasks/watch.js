var gulp = require("gulp"),
gulpWatch = require("gulp-watch"),
browserSync = require("browser-sync").create();
var watchIterator = 0;


gulp.task( "watch", function(){

	browserSync.init({ 
		notify:false,
		server: {
			baseDir: "/home/sandor/Documents/amit-eddig-tudok/web-developer-workflow/exercise-sites/travel-site/app/"
		}	
	});

	gulpWatch('exercise-sites/travel-site/app/index.html', function(){

		browserSync.reload();

	});

	gulpWatch('exercise-sites/travel-site-files/app/index.html', function(){

		browserSync.reload();
		gulp.start("iterator");

	});

	gulpWatch('exercise-sites/travel-site/app/assets/css/style.css', function(){

		gulp.start("cssInject");

	});

	gulpWatch('exercise-sites/travel-site/app/assets/css/*/*.css', function(){

		gulp.start("cssInject");

	});

	gulpWatch('exercise-sites/travel-site/app/assets/js/**/*.js', function(){

		gulp.start("scriptsRefresh");

	});

});


gulp.task( "cssInject",['styles'], function(){

	browserSync.reload();
	gulp.start("iterator");
});

gulp.task( "iterator", function(){

	console.log("current Watch: "+watchIterator );
	watchIterator++

});

gulp.task('scriptsRefresh',['scripts'], function(){

	browserSync.reload();

});