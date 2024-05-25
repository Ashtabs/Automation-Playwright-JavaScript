const {test, expect}=require('@playwright/test');


test('Input Box', async({page})=>{


await page.goto('https://testautomationpractice.blogspot.com/');

const nameField=await page.locator('#name');
await expect(nameField).toBeVisible();
await expect(nameField).toBeEditable();
await expect(nameField).toBeEnabled();
await expect(nameField).toBeEmpty();

await nameField.fill('Ashraf Ali');

//pausing the code 
await page.waitForTimeout(5000);





})