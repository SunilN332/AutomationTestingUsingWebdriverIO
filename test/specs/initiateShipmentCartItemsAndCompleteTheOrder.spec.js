import config from '../Lib/config-qaint.js';
import loginPage from '../pageobjects/login.page.js';
import productSectionPage from '../pageobjects/productSection.page.js';

describe(`validation of iniate shipment cart items and complete the order`, ()=>{
    before(async ()=>{
        await loginPage.open(config.url)
        await loginPage.login(config.userName, config.password)
    })
    it(`iniate shipment cart items and complete the order`, async ()=>{
        await productSectionPage.initiateShipmentCartItems()
    })
    after(async ()=>{
        await loginPage.logout()
    })
})