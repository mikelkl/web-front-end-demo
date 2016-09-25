var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
// var path={
//     scripts:['js/index.js', 'js/main.js']
// }
gulp.task('default', function() {
    // 将你的默认的任务代码放在这
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('build'));
});