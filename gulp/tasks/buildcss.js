/**
 * Created by Gukov on 26.08.2015.
 */
var gulp    =  require('gulp');
var config  =  require('./gulp.config')();
var fs      =  require('fs');
var del     =  require('del');
var sass    =  require('gulp-sass');




gulp.task('compileSass',['cleanCss'],function(){
    return gulp.src(config.scssfile)
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest(config.cssDist));
});

gulp.task('sassWatch',function(){
    gulp.watch(config.scssfile,['compileSass'])
});