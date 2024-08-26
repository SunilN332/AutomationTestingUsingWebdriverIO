import { $ } from '@wdio/globals';
import Page from './page.js';
import config from '../Lib/config-qaint.js';
import utils from '../Lib/utils.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#user-name');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('//input[@name="login-button"]');
    }
    get openMenuBtn() {
        return $('//button[text() = "Open Menu"]');
    }
    get logOutBtn() {
        return $('//a[@id="logout_sidebar_link"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async open(url) {
        await super.open(url);
        await browser.maximizeWindow();
        await browser.waitUntil(
            async () => await browser.execute(() => document.readyState === 'complete'),
            {
                timeout: 60 * 1000, // 60 seconds
                timeoutMsg: 'Message on failure',
            }
        );
        console.log(await browser.getWindowSize());
        await expect(await browser).toHaveTitle('Swag Labs');
    }

    async logout() {
        await browser.refresh();
        await this.openMenuBtn.click();
        await this.logOutBtn.click();
    }
}

export default new LoginPage();
