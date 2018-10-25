const gulp = require('gulp'),
    sass = require('gulp-sass')
    autoprefixer = require('gulp-autoprefixer');
    
gulp.task('styles', function() {
        gulp.src("scss/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('watchSass', function() {
	gulp.watch('scss/**/*.scss', ['styles']);
});
  
