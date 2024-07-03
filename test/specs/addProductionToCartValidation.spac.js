import config from '../Lib/config-qaint.js'
import productSectionPage from "../pageobjects/productSection.page.js";
import loginPage from '../pageobjects/login.page.js';

describe('validation of add products to cart', ()=>{
     before(async ()=> {
        await  loginPage.open(config.url)
        await loginPage.login(config.userName, config.password)
     })

     it('add products to cart',async ()=>{
         await productSectionPage.addProductsToCart()
     })

     after(async ()=> {
        await loginPage.logout()
     })
})