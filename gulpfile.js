const gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  concat = require("gulp-concat"),
  uglify = require('gulp-uglify-es').default,
  rename = require('gulp-rename'),
  maps = require('gulp-sourcemaps'),
  del = require('del');

gulp.task("concatScripts", function() {
  return gulp.src([
    'js/picturefill.min.js',
    'js/script.js'
  ])
  .pipe(maps.init())
  .pipe(concat("app.js"))
  .pipe(maps.write("./"))
  .pipe(gulp.dest("js"));
});

gulp.task("minifyScripts", ["concatScripts"], function() {
  return gulp.src("js/app.js")
  .pipe(uglify())
  .pipe(rename("app.min.js"))
  .pipe(gulp.dest("js"));
});

gulp.task("compileSass", function() {
  return gulp
    .src("scss/**/*.scss")
    .pipe(maps.init())
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(maps.write("./"))
    .pipe(gulp.dest("./css"));
});

gulp.task("watchFiles", function() {
  gulp.watch("scss/**/*.scss", ["compileSass"]),
  gulp.watch("js/script.js", ["concatScripts"]);
})

gulp.task("clean", function() {
  del(["dist", "css/app.css*", "js/app*.js*"]);
});

gulp.task("build", ['minifyScripts', 'compileSass'], function() {
  return gulp.src(["css/app.css", "js/app.min.js", "index.html", "img/**"], { base: "./"})
  .pipe(gulp.dest("dist"));
});

gulp.task("serve", ["watchFiles"]);

gulp.task("default", ["clean"], function() {
  gulp.start("build");
});