"use strict";

var gulp             = require('gulp');
var autoprefixer     = require('gulp-autoprefixer');
var changed          = require('gulp-changed');
var imagemin         = require('gulp-imagemin');
var notify           = require('gulp-notify');
var plumber          = require('gulp-plumber');
var watch            = require('gulp-watch');
var browserSync      = require('browser-sync').create();
var htmlBeautify     = require('gulp-html-beautify');
var sourcemaps       = require('gulp-sourcemaps');



/*###########
START DEFAULT
#############*/
gulp.task('default', ['watch', 'server', 'imagemin', 'html', 'css', 'fonts', 'js']);


/*#########
START WATCH
###########*/
gulp.task('watch',  function(){
  gulp.watch('dist/*.html', ['html']);
  gulp.watch('dist/css/*.css', ['css']);
  gulp.watch('dist/js/*.js', ['js']);
  gulp.watch('dist/fonts/*.{ttf,woff,woff2,eot,svg}', ['fonts']);
  gulp.watch('dist/images/*.{png,jpg,gif,svg}', ['imagemin']);
});



/*###############
START BROWSERSYNC
#################*/
gulp.task('server', function() {
  browserSync.init({
      server: {
          baseDir: "./build/"
      }
  });
  browserSync.watch('build', browserSync.reload)
});




/*###############
 START  HTML COPY
#################*/
gulp.task('html', function(){
  var htmlSrc = 'dist/**/*.html';
  var copyHtml = 'build/';

          return gulp.src(htmlSrc)
          .pipe(plumber({
            errorHandler: function(err) {
              notify.onError({
                title: 'HTML compilation error',
                message: err.message
              })(err);
              this.emit('end');
            }
          }))
         
         .pipe(changed('dist/**/*.html'))
         .pipe(htmlBeautify())
         .pipe(gulp.dest(copyHtml))
});




/*###############
 START FONTS COPY
#################*/
gulp.task('fonts', function(){
  var fontsSrc = 'dist/fonts/**/*.{ttf,woff,woff2,eot,svg}';
  var fontsDest = 'build/fonts';

          return gulp.src(fontsSrc)
          .pipe(plumber({
            errorHandler: function(err) {
              notify.onError({
                title: 'FONTS compilation error',
                message: err.message
              })(err);
              this.emit('end');
            }
          }))
         
         .pipe(changed('dist/fonts/**/*.{ttf,woff,woff2,eot,svg}'))
         .pipe(gulp.dest(fontsDest))
});




/*#############
 START CSS COPY
###############*/
gulp.task('css', function(){
  var cssSrc = 'dist/css/**/*.css';
  var cssDest = 'build/css';

          return gulp.src(cssSrc)
          .pipe(plumber({
            errorHandler: function(err) {
              notify.onError({
                title: 'CSS compilation error',
                message: err.message
              })(err);
              this.emit('end');
            }
          }))
         .pipe(changed('dist/css/*.css'))
         .pipe(gulp.dest(cssDest))
});


/*#####################
 START JAVASCROPT COMPY
#######################*/
gulp.task('js', function(){
  var jsSrc = 'dist/js/*.js';
  var jsDest = 'build/js';

          return gulp.src(jsSrc)
          .pipe(plumber({
            errorHandler: function(err) {
              notify.onError({
                title: 'JAVASCRIPT compilation error',
                message: err.message
              })(err);
              this.emit('end');
            }
          }))
         
         .pipe(changed('dist/js/*.js'))
         .pipe(gulp.dest(jsDest))
});



/*#############
START IMAGEMIN
###############*/
gulp.task('imagemin', function () {
  var imgSrc = 'dist/images/*.{png,jpg,gif,svg}';
  var imgDest = 'build/images/';
  return gulp.src(imgSrc)
      .pipe(plumber({                               
        errorHandler: function(err) {
          notify.onError({
            title: 'IMAGES compilation error',
            message: err.message
          })(err);
          this.emit('end');
        }
      }))
      .pipe(imagemin({
          progressive: true,
          optimizationLevel: 7
      }))
      
      .pipe(changed('dist/images/*.{png,jpg,gif,svg}'))
      .pipe(gulp.dest(imgDest));
});