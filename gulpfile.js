const gulp = require('gulp'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  cssbeautify = require('gulp-cssbeautify'),
  uglify = require('gulp-uglify'),
  minify = require('gulp-minify'),
  cssmin = require('gulp-cssmin'),
  del = require('del'),
  config = require('./gulp.config.js');

gulp.task('clean:all', () => {
  del([
    './resources/dist/**/*'
  ])
});

gulp.task('js', () => {
  gulp.src(config.js.path.src)
    .pipe(minify({
        ext: {
            src: '.js',
            min: '.min.js'
        }
    }))
    .pipe(gulp.dest(config.js.path.dist));
});

gulp.task('css', () => {
  gulp.src(config.css.path.src)
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.css.path.dist));
});

gulp.task('scss', ['css'], () => {
  gulp.src(config.scss.path.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename(function (path) {
      path.extname = '.css';
    }))
    .pipe(cssbeautify())
    .pipe(gulp.dest(config.scss.path.dist));
});

gulp.task('default', ['js', 'scss', 'css'], () => {
  gulp.watch(config.scss.path.src, ['scss']);
  gulp.watch(config.css.path.src, ['css']);
  gulp.watch(config.js.path.src, ['js']);
});

gulp.task('build', ['clean:all', 'js', 'scss', 'css']);

/**
* swallowError - 에러 핸들링 (https://stackoverflow.com/questions/23971388/prevent-errors-from-breaking-crashing-gulp-watch)
*
* @param  {obejct} error
*/
function swallowError (error) {
  console.log(error.toString());
}
