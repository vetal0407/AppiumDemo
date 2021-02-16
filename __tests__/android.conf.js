exports.config = {
  services: ['appium'],
  port: 10000,
  runner: 'local',
  specs: ['./__tests__/test_cases/**/*.js'],
  capabilities: [
    {
      maxInstances: 1,
      appiumVersion: '1.18.1',
      platformName: 'Android',
      app: '/Users/vagrant/git/android/app/build/outputs/apk/debug/app-debug.apk',
      automationName: 'UiAutomator2',
    },
  ],
  logLevel: 'trace',
  bail: 0,
  screenshotPath: './errorShots/',
  waitforTimeout: 50000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    require: ['@babel/register'],
  },
};
