// The require statement tells Node to look into the node_modules folder for a package
// Once the package is found, we assign its contents to the variable
// gulp.src tells the Gulp task what files to use for the task
// gulp.dest tells Gulp where to output the files once the task is completed.
var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    handlebars = require('gulp-compile-handlebars'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    runSequence = require('run-sequence'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer');


// ------------ Development Tasks -------------
// Compile Sass into CSS

// Using panini, template, page and partial files are combined to form html markup
gulp.task('compile-html', function () {
    return gulp.src('/**/*.html')
        .pipe(panini({
            root: '/',
        }))
        .pipe(gulp.dest('/'));
    console.log('Compiling partials with Panini');
});


// Compile Sass into CSS
gulp.task('sass', function () {
    return gulp.src(['/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            sourceComments: 'map',
            sourceMap: 'sass',
            outputStyle: 'nested'
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 4 versions'))
        //.pipe(cssnano()) // Use cssnano to minify CSS
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("/"))
        .pipe(browserSync.stream());
    console.log('Compiling scss');
});


// Watches for changes while gulp is running
gulp.task('watch', function () {
    // Live reload with BrowserSync
    browserSync.init({
        server: "./"
    });

    gulp.watch(['/*.html'], ['resetPages', 'compile-html', browserSync.reload]);
    console.log('Watching for changes');
});




// ------------ Build Sequence -------------
// Simply run 'gulp' in terminal to run local server and watch for changes
gulp.task('default', ['watch']);


// Creates production ready assets in dist folder
gulp.task('build', function () {
    console.log('Building production ready assets');
    runSequence( 'sass', ['compile-html'])
});