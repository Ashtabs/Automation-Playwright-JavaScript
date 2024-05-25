const {test, expect}=require('@playwright/test');
test('Assertion', async({page})=>{

    //open page url
    await page.goto('https://demo.nopcommerce.com/register');

//    await expect(page).toHaveURL() -----Page has a URL
await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

//verify title is correct
await expect(page).toHaveTitle('nopCommerce demo store. Register');

//await expect(locator).toBeVisible()  ---- Element is visible
const logo=await page.getByAltText('nopCommerce demo store');
await expect(logo).toBeVisible();

//await expect(locator).toBeEnabled() --  Element is enabled
  const search=await page.locator('#small-searchterms');
  await expect(search).toBeEnabled();

  //await expect(locator).toBeChecked() --- Checkbox is checked

   const maleRadioButton=await page.locator('#gender-male');
   await maleRadioButton.click(); //select radio button
   await expect(maleRadioButton).toBeChecked();

   //check box
 const newsLettercheckBox=await page.locator('#Newsletter');
await expect(newsLettercheckBox).toBeChecked();

//await expect(locator).toHaveAttribute()   - Element has a DOM attribute
const regButton=await page.locator('#register-button');
await expect(regButton).toHaveAttribute('type','submit');

//await expect(locator).toHaveText() -- Element matches text
await expect(await page.locator('.buttons button')).toHaveText('Register');  //full text

//await expect(locator).toHaveText() -- Element matches text

await expect(await page.locator('.buttons button')).toContainText('Reg'); //partial Text
// await expect(locator).toHaveValue()    --   Input has a value

const email_Button=await page.locator('#Email');
await email_Button.fill('ashraf.ali@123');
await expect(email_Button).toHaveValue('ashraf.ali@123');

// await expect(locator).toHaveCount()  -- List has exact number of children

const dayOption=await page.locator("select[name='DateOfBirthDay'] option");
await expect(dayOption).toHaveCount(32);



})
