const { Builder, By } = require('selenium-webdriver');

jest.setTimeout(30000);

describe('TestMart - debugging challenge', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    if (driver) await driver.quit();
  });

  test.skip('diagnose and repair this test', async () => {
    await driver.get('http://localhost:3000');

    // Intentionally wrong. Run it, read the failure, diagnose it,
    // and make the smallest sensible correction.
    const productName = await driver
      .findElement(By.css('#product-title'))
      .getText();

    expect(productName).toBe('USB C Charger');
  });
});
