import{test,expect} from '@playwright/test'
test('loactors', async ({page})=>{
    await page.goto('https://www.demoblaze.com/')
    await page.locator("a[id='login2']").click()
    await page.locator("input[id='loginusername']").fill('pradeesh')
    await page.locator("input[id='loginpassword']").fill('Batman')
    await page.getByRole('button', {name: 'Log in'}).click()
    await expect(page.getByText('Welcome pradeesh')).toBeVisible()

    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click()
    await page.getByText('Add to cart').click()

    await page.getByText('Log out').click()

    await page.close()

})