/*
GULP AUTOMATISATION FILE

Most important methods
	gulp.task
	gulp.startwq
	gulp.watch

to create a procedure which can be called from the command line like: gulp procedure-name call
gulp.task("name" function(){ ... })

*/

require('./gulp/tasks/watch.js');
require('./gulp/tasks/scripts.js')