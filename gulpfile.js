'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'), 
    rename = require('gulp-rename'),
    minify = require('gulp-minify');
 
	// Минимизация JS файлов
	gulp.task('compress', function() {
	  gulp.src(['assets/js/*.js', 'assets/js/*.mjs'])
	    .pipe(minify())
	    .pipe(gulp.dest('assets/js/min/'))
	});

	// Копирование файлов HTML в папку dist
	gulp.task('html', function() {
	    return gulp.src('*.html')
	});
	
	// Объединение, компиляция Sass в CSS, 
	//простановка венд. префиксов и дальнейшая минимизация кода
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
	
	// Выбираем файл для минификации
	// Сжимаем
	// Добавляем суффикс .min
	// Выгружаем в папку 
	gulp.task('css-libs', ['sass'], function() {
	    return gulp.src('assets/css/styles.css') 
	        .pipe(cssnano()) 
	        .pipe(rename({suffix: '.min'})) 
	        .pipe(gulp.dest('assets/css/min/')); 
	});
	
	
	// Задача слежения за измененными файлами
	gulp.task('watch', ['css-libs'], function(){
	    gulp.watch(['assets/scss/**/*.scss'], ['sass']);
	    gulp.watch('*.html', ['html']);
	});

	// Запуск тасков по умолчанию

gulp.task('default', ['watch','html', 'sass', 'css-libs', 'compress']);
