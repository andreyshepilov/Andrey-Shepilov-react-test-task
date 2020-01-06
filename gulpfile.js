var gulp = require('gulp'),
    react = require('gulp-react'),
    runSequence = require('run-sequence'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    jest = require('gulp-jest').default;

var compileSass = function(src, dest) {
    return gulp.src(src)
        .pipe(sass({errLogToConsole: false,onError: function(err) {return notify().write(err);}}))
        .pipe(gulp.dest(dest));
};

var compileJsx = function(src, dest) {
    return gulp.src(src)
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error %>")
        }))
        .pipe(react())
        .pipe(gulp.dest(dest));
};

gulp.task('sass', function() {
    return compileSass('css/base.scss', 'css');
});

gulp.task('jsx', function() {
    return compileJsx('js/views/**/*.jsx', 'js/_jsx/views');
});

gulp.task('jest', function () {
    return gulp.src('js/**/*.test.js').pipe(jest({
        "preprocessorIgnorePatterns": [
            "<rootDir>/dist/", "<rootDir>/node_modules/"
        ],
        "automock": false,
    }));
});

gulp.task('runServer', function() {
    nodemon({
        script: 'server.js',
        ext: 'scss jsx js',
        ignore: ['js/_jsx/**/*.js'],
        tasks: ['sass', 'jsx', 'jest'] })
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('default', function(callback) {
    runSequence(['jsx', 'sass', 'jest'], 'runServer', callback);
});
