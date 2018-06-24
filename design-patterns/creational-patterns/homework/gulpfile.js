const browserify = require('browserify');
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const sitename = 'Mastering JavaScript - Google Chrome';
exec = require('child_process').exec;
var i = 0; 

gulp.task('reload-browser', () => {
	console.log('executed');
	executeShell();
	function executeShell(){
		exec(`rel \'${sitename}\'`, function(err, stdout,stderr){});
	}
});

//for 'request()' function
gulp.task('browserify', function() {
	console.log('i: ' + i);
	i++;
    return browserify('./app/controller/flower-app-unbundled.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .on('error', function(errorInfo){
   		console.log( errorInfo.toString() )
   		this.emit('end');
   		})
        .pipe(source('flower-app-bundled.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./app/controller/'));
});

gulp.task('Compile-Scripts-then-Reload-Browser',['browserify'],function(){
	gulp.start('reload-browser');
});

gulp.task('default', () => {
	console.log('fut a default i: ' + i);
	gulp.watch('./app/controller/flower-app-unbundled.js', ['Compile-Scripts-then-Reload-Browser']);
	gulp.watch('./app/controller/controller-modules/*.js', ['Compile-Scripts-then-Reload-Browser']);
});


