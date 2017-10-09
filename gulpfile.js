/**
 * Created by Administrator on 2017/10/9 0009.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
gulp.task('default', ['cssFile', 'jsFile']);
gulp.task('cssFile', function () {
    gulp.src('./css/*.css')
        .pipe(concat('./all.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCss())
        .pipe(gulp.dest('./css'))
});
gulp.task('jsFile', function () {
    gulp.src('./js/*.js')
        .pipe(concat('./all.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./js'))
});