/**
 * Created by Gukov on 25.08.2015.
 */
var gulp    =  require('gulp');
var config  =  require('./gulp.config')();
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('wiredep',function(){
    var options = config.getWiredepDefaultOption();
    var wiredep =  require('wiredep').stream;
    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.client));
})

gulp.task('inject',['wiredep'],function(){

    return gulp
        .src(config.index)
        .pipe($.inject(gulp.src(config.cssFiles)))
        .pipe(gulp.dest(config.client));
})

