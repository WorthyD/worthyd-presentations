const { series, parallel, src, dest,  task } = require('gulp');
var browserSync = require('browser-sync').create();
const gulp = require('gulp');

var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var header = require('gulp-header');
var rename = require('gulp-rename');
var fileinclude = require('gulp-file-include');
var sass = require('gulp-sass');

var banner = '/* This is a generated file on ' + new Date() + '  */\n';

gulp.task('fileinclude', function () {
    gulp.src(['src/templates/**/*.html', '!src/templates/base.html', '!src/templates/footer.html', '!src/templates/header.html', '!src/templates/resources'])
        .pipe(fileinclude({
            prefix: '<!-- @@',
            suffix: '-->'
        }))
        .pipe(gulp.dest('./docs')).pipe(browserSync.reload({
            stream: true
        }));
});
var sassPath = 'src/sass/**/*.scss';
gulp.task('sass', function () {
    return gulp.src(sassPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(header(banner))
        .pipe(sourcemaps.write())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('docs/styles'))
        .pipe(browserSync.reload({
            stream: true
        }));

});

gulp.task('copy', function(){
    gulp.src(['node_modules/reveal.js/js/reveal.js']).pipe(gulp.dest('docs/vendor/reveal'));
    gulp.src(['node_modules/reveal.js/plugin/**']).pipe(gulp.dest('docs/vendor/reveal/plugin'));
    gulp.src(['node_modules/reveal.js/css/**/*.css']).pipe(gulp.dest('docs/vendor/reveal/css'));
    gulp.src(['node_modules/reveal.js/lib/js/**/*.js']).pipe(gulp.dest('docs/vendor/reveal/lib/js'));

    gulp.src(['node_modules/reveal-code-focus/reveal-code-focus.js']).pipe(gulp.dest('docs/vendor/reveal/plugin/codefocus'));
    gulp.src(['src/images/**']).pipe(gulp.dest('docs/images'));

    gulp.src([
            'node_modules/font-awesome/**'
            , '!node_modules/font-awesome/**/*.map'
            , '!node_modules/font-awesome/**/*.less'
            , '!node_modules/font-awesome/**/*.scss'
            , '!node_modules/font-awesome/.npmignore'
            , '!node_modules/font-awesome/*.txt'
            , '!node_modules/font-awesome/*.md'
            , '!node_modules/font-awesome/*.json'
        ]).pipe(gulp.dest('docs/vendor/font-awesome'))
});

// //We are adding sass as a gulp dependancy. It will run 'sass' before it starts the browser sync.
// //This makes sure that we have the latest CSS.
// gulp.task('browserSync', ['sass'], function () {
//     browserSync.init({
//         server: {
//             baseDir: 'docs'
//         }
//     })
// });

// //Starts up a dev server for us
// //It also watches files and reloads the browser when they change.
gulp.task('start', series(parallel(browserSyncStart, 'copy', 'sass', 'fileinclude'), function () {
    gulp.watch('src/templates/**/*.html', ['fileinclude']);
    gulp.watch('src/scripts/**/*.js', browserSync.reload);
    gulp.watch(sassPath, ['sass']);
}));

// gulp.task('default', ['copy', 'fileinclude', 'sass']);

function browserSyncStart(cb) {
  browserSync.init({
    server: {
      baseDir: 'docs'
    }
  });
  cb();
}
function copy(cb) {
  src(['node_modules/reveal.js/js/reveal.js']).pipe(dest('docs/vendor/reveal'));
  src(['node_modules/reveal.js/plugin/**']).pipe(
    dest('docs/vendor/reveal/plugin')
  );
  src(['node_modules/reveal.js/css/**/*.css']).pipe(
    dest('docs/vendor/reveal/css')
  );
  src(['node_modules/reveal.js/lib/js/**/*.js']).pipe(
    dest('docs/vendor/reveal/lib/js')
  );

  src(['node_modules/reveal-code-focus/reveal-code-focus.js']).pipe(
    dest('docs/vendor/reveal/plugin/codefocus')
  );
  src(['src/images/**']).pipe(dest('docs/images'));

  src([
    'node_modules/font-awesome/**',
    '!node_modules/font-awesome/**/*.map',
    '!node_modules/font-awesome/**/*.less',
    '!node_modules/font-awesome/**/*.scss',
    '!node_modules/font-awesome/.npmignore',
    '!node_modules/font-awesome/*.txt',
    '!node_modules/font-awesome/*.md',
    '!node_modules/font-awesome/*.json'
  ]).pipe(dest('docs/vendor/font-awesome'));
  cb();
}


// exports.sass = sass;
//exports.start = series(browserSyncStart, parallel('copy', 'sass', 'fileinclude'));
