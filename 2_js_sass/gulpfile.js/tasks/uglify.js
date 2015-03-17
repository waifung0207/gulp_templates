var config			= require('../config').uglify;
var gulp 			= require('gulp');
var uglify 			= require('gulp-uglifyjs');
var handleErrors	= require('../lib/handleErrors');
var reload			= require('browser-sync').reload;

gulp.task('uglify', function() {
	return gulp.src(config.src)
		.on('error', handleErrors)
		.pipe(uglify(config.dest_file, config.settings))
		.pipe(gulp.dest(config.dest))
		.pipe(reload({stream:true}));
});