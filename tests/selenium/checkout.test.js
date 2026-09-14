const { Builder, By, until } = require('selenium-webdriver');

jest.setTimeout(30000);

describe('TestMart Checkout - Selenium starter', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  test('page title and product are visible', async () => {
    await driver.get('http://localhost:3000');

    const title = await driver.getTitle();
    expect(title).toBe('TestMart Checkout');

    const product = await driver.findElement(By.css('#product-name')).getText();
    expect(product).toContain('USB-C Travel Charger');
  });

  test.skip('learner task - apply the valid promo code', async () => {
    await driver.get('http://localhost:3000');

    // Day 2:
    // 1. Locate the promo input.
    // 2. Enter the valid code from requirements.md.
    // 3. Click the apply button.
    // 4. Wait for a visible state/message change.
    // 5. Assert the expected message and/or total.
    //
    // Keep this test skipped until your instructor asks you to implement it.
  });
});
