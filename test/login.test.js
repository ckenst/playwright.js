const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');

  const successText = await page.innerText('#flash');
  console.log(successText);
  assert(successText === 'You logged into a secure area!');

  // await page.screenshot({ path: `example.png` });
  await browser.close();
})();