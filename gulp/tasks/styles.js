const gulp = require('gulp');
const path = require('path');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const nestedcss = require('postcss-nested');
const cssvars = require('postcss-simple-vars');
const cssImport = require('postcss-import');
const mixins = require('postcss-mixins');
const cssMath = require('postcss-math');

function resolve(dir) {
    return path.join(__dirname, '..', '..', dir);
}

gulp.task('styles', () => {
    let config = (file) => ({
        plugins: [cssImport, cssMath, mixins, cssvars, nestedcss, autoprefixer]
    });
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss(config))
    .on('error', function(err) {
        console.log(err.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});