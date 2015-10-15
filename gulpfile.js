var gulp = require('gulp'),
	path = require('path'),
	jspm = require('jspm'),
	rename = require('gulp-rename'),
	template = require('gulp-template'),
	uglify = require('gulp-uglify'),
	htmlreplace = require('gulp-html-replace'),
	ngAnnotate = require('gulp-ng-annotate'),
	serve = require('browser-sync'),
	yargs = require('yargs').argv;
var Builder = require('systemjs-builder');


var root = 'client';

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder(root, './client/config.js');


// helper method to resolveToApp paths
var resolveTo = function (resolvePath) {
	return function (glob) {
		glob = glob || '';
		return path.join(root, resolvePath, glob);
	}
};

var resolveToApp = resolveTo('app'); // app/{glob}
var resolveToComponents = resolveTo('app/components'); // app/components/{glob}


// map of all our paths
var paths = {
	css: resolveToApp('**/*.css'),
	html: [
		resolveToApp('**/*.html'),
		path.join(root, 'index.html')
	],
	//blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
	dist: path.join(__dirname, 'dist/')
};


gulp.task('serve', function () {
	'use strict'
	require('chokidar-socket-emitter')({ port: 8081, path: 'client', relativeTo: 'client' })
	serve({
		port: process.env.PORT || 3000,
		open: false,
		files: [].concat(
			[paths.css],
			paths.html
			),
		server: {
			baseDir: root,
			// serve our jspm dependencies with the client folder
			routes: {
				//'/jspm.config.js': './jspm.config.js',
				'/jspm_packages': './jspm_packages'
			}
		},
	});
});



gulp.task('build', function () {
	var dist = path.join(paths.dist + 'app.js');
	
	return builder.buildStatic('app/app.ts', dist, {
		minify: false, 
		mangle: false,
	})
	
	// Use JSPM to bundle our app
	//return jspm.bundleSFX('app/app.ts', dist, {})
		.then(function () {
			// Also create a fully annotated minified copy
			return gulp.src(dist)
				.pipe(ngAnnotate())
				//.pipe(uglify())
				.pipe(rename('app.min.js'))
				.pipe(gulp.dest(paths.dist))
		})
		.then(function () {
			// Inject minified script into index
			return gulp.src('client/index.html')
				.pipe(htmlreplace({
					'js': 'app.min.js'
				}))
				.pipe(gulp.dest(paths.dist));
		});
});




gulp.task('default', ['serve'])
