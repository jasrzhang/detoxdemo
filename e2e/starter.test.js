describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await waitFor(element(by.id('welcome')))
      .toExist()
      .withTimeout(5000);
  });
  it('should have click button', async () => {
    await element(by.id('ClickBtn')).tap();
    await expect(by.text('Hello World')).toExist();
  });
});
