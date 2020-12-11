var gulp = require("gulp"),
	sass = require("gulp-sass");

var paths = {
	dist: "./dist/"
};

sass.compiler = require('sass');

gulp.task('sass', function () {
  return gulp.src(['packages/material-spirit/material-spirit.scss'])
    .pipe(sass({ includePaths: ['node_modules'] }))
    .pipe(gulp.dest(paths.dist))
});

gulp.task('sass:watch', function () {
  gulp.watch(['packages/**/*.scss'], gulp.series('sass'));
});