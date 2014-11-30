var gulp = require('gulp'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename'),
    transform = require('vinyl-transform'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    gutil = require('gulp-util');
 

// gulp.task('default', function () {
//   var watcher = gulp.watch('./src/coffee/**/*.coffee', ['coffee']);
//   watcher.on('change', function(event) {
//     console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//   });
// });

gulp.task('browserify', function () {
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });
  
  return gulp.src(['./src/client/*.js'])
    .pipe(browserified)
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});