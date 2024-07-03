import Page from "../pageobjects/page.js"
import allureReporter from "@wdio/allure-reporter"


class utils extends Page {

    async objClick(element) {
		if (await element.waitForClickable()) {
			await element.click()
		} else {
			await console(element + ' is not clickable')
		}
	}

    async waitUntilDisplayed(element, timeoutValue) {
		if (timeoutValue == undefined || timeoutValue == null) {
			await element.waitForDisplayed({ timeout: 30000, timeoutMsg: (await element.selector) + ' not displayed' })
			return true;
		}
		else {
			await element.waitForDisplayed({ timeout: timeoutValue, timeoutMsg: (await element.selector) + ' not displayed' })
			return true;
		} 
	}
    async doSelectByVisibleText(element, visibleText) {
		if (await element.waitForClickable()) {
			await element.selectByVisibleText(visibleText);
		} else {
			await console((await element.selector) + ' is not clickable')
		}

	}
    async doSetValue(element, value) {
		if (await element.isDisplayed()) {
			await element.setValue(value)
		} else {
			console.log((await element.selector) + ' is not displayed')
		}
	}

    async addStepWithScreenShotInReport(message) {
        await allureReporter.addStep(message, await browser.takeScreenshot())
        console.log(message)
    }
    async addScreenShotWithMessageInReport(message) {
        let outputFile = '..\\WebDriverIOAutomationTesting\\allure-reports\\screenShotFile.png';
        await allureReporter.addAttachment(message, await browser.saveScreenshot(outputFile))
        console.log(message)

    }


}

export default new utils();