module.exports = function karmaConf(config) {
  config.set({
    basePath: '..',
    frameworks: ['jasmine'],
    browsers: [
      'PhantomJS2',
      'Chrome',
      // 'ChromeCanary',
      'Safari',
      'Firefox',
      // 'IE',
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-phantomjs2-launcher',
      'karma-safari-launcher',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'https://raw.githubusercontent.com/peerlibrary/Blob.js/peerlibrary/Blob.js', // To fix blob issue with PhantomJS
      'dist/ParaViewWeb.js',
      'config/test-browser-*.js',
      'src/**/tests/*.js',
      { pattern: 'data/**', watched: false, included: false, served: true },
      { pattern: 'node_modules/tonic-arctic-sample-data/data/**', watched: false, included: false, served: true },
    ],
    exclude: [
      'src/tests/**/*-node-only.js',
    ],
    proxies: {
      '/data/': ['http://localhost:', 9876, '/base/node_modules/tonic-arctic-sample-data/data/'].join(''),
    },
    // phantomjsLauncher: {
    //   // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
    //   exitOnResourceError: true,
    // },
  });
};
