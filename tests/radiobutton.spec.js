      const{test, expect} =require('@playwright/test');

      test('Radio Button', async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/');

        //locate the male radio button
        const maleRadioButton=await page.locator('#male');

        await maleRadioButton.check();
        //await expect(maleRadioButton).toBeChecked();
        await page.waitForTimeout(3000);
        await expect(maleRadioButton).isChecked().toBeTruthy();
  
        //locate the female radio button
       const femaleRadioButton=await page.locator('#female');
       await expect(femaleRadioButton).isChecked().toBeFalsy();
       await page.waitForTimeout(5000);





      })