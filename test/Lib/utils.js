import Page from '../pageobjects/page.js';
import allureReporter from '@wdio/allure-reporter';
import crypto from 'crypto';

class Utils extends Page {
    async objClick(element) {
        if (await element.waitForClickable()) {
            await element.click();
        } else {
            console.log(element + ' is not clickable');
        }
    }

    async waitUntilDisplayed(element, timeoutValue) {
        if (timeoutValue == undefined || timeoutValue == null) {
            await element.waitForDisplayed({
                timeout: 30000,
                timeoutMsg: (await element.selector) + ' not displayed',
            });
            return true;
        } else {
            await element.waitForDisplayed({
                timeout: timeoutValue,
                timeoutMsg: (await element.selector) + ' not displayed',
            });
            return true;
        }
    }
    async doSelectByVisibleText(element, visibleText) {
        if (await element.waitForClickable()) {
            await element.selectByVisibleText(visibleText);
        } else {
            console.log((await element.selector) + ' is not clickable');
        }
    }
    async generateRandomAlphabets(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPURSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLenght = characters.length;
        for (let i = 0; i <= length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLenght));
        }
        return result;
    }

    async generateRandomNumber(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += crypto.randomInt(0, 9); // generates ramdom nub between 0 to 9
        }
        return result;
    }

    async doSetValue(element, value) {
        if (await element.isDisplayed()) {
            await element.setValue(value);
        } else {
            console.log((await element.selector) + ' is not displayed');
        }
    }

    async waitUntilClickable(element, timeoutValue) {
        if (timeoutValue == undefined || timeoutValue == null) {
            await element.waitForClickable({
                timeout: 30000,
                timeoutMsg: (await element.selector) + ' not clickable',
            });
            return true;
        } else {
            await element.waitForClickable({
                timeout: timeoutValue,
                timeoutMsg: (await element.selector) + ' not clickable',
            });
            return true;
        }
    }

    async addStepWithScreenShotInReport(message) {
        const screenshot = await browser.takeScreenshot();
        allureReporter.addStep(message, screenshot);
        console.log(message);
    }
    async addScreenShotWithMessageInReport(message) {
        const outputFile =
            '..\\AutomationTestingUsingWebdriverIO\\allure-results\\screenshotFile.png';
        await allureReporter.addAttachment(message, await browser.saveScreenshot(outputFile));
        console.log(message);
    }
}

export default new Utils();
