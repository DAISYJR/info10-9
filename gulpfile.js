/**
 * Created by Administrator on 2017/10/9 0009.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
gulp.task('default',['cssFile','jsFile']);
gulp.task('cssFile',function(){
    gulp.src('./css/*')
        .pipe(concat('./css/*'))
        .pipe(rename('./all.css'))
        .pipe(minifyCss('./.min.css'))
        .pipe(gulp.dest('./css'))
});
gulp.task('jsFile',function(){
    gulp.src('./js/*')
        .pipe(rename('./all.js'))
        .pipe(uglify('./.min.js'))
        .pipe(gulp.dest('./js'))
});