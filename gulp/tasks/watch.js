const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('watch', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
    gulp.watch('./app/index.html', function() {
        browserSync.reload();
    });
    gulp.watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });
    gulp.watch('./app/assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh');
    })
});

gulp.task('scriptsRefresh', ['scripts'],() => {
   browserSync.reload();
});

gulp.task('cssInject', ['styles'], () => {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});


