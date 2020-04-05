import gulp from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';

gulp.task('transpile', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    //.pipe(concat('check.min.js'))
    //.pipe(concat('dbridge.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['transpile']);
