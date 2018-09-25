var gulp = require("gulp");
var svgSprite = require("gulp-svg-sprite");
var rename = require("gulp-rename");
var del = require("del");

/*
	This task is tricky
	1. to implement a sprite you need: the sprite.svg and sprite.css
	2. sprite.svg is created based on the config objects sprite key
	3. the css is created by the creatSprite task
	4. as a beginning we delete the rests of the previous run
	5. as a finish we delete unnecessery files from current run
	6. copySpirteCss copies the css into the modules folder
	7. copySprite copies the sprite.svg into images folder
	8. create sprietes creates the sprite.css with a mustache.js template from 'gulp/templates/sprites.css'
	   based on config objects template key
*/

var config = {
	shape: {
		spacing:{
			padding : 1
		}
	},
	mode: {
		css: {
			sprite: 'sprite.svg',
		 	render: {
				css: {
		 			template: 'gulp/templates/sprites.css'
				} //css
		  	} // render
		} //css  
	}//mobile
}; // var config


gulp.task('beginClean', function(){

	return del(['exercise-sites/travel-site/app/assets/tmp/sprite'])

});

gulp.task('createSprite',["beginClean"], function(){

	return gulp.src('exercise-sites/travel-site/app/assets/images/icons/**/*.svg')
	    .pipe( svgSprite(config) )
		.pipe( gulp.dest('exercise-sites/travel-site/app/assets/tmp/sprite/') );

});

gulp.task("copySprite",["createSprite"], function(){

	return gulp.src('exercise-sites/travel-site/app/assets/tmp/sprite/**/*.svg')
		.pipe(gulp.dest("exercise-sites/travel-site/app/assets/images/sprites/"))

});

gulp.task('CopySpriteCss',['createSprite'], function(){

	return gulp.src('exercise-sites/travel-site/app/assets/tmp/sprite/css/*.css')
			.pipe( rename('_sprite.css') )
			.pipe( gulp.dest('exercise-sites/travel-site/app/assets/css/modules/') );
});

gulp.task('endClean',["CopySpriteCss", "createSprite", "copySprite"], function(){

	return del(['exercise-sites/travel-site/app/assets/tmp/sprite'])

});

gulp.task('icons',['beginClean','CopySpriteCss','copySprite' ,"createSprite",'endClean' ] )


