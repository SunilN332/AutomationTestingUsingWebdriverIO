import config from '../Lib/config-qaint.js';
import loginPage from '../pageobjects/login.page.js';
import productSectionPage from '../pageobjects/productSection.page.js';
import { BASE_URLS } from '../utils/urls.js';

describe(`TC-005 - Validation of removed added from the cart`, () => {
    before(async () => {
        await loginPage.open(BASE_URLS.swagLabsUrl);
        await loginPage.login(config.userName, config.password);
    });

    it('Validation of removed added from the cart', async () => {
        await productSectionPage.removeCartListItems();
    });
    after(async () => {
        await loginPage.logout();
    });
});
