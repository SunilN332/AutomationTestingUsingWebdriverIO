import loginPage from '../pageobjects/login.page.js';
import validateLoginPage from '../pageobjects/validateLogin.page.js';
import { BASE_URLS } from '../utils/urls.js';

describe('TC-001 - validate swag labs Log in page  DOM elements', () => {
    it('Validation of Swag labs page', async () => {
        await loginPage.open(BASE_URLS.swagLabsUrl);
        await validateLoginPage.validateLoginPage();
    });
});
