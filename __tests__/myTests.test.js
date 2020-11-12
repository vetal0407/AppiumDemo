import wd from 'wd';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
    platformName: 'Android',
    deviceName: 'emulator-5554',
    appiumVersion: '1.18.1',
    automationName: 'UiAutomator2',
    app: '/Users/vagrant/git/android/app/build/outputs/apk/debug/app-debug.apk'
};
const driver = wd.promiseChainRemote('localhost', PORT);
beforeAll(async () => {
    await driver.init(config);
    await driver.sleep(3000);
}) // Sometime for the app to load
test('appium renders', async () => {
    expect(await driver.hasElementByAccessibilityId('alertButton')).toBe(true);
    const element = await driver.elementByAccessibilityId('alertButton')
    await element.click()
    expect(await driver.hasElementByAccessibilityId('notHere')).toBe(false);
});
