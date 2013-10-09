module.exports = function(config) {
  config.set({
    basePath: '',
    autoWatch: true,
    frameworks: ['qunit'],
    files: [
      '*.js',
      'test/*.js'
    ],
    browsers: ['PhantomJS'],

    reporters: ['progress', 'coverage'],
    preprocessors: { '*.js': ['coverage'] },

    singleRun: true
  });
};
