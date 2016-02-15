var gulp     = require('gulp'),
    uglify   = require('gulp-uglify'),
    concat   = require('gulp-concat'),
    stylus   = require('gulp-stylus'),
    csscomb  = require('gulp-csscomb'),
    nano     = require('gulp-cssnano');

gulp.task('build-css', function() {
	return gulp.src('source/stylus/*.styl')
			.pipe(stylus())
			.pipe(csscomb())
			.pipe(nano())
			.pipe(gulp.dest('public/assets/stylesheets'));
});

gulp.task('build-libs', function() {
	return gulp.src([
	            'source/javascript/libs/jquery.min.js',
	            'source/javascript/libs/parsley.min.js'
        	])
			.pipe(concat('plugins.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('public/assets/javascript'));
});

gulp.task('build-js', ['build-libs'], function() {
	return gulp.src('source/javascript/*.js')
			.pipe(concat('main.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('public/assets/javascript'));
});

gulp.task('copyHtml', function() {
	gulp.src('source/*.html').pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
	gulp.watch('source/stylus/*.styl', ['build-css']);
	gulp.watch('source/javascript/*.js', ['build-js']);
	gulp.watch('source/*.html', ['copyHtml']);
});