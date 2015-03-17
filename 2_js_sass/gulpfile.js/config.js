
/**
 * Configuration file
 */

// source files
var dir_src     = "./src";
var dir_bower   = "./bower_components";
var dir_public  = "./public";
var dir_dist    = dir_public + "/dist";

module.exports = {

  dir_src: dir_src,
  dir_bower: dir_bower,
  dir_public: dir_public,
  dir_dist: dir_dist,
  
  // browser-sync
  browserSync: {
    server: {
      baseDir: dir_public
    }
  },

  // uglify (js)
  uglify: {
    src: [
      dir_bower + "/jquery/dist/jquery.min.js",
      dir_src + "/js/**/*.js"
    ],
    dest: dir_dist,
    dest_file: "app.min.js",
    settings: {
      outSourceMap: true
    }
  },

  // sass
  sass: {
    src: dir_src + "/scss/**/*.scss",
    dest: dir_dist,
    dest_file: "app.min.css",
    settings: {
      outputStyle: 'compressed',
      imagePath: 'images' // Used by the image-url helper
    }
  },

  // imagemin
  images: {
    src: dir_src + "/images/**",
    dest: dir_public + "/dist/images"
  }

};