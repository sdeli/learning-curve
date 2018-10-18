const gulp = require("gulp"),
 	  gulpWatch = require("gulp-watch"),
 	  browserSync = require("browser-sync").create(),
	  exec = require('child_process').exec;
let watchIterator = 0;
let sitename = 'JS Design Patterns Player'

function executeShell(){
	exec(`rel \'${sitename}\'`, function(err, stdout,stderr){});
}

gulp.task( "watch", function(){

	gulpWatch('./application/*.html', function(){
		gulp.start('import-scripts');
		executeShell();
	});

	gulpWatch('./application/js/**/*.js', function(){
		gulp.start('import-scripts');
		executeShell();
	});

});
