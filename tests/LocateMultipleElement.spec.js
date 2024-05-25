 const {test, expect}=require('@playwright/test');

 test('Locating Multiple webElement', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    /*
    const linktest=await page.$$('a');
    for(const links of linktest){

        const linktext=await links.textContent();

        console.log('All the links of webpage',linktext);
    }*/

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
    const products=await page.$$("//div[@id='tbodyid']//div//h4/a");

    for(const product of products){
       const productName=await product.textContent();

       console.log(productName);
    }

 })