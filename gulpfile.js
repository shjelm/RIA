var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat')
    jest = require('gulp-jest')/*,
    stylish = require('jshint-stylish'),
    jshint = require('gulp-jshint')*/;

gulp.task('test',function(){
    return gulp.src('__tests__').pipe(jest({
      testDirectoryName: "spec",
      scriptPreprocessor: './support/preprocessor.js',
      unmockedModulePathPatterns: ['node_modules/react'],
      testPathIgnorePatterns: [
        "node_modules",
        "./support"
      ]
    }));
});

gulp.task('browserify', function() {
    gulp.src('src/main.js')
      .pipe(browserify({transform:"reactify"}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist'));
});

gulp.task('copyindex', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('lint', function(){
    gulp.src(['src/*/*.js','src/*.js'])
      .pipe(react())
      .pipe(jshint())
      .pipe(jshint.reporter(stylish))
      .pipe(jshint.reporter('fail'))
});

gulp.task('build',['browserify','copyindex']);

gulp.task('default',['test', 'build']);