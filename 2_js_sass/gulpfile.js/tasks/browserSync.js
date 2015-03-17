var config			= require('../config').browserSync;
var gulp			= require('gulp');
var browserSync		= require('browser-sync');

gulp.task('browserSync', [], function() {
	browserSync(config);
});