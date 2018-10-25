let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('styles', function() {
        gulp.src("scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest('./css'));
  });
  