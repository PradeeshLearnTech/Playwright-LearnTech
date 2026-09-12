import{test, expect} from '@playwright/test'
test('Locator', async ({page})=>{

    await page.goto('https://www.demoblaze.com');
    await page.click('id=login2')

    const username = await page.fill('input[id=loginusername]','pradeesh')
    const password = await page.fill('input[id=loginpassword]', 'Batman')

    await page.click("//button[text()='Log in']")
   

    const welcomelnk = await page.locator("//a[text()='Welcome pradeesh']")
    await expect(welcomelnk).toBeVisible();

     await page.close

}
)