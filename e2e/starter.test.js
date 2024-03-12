describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await waitFor(element(by.id('welcome')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await waitFor(element(by.id('welcome')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.id('welcome')).scrollTo('bottom');
    await waitFor(element(by.text('Help')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.text('Help'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await waitFor(element(by.id('welcome')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.id('welcome')).scrollTo('top');
    await waitFor(element(by.text('Step One')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.text('Step One'))).toBeVisible();
  });
});
