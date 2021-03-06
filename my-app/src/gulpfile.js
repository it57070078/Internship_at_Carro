import React from 'react';
import ReactDOM from 'react-dom';

'use strict';
 
var gulp = require('gulp');
var streamify = require('gulp-streamify')
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var reactify = require('reactify');                 
var source = require('vinyl-source-stream');
 
gulp.task('js', function() {
    browserify('./js/app.js')         // ให้ app.js เป็น entry point
        .transform(reactify)                
        .bundle()                           
        .pipe(source('bundle.js'))    // ตั้งชื่อไฟล์ output เป็น bundle.js     
        .pipe(streamify(uglify()))          
        .pipe(gulp.dest('./js/')); 
});
 
gulp.task('default', ['js'], function() {
    gulp.watch(['./js/**/*', '!./js/bundle.js'], ['js']);
});