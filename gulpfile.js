'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'), // Минимизация CSS
    autoprefixer = require('gulp-autoprefixer'), // Проставлет вендорные префиксы в CSS для поддержки старых браузеров
    rename = require('gulp-rename'); // Переименование файлов
    
/* --------------------------------------------------------
   ----------------- Таски ---------------------------
------------------------------------------------------------ */

	// Копирование файлов HTML в папку dist
	gulp.task('html', function() {
	    return gulp.src('*.html')
	});
	
	// Объединение, компиляция Sass в CSS, простановка венд. префиксов и дальнейшая минимизация кода
	gulp.task('sass', function(){
	    return gulp.src(['assets/scss/**/*.scss'])
	    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
	    .pipe(autoprefixer({
	        browsers: ['last 2 versions'],
	        cascade: false
	     }))
	    .pipe(concat('styles.css'))
	    .pipe(gulp.dest('assets/css'))
	});
	
	
	gulp.task('css-libs', ['sass'], function() {
	    return gulp.src('assets/css/styles.css') // Выбираем файл для минификации
	        .pipe(cssnano()) // Сжимаем
	        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
	        .pipe(gulp.dest('assets/css/min/')); // Выгружаем в папку 
	});
	
	
	// Задача слежения за измененными файлами
	gulp.task('watch', ['css-libs'], function(){
	    gulp.watch(['assets/scss/**/*.scss'], ['sass']);
	    gulp.watch('*.html', ['html']);
	});
	///// Таски ///////////////////////////////////////

// Запуск тасков по умолчанию

gulp.task('default', ['watch','html', 'sass', 'css-libs']);
