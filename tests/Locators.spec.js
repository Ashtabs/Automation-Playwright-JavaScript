const { test, expect } = require('@playwright/test');

test('Locator', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await page.click('#login2');
    await page.fill('#loginusername', 'ashrafsvn');
    await page.fill('#loginpassword', 'Ashraf@123');
    await page.click('text=Log in');
    const welcomePage = await page.locator('text="Welcome ashrafsvn"');
    await expect(welcomePage).toBeVisible();
    await page.close();
});
