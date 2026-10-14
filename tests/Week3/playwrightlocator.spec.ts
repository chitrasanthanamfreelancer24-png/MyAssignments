import test from "@playwright/test";

test('Learn playwright locators',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.getByLabel('Username').fill('democsr')
    await page.getByLabel('Password').fill('crmsfa')
    await page.getByRole('button',{name:'Login'}).click()
    await page.getByText('CRM/SFA').click();
    await page.waitForTimeout(2000)
}
)