const { test, expect } = require('@playwright/test');

test('LocatingMultipleElements', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    const links = await page.$$('a');
    
    for (const link of links) {
        const linkContent = await link.textContent();
        console.log(linkContent);
    }
});
