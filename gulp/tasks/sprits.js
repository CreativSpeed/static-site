const gulp = require('gulp');
const svgsprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const del = require('del');

gulp.task('createSprite', ['beginClean'], () => {
    let config = {
        mode: {
            css: {
                sprite: 'sprite.svg',
                render: {
                    css:{
                        template: './gulp/templates/sprite.css'
                    }
                }
            }
        }
    };
    return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgsprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('beginClean', () => {
    return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('copySpriteGraphic', ['createSprite'], () => {
    return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites/'));
});

gulp.task('copySpriteCss',['createSprite'] ,() => {
    return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules/'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCss'], () => {
    return del('./app/temp/sprite');
});

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'createSprite', 'copySpriteCss', 'endClean']);