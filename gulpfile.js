var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');


var glamlib = [
    './src/glam.js',
    './src/animation.js',
    './src/arc.js',
    './src/background.js',
    './src/camera.js',
    './src/circle.js',
    './src/classList.js',
    './src/cone.js',
    './src/controller.js',
    './src/cube.js',
    './src/cylinder.js',
    './src/document.js',
    './src/effect.js',
    './src/group.js',
    './src/import.js',
    './src/input.js',
    './src/light.js',
    './src/line.js',
    './src/material.js',
    './src/mesh.js',
    './src/node.js',
    './src/parser.js',
    './src/particles.js',
    './src/rect.js',
    './src/renderer.js',
    './src/sphere.js',
    './src/style.js',
    './src/text.js',
    './src/transform.js',
    './src/transition.js',
    './src/types.js',
    './src/viewer.js',
    './src/visual.js'
]

// include jQuery doc ready to auto-instantiate
var autoglam = glamlib.concat('./src/docready.js');


gulp.task('clean', function () {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});

gulp.task('dist-lib', function() {
    gulp.src(glamlib)
        .pipe(sourcemaps.init())
        .pipe(concat('glamlib.js'))
        .pipe(uglify({
            compress: {
                negate_iife: false
            }
        }))
        .pipe(rename('glamlib.min.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('dist', function() {
    gulp.src(autoglam)
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

gulp.task('default', ['dist', 'dist-lib'], function() {});