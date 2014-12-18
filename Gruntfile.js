// README
// http://ericnish.io/blog/compile-less-files-with-grunt

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
		watch: {
			styles: {
				files: ['resources/css/**/*.less'], // which files to watch
				tasks: ['less'],
				options: {
					nospawn: true
				}
			}
		}
	});

	grunt.registerTask('default', ['less', 'watch']);
};
