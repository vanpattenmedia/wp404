module.exports = function(grunt) {

	grunt.initConfig({
		makepot: {
			target: {
				options: {
					domainPath: 'languages/',
					mainFile: 'wp404.php',
					type: 'wp-plugin',
					updateTimestamp: false,
					updatePoFiles: true
				}
			}
	}
	});

	grunt.loadNpmTasks('grunt-wp-i18n');

	grunt.registerTask('default', ['makepot']);
};