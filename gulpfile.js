const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('default', () => {
    console.log('you created a gulp task');
});

gulp.task('html', () => {
    console.log('Imagine something useful being done to your html here.');
});

gulp.task('styles', () => {
    console.log('Imagine sass or postCss running here.');
});

gulp.task('watch', () => {
    watch('./app/index.html', () => {
        gulp.start('html');
    });
    watch('./app/styles/**/*.css', () => {
        gulp.start('styles');
    });
});