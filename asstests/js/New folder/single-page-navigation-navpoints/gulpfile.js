'use strict';

const gulp         = require('gulp'),
	  autoprefixer = require('gulp-autoprefixer'),
	  sourcemaps   = require('gulp-sourcemaps'),
	  uglify       = require('gulp-uglify'),
	  rename       = require('gulp-rename'),
	  browserSync  = require('browser-sync'),
	  del          = require('del');

let path = {
	html: './src/*.html',
	styles: [
		'./src/styles/demo.navpoints.css'
	],
	scripts: [
		'./src/scripts/jquery.navpoints.js'
	],
	vendor: {
		scripts: [
			'./node_modules/jquery/dist/jquery.min.js'
		]
	}
}


function views() {
	return gulp.src(path.html)
		       .pipe(gulp.dest('./demo/'))
			   .pipe(browserSync.reload({stream: true}));
}

function styles() {
	return gulp.src(path.styles)
			   .pipe(autoprefixer(
				   ['last 15 versions', '> 1%'],
				   { cascade: true }
			   ))
			   .pipe(gulp.dest('./demo/'))
			   .pipe(browserSync.reload({stream: true}));
}

function scripts() {
	return gulp.src(path.scripts)
			   .pipe(gulp.dest('./dist/'))
			   .pipe(browserSync.reload({stream: true}));
}

function scripts_min() {
	return gulp.src(path.scripts)
			   .pipe(sourcemaps.init())
			   .pipe(uglify())
			   .pipe(rename({suffix: '.min'}))
			   .pipe(sourcemaps.write('./'))
			   .pipe(gulp.dest('./dist/'))
			   .pipe(browserSync.reload({stream: true}));
}

function vendor_scripts() {
	return gulp.src(path.vendor.scripts)
			   .pipe(gulp.dest('./demo/'))
}

function clean() {
	return del(['./dist', './demo']);
}

function watch() {
	browserSync.init({
		server: {
		    baseDir: './demo',
		    routes: { '/dist': 'dist' }
		},
		notify: false,
		host: 'localhost',
		port: 3000,
		logPrefix: 'NavPoints'
    });

	gulp.watch(path.html, views);
	gulp.watch(path.styles, styles);
	gulp.watch(path.scripts, scripts);
	gulp.watch(path.scripts, scripts_min);
}

const build = gulp.series(
	views,
	styles,
	scripts,
	scripts_min,
	vendor_scripts
);

gulp.task('build', gulp.series(clean, build));
gulp.task('default', gulp.series('build', watch));
gulp.task('clean', clean);
