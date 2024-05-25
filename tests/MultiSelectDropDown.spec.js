   const{test, expect}=require('@playwright/test');
   test('MultiDropdown', async({page})=>{

 await page.goto('https://testautomationpractice.blogspot.com/');
 //Select multiple option from dropdown
 //await page.selectOption('#colors',['red', 'blue','green']);

 //Assertions
 //1)Check number of option in dropdown
   const option=await page.locator('#colors option');
   await expect(option).toHaveCount(5);

   //2)Check the number of option using JS
    //const option1=await page.$$('#colors option');
      // console.log("Number of Option :",option1.length);
       
      // await expect(option1).toBe(5);
       //await expect(option1).toHaveCount(5);
       //await page.waitForTimeout(4000);

// Check presence of value in the dropdown
   const content=await page.locator('#colors').textContent();
   await expect(content.includes('Black')).toBeFalsy();


   })