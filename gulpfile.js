var gulp = require('gulp');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var sourcemaps = require('gulp-sourcemaps');
var tsProject = tsc.createProject('tsconfig.json');
var config = require('./gulp.config')();
var nodemon = require('gulp-nodemon');


gulp.task("ts-lint", function(){
return gulp.src("src/**/*.ts")
  .pipe(tslint({
    formatter: "prose"
  }))
  .pipe(tslint.report({
    emitError: false,
    allowWarnings: true
  }))
});



gulp.task('compile-ts', function(){
  var sourceTsFiles = [
    config.allTs,
    config.typings
  ];

  var tsResult = gulp
    .src(sourceTsFiles)
    .pipe(sourcemaps.init())
    .pipe(tsc(tsProject));

  return tsResult.js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.tsOutputPath));

});


gulp.task('default', function () {
  gulp.watch('src/**/*.js',['serve'])
});

gulp.task('server',gulp.parallel('compile-ts','ts-lint',function () {
  var Files = 'src/**/*.js';
  var options = {
    delayTime: 1,
    watch: Files
  }
  return nodemon(options)
    .on('restart',function(ev){
      console.log('restarting server...');
    })
}));
