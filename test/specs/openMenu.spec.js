import config from "../Lib/config-qaint.js"
import openMenuPage from '../pageobjects/openMenu.page.js'
import loginPage from "../pageobjects/login.page.js"
import utils from "../Lib/utils.js"


describe(`Validation of swag labs  open menu`, ()=>{
    before(async ()=>{
        await loginPage.open(config.url)
        await loginPage.login(config.userName, config.password)
    })
    it(`Validate Open menu`, async ()=>{
        await openMenuPage.validateOpenMenu()
    })

     after(async ()=>{
        await loginPage.logout()
     })

})
