import{test, expect} from '@playwright/test'
test('Locator', async ({page})=>{

await page.goto('https://automationteststore.com/')
await expect(page).toHaveURL('https://automationteststore.com/')

await expect.soft(page).toHaveTitle('A place to practice your automation skills');
const registerlnk = await page.getByRole('link',{name:'Login or register'}).click()


})