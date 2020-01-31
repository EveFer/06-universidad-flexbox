const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')

function css() {
    return gulp 
        .src('scss/app.scss')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 version'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle: 'expanded' //nested, compact, compresed
        }))
        .pipe(gulp.dest('css'));
}

// para que se guarde autimaticamente y se compile a css
function watchFiles() {
    gulp.watch('scss/*.scss', css);
    gulp.watch('index.html');
}

// Registrar funciones como tarea

gulp.task('css', css)
gulp.task('watch', gulp.parallel(watchFiles));
