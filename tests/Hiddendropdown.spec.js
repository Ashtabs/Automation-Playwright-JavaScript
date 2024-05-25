import {test, expect} from '@playwright/test';

test ('Hidden Element Handling', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("input[name$='username']").fill('Admin');
    await page.locator("input[placeholder='Password']").fill('admin123');
    await page.locator("button[type='submit']").click();
    await page.locator("//span[normalize-space()='PIM']").click();

    //click on dropdown
    await page.locator('div:nth-child(6) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) i:nth-child(1)').click();

    await page.waitForSelector("div[role='listbox'] div span");
     const options= await page.$$("div[role='listbox'] div span");
     for(const option of options){
       const JobTitle=await option.textContent();
       
       //console.log(JobTitle);
       if(JobTitle.includes('QA Lead')){
        option.click();
       }
     }
     await page.waitForTimeout(5000);
})



