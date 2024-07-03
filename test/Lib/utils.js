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

    async waitUntilClickable(element,timeoutValue) {
        if (timeoutValue == undefined || timeoutValue == null) {
            await element.waitForClickable({ timeout: 30000, timeoutMsg: (await element.selector) + ' not clickable' })
            return true;
        }
        else {
            await element.waitForClickable({ timeout: timeoutValue, timeoutMsg: (await element.selector) + ' not clickable' })
            return true;
        }
    }

    async addStepWithScreenShotInReport(message) {
        const screenshot = await browser.takeScreenshot()
        allureReporter.addStep(message, screenshot)
		console.log(message)
	}
    async addScreenShotWithMessageInReport(message) {
        const outputFile = '..\\WebDriverIOAutomationTesting\\allure-results\\screenshotFile.png';
        await allureReporter.addAttachment(message, await browser.saveScreenshot(outputFile))
        console.log(message)

    }


}

export default new utils();