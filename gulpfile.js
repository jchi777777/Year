// get gulp、src、dest、watch、series from gulp
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

// build style
function buildStyles() {
    return (
        src('scss/**/*.scss')
            .pipe(sass())
            .pipe(autoprefixer())
            // .pipe(purgecss({content: ['*.html']}))
            .pipe(dest('css'))
    );
}

// watch task
function watchTask() {
    // watch(['scss/**/*.scss', '*.html'], buildStyles);
    watch(['scss/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
