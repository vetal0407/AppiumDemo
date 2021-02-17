exports.config = {
  //services: ['appium'],
  port: 10000,
  runner: 'local',
  specs: ['./__tests__/test_cases/**/*.js'],
  capabilities: [
    {
      maxInstances: 1,
      appiumVersion: '1.18.1',
      platformName: 'Android',
      deviceName: 'emulator-5554',
      app: '/Users/vagrant/git/android/app/build/outputs/apk/debug/app-debug.apk',
      automationName: 'UiAutomator2',
    },
  ],
  logLevel: 'debug',
  deprecationWarnings: true,
  bail: 0,
  baseUrl: 'http://localhost',
  screenshotPath: './errorShots/',
  waitforTimeout: 50000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'jasmine',
  reporters: ['spec'],
  jasmineNodeOpts: {
    //
    // Jasmine default timeout
    defaultTimeoutInterval: 30000,
    require: ['@babel/register'],
    //
    // The Jasmine framework allows interception of each assertion in order to log the state of the application
    // or website depending on the result. For example, it is pretty handy to take a screenshot every time
    // an assertion fails.
    // expectationResultHandler(passed, assertion) {
    //   // do something
    // },
  },
  /*mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    require: ['@babel/register'],
  },*/
};
