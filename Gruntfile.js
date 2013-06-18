module.exports = function (grunt) {
    'use strict';
    var browsers = [
            {
                browserName: 'firefox',
                version: '19',
                platform: 'XP'
            },
            {
                browserName: 'chrome',
                platform: 'XP'
            },
            {
                browserName: 'chrome',
                platform: 'linux'
            },
            {
                browserName: 'internet explorer',
                platform: 'WIN8',
                version: '10'
            },
            {
                browserName: 'internet explorer',
                platform: 'VISTA',
                version: '9'
            },
            {
                browserName: 'internet explorer',
                platform: 'XP',
                version: '8'
            },
            {
                browserName: 'opera',
                platform: 'Windows 2008',
                version: '12'
            }
        ];
    grunt.initConfig({
        'saucelabs-qunit': {
            all: {
                options: {
                    urls: ['http://localhost:9999/test/index.html'],
                    tunnelTimeout: 5,
                    build: require('process').env.TRAVIS_JOB_ID,
                    concurrency: 3,
                    browsers: browsers,
                    testname: 'javascript unit tests'
                }
            }
        },
        connect: {
            server: {
                options: {
                    base: '.',
                    port: 9999
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-saucelabs');
    grunt.registerTask('sauce', [
        'connect',
        'saucelabs-qunit'
    ]);
    grunt.registerTask('default', ['sauce']);
};