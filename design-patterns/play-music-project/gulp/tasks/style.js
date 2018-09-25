var gulp = require("gulp"),
 	  gulpPostcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    postcssSimpleVars = require("postcss-simple-vars"),
    postcssNested = require("postcss-nested"), 
    postcssMixins = require("postcss-mixins"),
    postcssImport = require("postcss-import"),
    hexRgba = require("postcss-hexrgba");
   
gulp.task("styles", function(){

   return gulp.src("exercise-sites/travel-site/app/assets/css/style.css")
   .pipe( gulpPostcss([ postcssImport,autoprefixer,postcssMixins, postcssSimpleVars,hexRgba, postcssNested]) )
   .on('error', function(errorInfo){
   		console.log( errorInfo.toString() )
   		this.emit('end');
   })
   .pipe( gulp.dest('exercise-sites/travel-site/app/assets/tmp/css/') );

});
