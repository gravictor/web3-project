const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const glob = require('glob');


const paths = {
  styles: {
    src: glob.sync('**/src/app/*.scss'),
    dest: 'dist/css',
  },
};

// Компиляция SCSS в CSS
function styles() {
  return gulp
    .src(paths.styles.src) // Берем SCSS-файлы из всех указанных путей
    .pipe(sourcemaps.init()) // Создание sourcemaps
    .pipe(sass().on('error', sass.logError)) // Компиляция SCSS
    .pipe(autoprefixer({ cascade: false })) // Добавление префиксов
    .pipe(cleanCSS()) // Минификация CSS
    .pipe(sourcemaps.write('.')) // Запись sourcemaps
    .pipe(gulp.dest(paths.styles.dest)); // Сохранение результата
}

// Watcher для всех путей
function watchFiles() {
  gulp.watch(paths.styles.src, styles); // Следим за всеми SCSS-файлами
}

// Экспорт задач
exports.styles = styles;
exports.watch = gulp.series(styles, watchFiles);
