// General
var gulp = require('gulp'),
	del = require('del'),
	browserSync = require('browser-sync').create();

// Styles
var sass = require('gulp-sass'),
	sassGlob = require('gulp-sass-glob'),
	autoprefixer = require('gulp-autoprefixer');

// Scripts
var pump = require('pump'),
	uglify = require('gulp-uglify-es').default,
	eslint = require('gulp-eslint'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename');





gulp.task('clean', ['clean:pages', 'clean:media', 'clean:data', 'clean:styles', 'clean:scripts']);
gulp.task('clean:pages', function() { return del('build/**/*.html'); });
gulp.task('clean:media', function() { return del('build/resources/media'); });
gulp.task('clean:fonts', function() { return del('build/resources/fonts'); });
gulp.task('clean:data', function() { return del('build/resources/data'); });
gulp.task('clean:styles', function() { return del('build/resources/styles'); });
gulp.task('clean:scripts', function() { return del('build/resources/scripts'); });

gulp.task('pages', ['clean:pages'], function() {
	return gulp.src('pages/**.html')
		.pipe(gulp.dest('build/'))
		.pipe(browserSync.stream());
});

gulp.task('media', ['clean:media'], function() {
	return gulp.src('resources/media/**/*.{png,jpg,gif,svg,mov,mp3}')
		.pipe(gulp.dest('build/resources/media'))
		.pipe(browserSync.stream());
});

gulp.task('fonts', ['clean:fonts'], function() {
	return gulp.src('resources/fonts/**/*.{eof,svg,ttf,woff}')
		.pipe(gulp.dest('build/resources/fonts'))
		.pipe(browserSync.stream());
});

gulp.task('data', ['clean:data'], function() {
	return gulp.src('resources/data/**/*.json')
		.pipe(gulp.dest('build/resources/data'))
		.pipe(browserSync.stream());
});

gulp.task('styles', ['clean:styles'], function() {
	return gulp.src('resources/styles/**/*.scss')
		.pipe(sassGlob())
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefixer('last 2 versions'))
		.pipe(rename('all.min.css'))
		.pipe(gulp.dest('build/resources/styles'))
		.pipe(browserSync.stream());
});

gulp.task('scripts', ['clean:scripts'], function() {
	return gulp.src(
		[
			// 'node_modules/gsap/src/minified/TweenLite.min.js',
			'resources/scripts/**/*.js'
		])
		.pipe(concat('all.js'))
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
		.pipe(uglify())
		.pipe(rename('all.min.js'))
		.pipe(gulp.dest('build/resources/scripts'))
		.pipe(browserSync.stream());
});

gulp.task('browser-sync', ['build'], function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('watch', function () {
	gulp.watch('pages/**/*.html', ['pages'], browserSync.reload);
	gulp.watch('resources/media/**/*.{png,jpg,gif,svg,mov,mp3}', ['media'], browserSync.reload);
	gulp.watch('resources/fonts/**/*.{eot,svg,ttf,woff}', ['fonts'], browserSync.reload);
	gulp.watch('resources/data/**/*.json', ['data'], browserSync.reload);
	gulp.watch('resources/styles/**/*.scss', ['styles'], browserSync.reload);
	gulp.watch('resources/scripts/**/*.js', ['scripts'], browserSync.reload);
});

gulp.task('build', ['clean', 'pages', 'media', 'fonts', 'data', 'styles', 'scripts']);
gulp.task('run', ['build', 'browser-sync', 'watch']);
gulp.task('default', ['run']);