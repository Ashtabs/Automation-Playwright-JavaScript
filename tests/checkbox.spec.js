 const{test,expect}= require('@playwright/test');

 test('Check Boxes', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

  const mondayCheckBox=page.locator('#monday');
  await mondayCheckBox.check();
  await expect(mondayCheckBox).toBeChecked();
  await expect(mondayCheckBox.isChecked()).toBeTruthy();

  //Multiple Checkboxes 

  const checkboxlocators=['#monday', '#friday', '#saturday'];
  for(const locator of checkboxlocators){
   await page.locator(locator).check();  //select multiple checkboxes
  }

  //unslecting the checkboxes if checkboxes is selected
  for(const locator of checkboxlocators){
    if(await page.locator(locator).isChecked()){

        await page.locator(locator).uncheck();  //unselect multiple checkboxes
    }
   }
  
await page.waitForTimeout(3000);



 })
