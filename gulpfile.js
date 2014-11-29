var gulp = require('gulp'),
    watch = require('gulp-watch'),
    gutil = require('gulp-util');
 

gulp.task('coffee', function () {
  gulp.src('./src/coffee/server/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./dist/server/'))
});

gulp.task('default', function () {
  var watcher = gulp.watch('./src/coffee/**/*.coffee', ['coffee']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

