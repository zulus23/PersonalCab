/**
 * Created by Zhukov on 24.08.2015.
 */

var gulp    =  require('gulp');
var config  =  require('./gulp.config')();
var fs      =  require('fs');
var del     =  require('del');
var sass    =  require('gulp-sass');
var $ = require('gulp-load-plugins')({lazy: true});


gulp.task('compileSass',['cleanCss'],function(){
    return gulp.src(config.scssfile)
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest(config.cssDist));
});

gulp.task('sassWatch',function(){
    gulp.watch(config.scssfile,['compileSass'])
});

gulp.task('cleanCss',function(done){
    var delconfig = [].concat(config.cssDist);
    clean(delconfig,done);
})


/* Function */

function clean(path,done){
   del(path,done);
}



