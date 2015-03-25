module.exports = {
  target: {
    files: [{
      expand: true,
      cwd: '<%= paths.dist %>',
      src: ['*.css', '!*.min.css', '!*.css.map'],
      dest: '<%= paths.dist %>',
      ext: '.min.css'
    }]
  }
};
