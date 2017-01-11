module.exports = function(grunt) {
	require("jit-grunt")(grunt);

	grunt.initConfig({
		sass: {
			dev: {
				files: [{
					expand: true,
					cwd: "resources/css",
					src: ["*.scss"],
					dest: "resources/css",
					ext: ".min.css"
				}],
				options: {
					style: "compressed"
				}
			}
		},
		postcss: {
			options: {
				// syntax: require('postcss-scss'), // work with SCSS directly
				processors: [
					// require('pixrem')(), // add fallbacks for rem units 
					require("autoprefixer")({browsers: ["last 2 versions"]}) // add vendor prefixes 
					// require('cssnano')() // minify the result 
					]
			},
			dev: {
				src: "resources/css/main.min.css"
			}
		},
		jshint: {
			dev: ["resources/js/**/*.js", 
				  "!resources/js/**/*.es6.js",
				  "!resources/js/*.min.js"]
		},
		babel: {
			dev: {
				options: {
					sourceMap: true,
					presets: ["latest"]
				},
				files: [{
					expand: true,
					src: ["resources/js/**/*.es6"],
					ext: ".es6.js"
				}]
			}
		},
		uglify: {
			dev: {
				files: {
					"resources/js/all.min.js": [
						"vendor/jquery/dist/jquery.min.js",
						"resources/js/**/*.js", 
						"!resources/js/all.min.js"]
				}
			}
		},
		copy: {
			dev: {
				cwd: ".",			// Source folder
				src: [	"./*.html", 
						"./resources/css/**/*.css", 
						"./resources/img/**/*.{png,jpg,gif,svg}",
						"./resources/data/**", 
						"./resources/fonts/*.{eot,svg,ttf,woff}",
						"./resources/audio/**/*.{mp3,wav}",
						"./resources/js/**/*.min.js"
						],		// The files to copy
				dest: "./builds/dev",		// Destination folder
				expand: true		// Enables these options. Required when using cwd.
			},
		},
		clean: {
			dev: {
				src: [ "./builds/dev" ],
				options: {
					force: true
				}
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [	"./builds/dev/**/*.html",
							"./builds/dev/resources/css/**",
							"./builds/dev/resources/js/**/*.js",
							"./builds/dev/resources/img/**/*.{png,jpg,gif,svg}",
							"./builds/dev/resources/data/**"
							]
				},
				options: {
					server: {
						baseDir: "./builds/dev/"
					},
					watchTask: true
				}
			}
		},
		watch: {
			sass: {
				files: ["resources/css/**/*.scss"], // which files to watch
				tasks: ["sass:dev", "postcss:dev", "clean:dev", "copy:dev"],
				options: {
					nospawn: true
				}
			},
			html: {
				files: ["**/*.html"], // which files to watch
				tasks: ["clean:dev", "copy:dev"],
				options: {
					nospawn: true
				}
			},
			es6: {
				files: ["resources/js/**/*.es6"],
				tasks: ["babel:dev", "uglify:dev", "clean:dev", "copy:dev"],
				options: {
					nospawn: true
				}
			},
			js: {
				files: ["resources/js/**/*.js", "Gruntfile.js"],
				tasks: ["jshint:dev", "uglify:dev", "clean:dev", "copy:dev"],
				options: {
					nospawn: true
				}
			},
			img: {
				files: ["resources/img/**/*.{png,jpg,gif,svg}"],
				tasks: ["clean:dev", "copy:dev"],
				options: {
					nospawn: true
				}
			},
			data: {
				files: ["resources/data/**"],
				tasks: ["clean", "copy"],
				options: {
					nospawn: true
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-postcss");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-babel");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-browser-sync");

	grunt.registerTask("default", [
		"sass:dev",
		"postcss:dev",
		"jshint:dev",
		"babel:dev",
		"uglify:dev",
		"clean:dev",
		"copy:dev",
		"browserSync",
		"watch"
	]);

	grunt.registerTask("dev", [
		"sass:dev",
		"postcss:dev",
		"jshint:dev",
		"babel:dev",
		"uglify:dev",
		"clean:dev",
		"copy:dev",
		"browserSync",
		"watch"
	]);
};
