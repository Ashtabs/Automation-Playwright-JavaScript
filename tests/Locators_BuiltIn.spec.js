const {test, expect}=require('@playwright/test');

/*
These are the recommended built in locators.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

test('Built-In Locators', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 const companyLogo=await page.getByAltText('company-branding');
 await expect(companyLogo).toBeVisible();
 console.log("Company logo is present");

 //Enter the username
 await page.getByPlaceholder('Username').fill('Admin');
 await page.getByPlaceholder('Password').fill('admin123');
 await page.getByRole('button',{type: 'submit'}).click();
 const username=await page.getByText('faith faith123');

 await expect(username).toBeVisible();





})