module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-jslint');

    grunt.initConfig({
        jslint: {
            npm: {
                src: ['lib/**/*.js'],
                exclude: ['node_modules/'],
                directives: {
                    node: true,
                    es5: true,
                    nomen: true,
                    unparam: true,
                    predef: ['Parse']
                }
            }
        }
    });

    grunt.registerTask('default', ['jslint:npm']);
};