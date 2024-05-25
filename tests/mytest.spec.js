import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto('http://www.automationpractice.pl/index.php');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.locator('#email').fill('ashraf.123@gmail.com');
  await page.getByLabel('Password').fill('Ashraf@123');
  await page.getByRole('button', { name: ' Sign in' }).click();

  await page.getByTitle('Log me out').click();
});