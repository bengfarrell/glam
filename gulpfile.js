
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('clean', function () {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});

gulp.task('dist', function() {
    gulp.src(['./src/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('glam.js'))
        .pipe(uglify({
            compress: {
                negate_iife: false
            }
        }))
        .pipe(rename('glam.min.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['dist'], function() {});