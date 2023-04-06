module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            js: {
                src: ['out/_next/**/*.js'], //specify your folder paths
                dest: '../assets/dist/admin/js/merged.js', //destination file
            },
            css: {
                src: ['out/_next/**/*.css'],
                dest: '../assets/dist/admin/styles/merged.css'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
};
