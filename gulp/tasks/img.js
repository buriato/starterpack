module.exports = function () {
  $.gulp.task('img:dev', () => {
    return $.gulp.src('./dev/static/img/**/*.*')
      .pipe($.gulp.dest('./build/static/img/'));
  });

  $.gulp.task('img:build', () => {
    return $.gulp.src('./dev/static/img/**/*.*')
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest('./build/static/img/'));
  });
};
