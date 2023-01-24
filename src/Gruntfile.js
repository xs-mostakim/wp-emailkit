module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            js: {
                src: ['out/_next/**/*.js'], //specify your folder paths
                dest: 'dest/merged.js', //destination file
            },
            css: {
                src: ['out/_next/**/*.css'],
                dest: 'dest/merged.css'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
};
