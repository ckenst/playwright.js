import { test, expect } from '@playwright/test';

test.describe('Dashboard Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate and login before each dashboard test
    await page.goto('https://sandbox.applitools.com/bank?theme=true&validateForm=true');
    await page.fill('#username', 'testuser');
    await page.fill('#password', 'testpassword');
    await page.click('#log-in');
    await expect(page).toHaveURL(/.*\/bank\/dashboard.*/);
  });

  test('dynamic layout visual baseline', async ({ page }) => {
    // Assert visual layout without capturing dynamic changing text
    // Playwright allows masking elements, but for an entire page with random numbers
    // it's tricky without specific locators. Since Applitools isn't explicitly configured here
    // with its SDK, we'll try natively capturing a screenshot masking the overview numbers.
    // The requirement mentions 'layoutAlgo' param which might handle this, but let's 
    // also use Playwright's mask feature to be safe if possible, or just take a screenshot.
    // We'll mask the dynamic numbers: balance, credit, due.
    
    const balanceAmount = page.locator('.balance-value'); // Guessing locator, will adjust if fails
    const creditAmount = page.locator('.credit-value');
    const dueAmount = page.locator('.due-value');
    
    // We will just take a screenshot. If it fails due to dynamic text, we'll refine the locators to mask.
    await expect(page).toHaveScreenshot('dashboard-layout.png', {
      mask: [
         page.locator('.balances-wrapper .balance-value'), // Example guessed locators
         page.locator('text=/\\$([\\d,]+\\.\\d{2})/') // fallback regex to mask any money amount
      ]
    });
  });

  test('transactions table has correct headers', async ({ page }) => {
    const tableHeaders = page.locator('table th');
    
    // We expect 5 specific headers: Status, Date, Description, Category, Amount
    await expect(tableHeaders.nth(0)).toHaveText(/Status/i);
    await expect(tableHeaders.nth(1)).toHaveText(/Date/i);
    await expect(tableHeaders.nth(2)).toHaveText(/Description/i);
    await expect(tableHeaders.nth(3)).toHaveText(/Category/i);
    await expect(tableHeaders.nth(4)).toHaveText(/Amount/i);
  });
});
