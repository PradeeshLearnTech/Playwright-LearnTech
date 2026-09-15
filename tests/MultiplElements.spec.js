import{test,expect}from '@playwright/test'
test('MultipleLocator', async({page})=>{


    await page.goto('https://www.demoblaze.com')
    await page.waitForSelector("a[class='hrefch']")
    const  products= await page.$$("a[class='hrefch']")
    for(const product of products)
        {
              const productname= await product.textContent();
              console.log(productname)
        } 

})