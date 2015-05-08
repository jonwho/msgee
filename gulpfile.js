var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('nodemon');

gulp.task('lint', function() {
  return gulp.src('/client/scripts/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('nodemon', ['lint'], function() {
  var called = false;
  return nodemon({
    script: 'server.js',
    ext: 'html js',
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('default', ['nodemon']);