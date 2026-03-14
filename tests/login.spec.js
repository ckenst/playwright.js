import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
  test('visual baseline', async ({ page }) => {
    await page.goto('https://sandbox.applitools.com/bank?theme=true&validateForm=true');
    await expect(page).toHaveScreenshot('login-page.png');
  });

  test('supplying only username results in an error message', async ({ page }) => {
    await page.goto('https://sandbox.applitools.com/bank?theme=true&validateForm=true');
    await page.fill('#username', 'testuser');
    await page.click('#log-in');
    
    // Assert error message is visible
    const errorMessage = page.getByText('Please enter a password');
    await expect(errorMessage).toBeVisible();
  });

  test('supplying only password results in an error message', async ({ page }) => {
    await page.goto('https://sandbox.applitools.com/bank?theme=true&validateForm=true');
    await page.fill('#password', 'testpassword');
    await page.click('#log-in');
    
    // Assert error message is visible
    const errorMessage = page.getByText('Please enter a username');
    await expect(errorMessage).toBeVisible();
  });

  test('successful login navigates to dashboard', async ({ page }) => {
    await page.goto('https://sandbox.applitools.com/bank?theme=true&validateForm=true');
    await page.fill('#username', 'testuser');
    await page.fill('#password', 'testpassword');
    await page.click('#log-in');
    
    // Assert navigation to dashboard
    await expect(page).toHaveURL(/.*\/bank\/dashboard.*/);
  });
});
