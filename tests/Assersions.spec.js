const {test,expect} = require('@playwright/test')
test('AsserstionsType',async({page})=>{
await page.goto('https://automationteststore.com/')
await expect(page).toHaveURL('https://automationteststore.com/')

const pageTitle = await page.title()
await expect(page).toHaveTitle(pageTitle)

const registerlnk = await page.getByRole('link',{name:'Login or register'}).click()
const newreg = await page.getByRole('button',{name:'Continue'}).click()

const newsletterchk= await page.locator('#AccountFrm_newsletter0')
await newsletterchk.click()
await expect(newsletterchk).toBeChecked()

const privecychk = await page.locator('#AccountFrm_agree')
await privecychk.click()
await expect(privecychk).toBeChecked()


})