const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const assert = require('assert');
const { Builder, By } = require('selenium-webdriver');

let driver;

async function getDriver() {
  if (!driver) {
    driver = await new Builder().forBrowser('chrome').build();
  }
  return driver;
}

Given('I have opened TestMart Checkout', async function () {
  const browser = await getDriver();
  await browser.get('http://localhost:3000');
});

Then('I should see the USB-C Travel Charger', async function () {
  const browser = await getDriver();
  const text = await browser.findElement(By.css('#product-name')).getText();
  assert.ok(text.includes('USB-C Travel Charger'));
});

When('I apply the valid promotional code', async function () {
  // Day 3 learner task:
  // Use the requirements and your selector inventory.
  // Locate the promo input, enter the valid code, and click Apply.
  throw new Error('Learner TODO: implement this step definition');
});

Then('the promotional code should be accepted', async function () {
  // Day 3 learner task:
  // Assert the visible outcome that should confirm the code was accepted.
  throw new Error('Learner TODO: implement this step definition');
});

AfterAll(async function () {
  if (driver) {
    await driver.quit();
  }
});
