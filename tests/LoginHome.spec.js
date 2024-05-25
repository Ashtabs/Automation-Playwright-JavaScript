import {test, expect} from '@playwright/test';


test ('Login to homePage', async({page})=> {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
 
    await page.locator('button[type="submit"]').click();
})