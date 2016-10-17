module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 255,
            height: 150,
            suffix: '_thumb_1x',
            quality: 15
          },{
            width: 400,
            height: 150,
            suffix: '_sm_1x',
            quality: 25
          },{
            width: 480,
            suffix: '_med_1x',
            quality: 25
          },{
            width: 800,
            height: 350,
            suffix: '_large_1x',
            quality: 35
          },{
            width: 1600,
            suffix: '_large_2x',
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },
    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: ['*.svg'],
          // Set source reletive to the following directory
          cwd: 'images_src/',
          dest: 'images/',
          filter: 'isFile'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['clean', 'copy','responsive_images']);

};
