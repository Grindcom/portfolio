module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 480,
            suffix: '_med_1x',
            quality: 25
          },{
            width: 800,
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
  });

  grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default', ['clean','responsive_images']);

};
