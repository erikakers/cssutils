module.exports = {
	dev: {
		options: {
		},
		files: [{
			expand: true,
			cwd: '<%= config.src %>/scss/',
			src: ['*.scss'],
			dest: '<%= config.app %>/styles/',
			ext: '.css'
		}]
	}
};
