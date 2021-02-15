/*import wd from 'wd';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
const PORT = 4723;
const config = {
    //automationName: "UiAutomator2",
    username: "vetal04075",
    accessKey: "0053aaad15cf42849a26663483054553",
    platformName: 'Android',
    appiumVersion: '1.18.1',
    deviceName: "Samsung Galaxy Tab S3 GoogleAPI Emulator",
    platformVersion: "8.1",
    //app: '/Users/vetal04075/job/react-native/AppiumDemo/android/app/build/outputs/apk/debug/app-debug.apk'
    app: 'storage:filename=demoAppiumRelease.apk'
};


const driver = wd.promiseChainRemote('https://vetal04075:0053aaad15cf42849a26663483054553@ondemand.eu-central-1.saucelabs.com:443/wd/hub', PORT);*/
//const driver = wd.promiseChainRemote('localhost', PORT);
/*beforeAll(async () => {
    await driver.init(config);
    await driver.sleep(10000);
}) // Sometime for the app to load*/
/*test('appium renders', async () => {
    expect(await driver.hasElementByAccessibilityId('alertButton')).toBe(true);
    const element = await driver.elementByAccessibilityId('alertButton')
    await element.click()
    expect(await driver.hasElementByAccessibilityId('notHere')).toBe(false);

    await driver.quit();
});*/

describe('Setup screen', () => {
    it('Move to login screen', () => {
        $("~alertButton").click();
    });
});
