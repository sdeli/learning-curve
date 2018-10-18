var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
 
gulp.task('browserify', function() {
    return browserify('./exercising/exerc.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundled-exerc.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./dest/'));
});

gulp.task('default', () => {
	gulp.watch('exercising/*.js', ['browserify'])
});