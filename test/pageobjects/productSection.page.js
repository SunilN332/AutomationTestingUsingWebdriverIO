import Page from './page.js';
import utils from '../Lib/utils.js';
import DataGenerator from '../utils/DataGenerator.js';

class ProductSection extends Page {
    get products() {
        return $('//span[@data-test="title"]');
    }
    get addToCart() {
        return $('//button[@id="add-to-cart"]');
    }
    get SauceLabsBackpack() {
        return $('//a[@id="item_4_title_link"]');
    }
    get SauceLabsBikeLight() {
        return $('//a[@id="item_0_title_link"]');
    }
    get SauceLabsBoltTShirt() {
        return $('//a[@id="item_1_title_link"]');
    }
    get removecartBtn() {
        return $('//button[@id="remove"]');
    }
    get backToProductBtn() {
        return $('//button[@id="back-to-products"]');
    }
    get shopptingCartBtn() {
        return $('//a[@data-test="shopping-cart-link"]');
    }
    get removeCartBth() {
        return $('//button[@name="remove"]');
    }
    get continueShopping() {
        return $('//button[@data-test="continue-shopping"]');
    }
    get checkoutBtn() {
        return $('//button[@class="btn btn_action btn_medium checkout_button "]');
    }
    get firstName() {
        return $('//input[@placeholder="First Name"]');
    }
    get lastName() {
        return $('//input[@placeholder="Last Name"]');
    }
    get zipCode() {
        return $('//input[@data-test="postalCode"]');
    }
    get continueBtn() {
        return $('//input[@data-test="continue"]');
    }
    get paymentInfo() {
        return $('//div[@data-test="payment-info-label"]');
    }
    get finistBtn() {
        return $('//button[@name="finish"]');
    }
    get backtoHomeBtn() {
        return $('//button[@data-test="back-to-products"]');
    }

    async addProductsToCart() {
        await utils.waitUntilDisplayed(this.products);
        await utils.objClick(this.SauceLabsBackpack);
        await utils.objClick(this.addToCart);
        await utils.addScreenShotWithMessageInReport('Back pack added to cart');
        await utils.objClick(this.backToProductBtn);
        await utils.waitUntilDisplayed(this.products);
        await utils.objClick(this.SauceLabsBikeLight);
        await utils.objClick(this.addToCart);
        await utils.waitUntilClickable(this.removecartBtn);
        await utils.addScreenShotWithMessageInReport('Bike light added to cart');
        await utils.objClick(this.backToProductBtn);
        await utils.objClick(this.SauceLabsBoltTShirt);
        await utils.objClick(this.addToCart);
        await utils.addScreenShotWithMessageInReport('Bolt T shirt added to cart');
        await utils.objClick(this.backToProductBtn);
    }
    async removeCartListItems() {
        await this.addProductsToCart();
        await browser.execute('arguments[0].click();', await this.shopptingCartBtn);
        await utils.objClick(this.SauceLabsBackpack);
        await utils.objClick(this.removeCartBth);
        await browser.pause(1000);
        await browser.execute('arguments[0].click();', await this.shopptingCartBtn);
        await utils.objClick(this.SauceLabsBikeLight);
        await utils.objClick(this.removeCartBth);
        await browser.pause(1000);
        await browser.execute('arguments[0].click();', await this.shopptingCartBtn);
        await utils.objClick(this.SauceLabsBoltTShirt);
        await browser.pause(1000);
        await utils.objClick(this.removeCartBth);
        // await browser.execute("arguments[0].click();", this.continueShopping)
    }
    async initiateShipmentCartItems() {
        await this.addProductsToCart();
        await browser.execute('arguments[0].click();', await this.shopptingCartBtn);
        await utils.waitUntilClickable(this.continueShopping);
        await utils.objClick(this.checkoutBtn);
        const firstname = await DataGenerator.generateFirstName(8);
        const lastname = await DataGenerator.generateLastName(8);
        const zipcode = await DataGenerator.generateAddress().zipCode;
        await utils.doSetValue(await this.firstName, firstname);
        await utils.doSetValue(await this.lastName, lastname);
        await utils.doSetValue(await this.zipCode, zipcode);
        await utils.objClick(this.continueBtn);
        await utils.waitUntilDisplayed(this.paymentInfo);
        await utils.waitUntilClickable(await this.finistBtn);
        await utils.objClick(this.finistBtn);
        await expect(await $('h2.complete-header')).toHaveText('Thank you for your order!');
        await utils.objClick(this.backtoHomeBtn);
    }
}
export default new ProductSection();
