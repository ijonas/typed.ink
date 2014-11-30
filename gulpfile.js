var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserify = require('browserify'),
    source = require("vinyl-source-stream"),
    reactify = require('reactify');

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./src/client/app.js');
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/'));
});