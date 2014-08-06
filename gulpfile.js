var gulp = require('gulp'),
  clean = require('gulp-clean'),
  map = require('vinyl-map'),
  header = require('gulp-header'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  connect = require('gulp-connect'),
  pkg = require('./package.json'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  path = require('path'),
  template = require('lodash').template;

gulp.task('default', ['clean', 'compile']);
gulp.task('dev', ['compile', 'watch']);

gulp.task('watch', function() {
  gulp.watch('lib/**/*.js', ['compile']);
});

gulp.task('clean', function() {
  return gulp.src(['dist'], { read: false })
    .pipe(clean());
});

gulp.task('compile', ['clean'], function() {
  return browserify('./lib/bespoke-camera.js')
    .bundle({ standalone: 'bespoke.plugins.camera' })
    .pipe(source('bespoke-camera.js'))
    .pipe(buffer())
    .pipe(header(template([
      '/*!',
      ' * <%= name %> v<%= version %>',
      ' * <%= homepage %>',
      ' *',
      ' * Copyright <%= new Date().getFullYear() %>, <%= author.name %>',
      ' * This content is released under the <%= licenses[0].type %> license',
      ' */\n\n'
    ].join('\n'), pkg)))
    .pipe(gulp.dest('dist'))
    .pipe(rename('bespoke-camera.min.js'))
    .pipe(uglify())
    .pipe(header(template([
      '/*! <%= name %> v<%= version %> ',
      '© <%= new Date().getFullYear() %> <%= author.name %>, ',
      'Licensed <%= licenses[0].type %> */\n'
    ].join(''), pkg)))
    .pipe(gulp.dest('dist'));
});

gulp.task('connect', ['compile'], function() {
  connect.server({
    root: './',
    port: 8000
  });
});
