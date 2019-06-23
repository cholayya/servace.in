var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');  
var browserSync = require('browser-sync').create();

 var autoprefix = require('gulp-autoprefixer');
 var minify = require('gulp-minify'); 

 var DIST = 'static/assets/dist/';
 var DIST_CSS_VENDOR = DIST + 'plugins/';
 var DIST_CSS = DIST + 'css/';
 var DIST_JS_VENDOR = DIST + 'plugins/js/';
 var DIST_JS_CUSTOM = DIST + 'js/'

 var DIST_IMG = DIST + 'images/';

gulp.task('default', ['css_vendor','css','images','js_vendor','js-custom'], function(){
  console.log('done!')

})

gulp.task('browserSync', function() {
   browserSync.init({
      server: {
         baseDir: 'static/dist/'
      },
   })
});

   

gulp.task('css_vendor', function(){
  return gulp.src(['static/assets/plugins/bootstrap/css/bootstrap.min.css','static/assets/plugins/font-awesome/css/font-awesome.css','static/assets/plugins/flexslider/flexslider.css','static/assets/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css'])
    
   .pipe(minifyCSS())
   .pipe(concat('inops-vendor.css'))
   .pipe(gulp.dest(DIST_CSS_VENDOR));
});

gulp.task('css', function(){
  return gulp.src(['static/assets/css/styles.css','static/assets/css/toastr.min.css','static/assets/css/fonts-googleapis.css','static/assets/css/fonts-googleapis-1.css'])
    
   .pipe(minifyCSS())
   .pipe(concat('inops-styles.css'))
   .pipe(gulp.dest(DIST_CSS));
});
gulp.task('images', function(){
  return gulp.src('static/assets/images/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest(DIST_IMG));
}); 

gulp.task('js_vendor', function(){
  return gulp.src(['static/assets/plugins/jquery-1.12.3.min.js','static/assets/plugins/bootstrap/js/bootstrap.min.js','static/assets/plugins/bootstrap-hover-dropdown.min.js','static/assets/plugins/back-to-top.js','static/assets/plugins/jquery-placeholder/jquery.placeholder.js','static/assets/plugins/FitVids/jquery.fitvids.js','static/assets/plugins/flexslider/jquery.flexslider-min.js','static/assets/plugins/imagesloaded/imagesloaded.pkgd.min.js','static/assets/plugins/masonry.pkgd.min.js','static/assets/plugins/moment.min.js','static/assets/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js','static/assets/plugins/jquery.validate.min.js'])
      .pipe(uglify())
      .pipe(concat('inops-vendor.js'))
      .pipe(gulp.dest(DIST_JS_VENDOR))  
});
gulp.task('js-custom', function(){
  return gulp.src(['static/assets/js/blog.js','static/assets/js/main.js','static/assets/js/contact.js','static/assets/js/froogaloop2.min.js','static/assets/js/vimeo.js','static/assets/js/toastr.js'])
    
    .pipe(uglify())
    .pipe(concat('inops-custom.js')) 
    .pipe(gulp.dest(DIST_JS_CUSTOM))
});

