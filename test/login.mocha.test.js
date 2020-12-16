const { firefox } = require('playwright');
const assert = require('assert');
let browser;
before(async() => {
  browser = await firefox.launch({headless: false, slowMo: 50});
});
after(async () => {
  await browser.close();
});
let page;
beforeEach(async() => {
  page = await browser.newPage();
});
afterEach(async () => {
  await page.close();
});

it('open page', async () => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  // const successText = await page.innerText('#flash');
  // assert.strictEqual(await successText, 'You logged into a secure area!');
});