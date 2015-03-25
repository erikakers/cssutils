module.exports = {
  css: {
    files: '<%= paths.scss %>/**/*.scss',
    tasks: ['sass', 'cssmin']
  }
};
