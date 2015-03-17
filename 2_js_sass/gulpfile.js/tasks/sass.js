var config			= require('../config').sass;
var gulp			= require('gulp');
var sass			= require('gulp-sass');
var sourcemaps 		= require('gulp-sourcemaps');
var handleErrors	= require('../lib/handleErrors');
var reload			= require('browser-sync').reload;

gulp.task('sass', function() {
	return gulp.src(config.src)
		.pipe(sourcemaps.init())
		.pipe(sass(config.settings))
		.on('error', handleErrors)
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.dest))
		.pipe(reload({stream:true}));
});