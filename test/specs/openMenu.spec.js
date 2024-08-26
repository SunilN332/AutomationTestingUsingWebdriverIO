import config from '../Lib/config-qaint.js';
import openMenuPage from '../pageobjects/openMenu.page.js';
import loginPage from '../pageobjects/login.page.js';
import { BASE_URLS } from '../utils/urls.js';

describe(`Validation of swag labs  open menu`, () => {
    before(async () => {
        await loginPage.open(BASE_URLS);
        await loginPage.login(config.userName, config.password);
    });
    it(`Validate Open menu`, async () => {
        await openMenuPage.validateOpenMenu();
    });

    after(async () => {
        await loginPage.logout();
    });
});
