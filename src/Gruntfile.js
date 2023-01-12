module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                src: ['out/_next/**/*.js'], //specify your folder paths
                dest: 'dest/merged.js', //destination file
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
};
