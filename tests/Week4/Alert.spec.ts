import test from "@playwright/test";
test("Test to handle prompt dialog",async({page})=>{
page.on('dialog', async(alert)=>{
const message = alert.message() //A message displayed in the dialog.
    console.log(message);

    const alertType = alert.type() //Returns dialog's type, can be one of alert, beforeunload, confirm or prompt.
    console.log(alertType);

    if(alertType==='prompt'){
    await alert.accept('Chitra')
    }
    else if(alertType==='prompt'){
        await alert.accept()
    }
    else{
        alert.accept()
    }
       
})

    await page.goto('https://leafground.com/alert.xhtml')
     //prompt alert

await page.locator("(//span[text()='Show'])[5]").click()
await page.waitForTimeout(3000)
})