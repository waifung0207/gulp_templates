var gulp 			= require('gulp');
var gulpSequence 	= require('gulp-sequence');

gulp.task('build', function(cb) {
	gulpSequence('clean', ['images'], ['sass'], cb);
});