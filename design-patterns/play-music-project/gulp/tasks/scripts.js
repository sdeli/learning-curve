var gulp = require("gulp");
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var i = 0
 
gulp.task('import-scripts', function() {
	console.log('scripts ' + i);
	i++;
  return gulp.src('./application/js/modules/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./application/js/'));
});


