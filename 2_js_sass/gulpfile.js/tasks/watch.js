var gulp   = require('gulp');
var config = require('../config');
var watch  = require('gulp-watch');

gulp.task('watch', ['build', 'browserSync'], function(callback) {
	watch(config.images.src, function() { gulp.start('images'); });
	watch(config.sass.src, function() { gulp.start('sass'); });
});