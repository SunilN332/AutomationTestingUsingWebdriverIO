import Page from "./page.js";
import utils from "../Lib/utils.js";

class productSection extends Page {
    get products() {return $('//span[@data-test="title"]')}
    get addToCart() {return $('//button[@id="add-to-cart"]')}
    get SauceLabsBackpack() {return $('//a[@id="item_4_title_link"]')}
    get SauceLabsBikeLight() {return $('//a[@id="item_0_title_link"]')}
    get SauceLabsBoltTShirt() {return $('//a[@id="item_1_title_link"]')}
    get removecartBtn() {return $('//button[@id="remove"]')}
    get backToProductBtn() {return $('//button[@id="back-to-products"]')}

    async addProductsToCart() {
        await utils.waitUntilDisplayed(this.products)
        await utils.objClick(this.SauceLabsBackpack)
        await utils.objClick(this.addToCart)
        await utils.addScreenShotWithMessageInReport("Back pack added to cart")
        await utils.objClick(this.backToProductBtn)
        await utils.waitUntilDisplayed(this.products)
        await utils.objClick(this.SauceLabsBikeLight)
        await utils.objClick(this.addToCart)
        await utils.waitUntilClickable(this.removecartBtn)
        await utils.addScreenShotWithMessageInReport("Bike light added to cart")
        await utils.objClick(this.backToProductBtn)
        await utils.objClick(this.SauceLabsBoltTShirt)
        await utils.objClick(this.addToCart)
        await utils.addScreenShotWithMessageInReport("Bolt T shirt added to cart")
        await utils.objClick(this.backToProductBtn)
    }
}
export default new productSection();
