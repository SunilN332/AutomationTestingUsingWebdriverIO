import config from '../Lib/config-qaint.js';
import loginPage from '../pageobjects/login.page.js';
import validateLoginPage from '../pageobjects/validateLogin.page.js';

describe('validate swag labs Log in page  DOM elements', () => {
    it('Validation of Swag labs page', async () => {
        await loginPage.open(config.url);
        await validateLoginPage.validateLoginPage();
    });
});
