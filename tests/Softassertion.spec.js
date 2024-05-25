const {test, expect}=require('@playwright/test');

test('Soft Assertion',async({page})=>{
    await page.goto('https://www.demoblaze.com/');

    //Hard Assert:

    /*

    //verify title of the page
    await expect(page).toHaveTitle('STORE123');
    //verify the URL
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    //Verify logo is visible
     await expect(page.locator('.navbar-brand')).toBeVisible();
*/

//verify title of the page
await expect.soft(page).toHaveTitle('STORE123');
//verify the URL
await expect.soft(page).toHaveURL('https://www.demoblaze.com/');
//Verify logo is visible
 await expect.soft(page.locator('.navbar-brand')).toBeVisible();



})

