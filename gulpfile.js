const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nestedcss = require('postcss-nested');

gulp.task('default', () => {
    console.log('you created a gulp task');
});

gulp.task('html', () => {
    console.log('Imagine something useful being done to your html here.');
});

gulp.task('styles', () => {
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssvars, nestedcss, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', () => {
    watch('./app/index.html', () => {
        gulp.start('html');
    });
    watch('app/assets/styles/styles.css', () => {
        gulp.start('styles');
    });
});