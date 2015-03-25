module.exports = {
    dev: {
        files: [{
            expand: true,
            cwd: 'scss/',
            src: ['*.scss'],
            dest: 'dist/',
            ext: '.css'
        }]
    }
};