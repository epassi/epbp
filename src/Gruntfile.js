// README
// http://ericnish.io/blog/compile-less-files-with-grunt
// http://www.sitepoint.com/writing-awesome-build-script-grunt/
// http://www.smashingmagazine.com/2013/10/29/get-up-running-grunt/

module.exports = function(grunt) {
	require('jit-grunt')(grunt);

	grunt.initConfig({
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					"resources/css/main.css": "resources/css/main.less" // destination file and source file
				}
			}
		},
		copy: {
			build: {
				cwd: ".",			// Source folder
				src: [	"./*.html", 
						"./resources/css/*.css", 
						"./resources/img/*.jpg", 
						"./resources/img/*.png", 
						"./resources/img/*.gif", 
						"./resources/data/**", 
						"./resources/js/**",
						"./vendor/jquery/dist/jquery.min.js" 
						],		// The files to copy
				dest: "../dist",		// Destination folder
				expand: true		// Enables these options. Required when using cwd.
			},
		},
		clean: {
			build: {
				src: [ '../dist' ],
				options: {
					force: true
				}
			},
		},
		watch: {
			styles: {
				files: ['resources/css/**/*.less'], // which files to watch
				tasks: ['less', 'clean', 'copy'],
				options: {
					nospawn: true
				}
			},
			html: {
				files: ['**/*.html'], // which files to watch
				tasks: ['clean', 'copy'],
				options: {
					nospawn: true
				}
			},
			js: {
				files: ["resources/js/**/*.js"],
				tasks: ["clean", "copy"],
				options: {
					nospawn: true
				}
			},
			img: {
				files: ["resources/img/**/*.{png,jpg,gif}"],
				tasks: ["clean", "copy"],
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

	grunt.registerTask('default', ['less', 'clean', 'copy', 'watch']);
};
