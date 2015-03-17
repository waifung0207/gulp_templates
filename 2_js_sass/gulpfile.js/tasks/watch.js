var gulp			= require('gulp');
var config			= require('../config');
var watch			= require('gulp-watch');
var browserSync		= require('browser-sync');

gulp.task('watch', ['build', 'browserSync'], function(callback) {

	// watch JS files
	watch(config.uglify.src, function() {
		gulp.start('uglify');
	});

	// watch Sass files
	watch(config.sass.src, function() {
		gulp.start('sass');
	});

	// watch images
	watch(config.images.src, function() {
		gulp.start('images');
	});

	// watch html files
	watch(config.dir_public + '/**/*.html', function() {
		browserSync.reload();
	});
	
});