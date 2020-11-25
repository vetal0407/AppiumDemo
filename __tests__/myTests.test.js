import wd from 'wd';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
const PORT = 4723;
const config = {
    automationName: "UiAutomator2",
    platformName: 'Android',
    deviceName: 'emulator',
    appiumVersion: '1.18.1',
    app: '/Users/vagrant/git/android/app/build/outputs/apk/debug/app-debug.apk'
};
const driver = wd.promiseChainRemote('localhost', PORT);
beforeAll(async () => {
    await driver.init(config);
    await driver.sleep(10000);
}) // Sometime for the app to load
test('appium renders', async () => {
    expect(await driver.hasElementByAccessibilityId('alertButton')).toBe(true);
    const element = await driver.elementByAccessibilityId('alertButton')
    await element.click()
    expect(await driver.hasElementByAccessibilityId('notHere')).toBe(false);
});
