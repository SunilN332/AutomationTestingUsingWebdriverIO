import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import config from '../Lib/config-qaint.js';
import { BASE_URLS } from '../utils/urls.js';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open(BASE_URLS);
        await LoginPage.login(config.userName, config.password);
    });
});
