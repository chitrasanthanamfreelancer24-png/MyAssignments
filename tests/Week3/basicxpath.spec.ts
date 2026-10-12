import test from "@playwright/test";

test('learn basic xpath',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.locator('//input[contains(@id,"name")]').fill('democsr') //Partial attribute based Xpath - //input[contains(@id,'user')]
    await page.locator('//input[contains(@id,"pass")]').fill('crmsfa') //Partial attribute based Xpath  - //input[contains(@id,'pass')]
    await page.locator('//input[@type="submit"]').click()  
    await page.locator('//a[contains(text(),`CRM/SFA`)]').click()
    await page.waitForTimeout(2000)
})