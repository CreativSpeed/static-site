const gulp = require('gulp');
const webpack = require('webpack');

gulp.task('scripts', (callback) => {
    webpack(require('../../webpack.config.js'), (err, stats) => {
        if(err) { console.log(err.toStrong()) }
        console.log(stats.toString);
        callback();
    });
});