const gulp = require("gulp");
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./index.html").on("change", reload);
    gulp.watch("./app.js").on("change", reload);
});











// gulp.task('serve', function() {
//   browserSync.init({
//     server: "./"
//   });
//   gulp.watch("./twitter-project/app.js");
//   gulp.watch("./twitter-project/style.css");
//   gulp.watch("./twitter-project/index.html").on('change', browserSync.reload);
// });

