import config from '../Lib/config-qaint.js';
import loginPage from '../pageobjects/login.page.js';
import productSectionPage from '../pageobjects/productSection.page.js';

describe(`Validation of removed added from the cart`, () => {
    before(async () => {
        await loginPage.open(config.url);
        await loginPage.login(config.userName, config.password);
    });

    it('Validation of removed added from the cart', async () => {
        await productSectionPage.removeCartListItems();
    });
    after(async () => {
        await loginPage.logout();
    });
});
