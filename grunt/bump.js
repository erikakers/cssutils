module.exports = {
  options: {
    files: ['package.json', 'bower.json'],
    commit: false,
    commitMessage: 'Release v%VERSION%',
    commitFiles: ['package.json', 'bower.json'],
    createTag: false,
    tagName: 'v%VERSION%',
    tagMessage: 'Version %VERSION',
    push: false,
    pushTo: 'master',
    gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
    globalReplace: false,
    prereleaseName: false,
    regExp: false
  }
};
