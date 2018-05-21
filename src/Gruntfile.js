
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            scripts: {
                files: ["./index.html", "./scripts/**/*.js", "./styles/**/*.scss", "!node_modules/**/*.js"],
                tasks: ["eslint", "browserify", "uglify", "copy", "sass"],
                options: {
                    spawn: false,
                },
            }
        },
        browserify: {
            options: {
                browserifyOptions: {
                    debug: true,
                    paths: ["./scripts"],
                }
            },
            dist: {
                files: {
                    "../dist/bundle.js": ["./scripts/main.js"]
                }
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    '../dist/main.css': ['./styles/**.scss']
                }
            }
        },
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('yyyy-mm-dd') %> */"
            },
            build: {
                files: [{
                    expand: true,
                    cwd: "../dist",
                    src: "bundle.js",
                    dest: "../dist",
                    ext: ".min.js"
                }]
            }
        },
        eslint: {
            src: ["./scripts/**/*.js", "!node_modules/**/*.js"]
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: ".",
                        src: "index.html",
                        dest: "../dist/"
                    }]
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-uglify-es");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-eslint");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-sass");
    grunt.registerTask("default", ["eslint", "browserify", "uglify", "copy", "watch", "sass"]);
};