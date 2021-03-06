module.exports = function(grunt) {
    "use strict";

    var project = {
        paths: {
            dist: 'dist/',
            temp: '.temp/',
            scss: 'scss/'
        }
    };

    require('load-grunt-config')(grunt, {
        data: project,
        jitGrunt: {
            staticMappings: {
            }
        }
    });

    require('time-grunt')(grunt);
};
