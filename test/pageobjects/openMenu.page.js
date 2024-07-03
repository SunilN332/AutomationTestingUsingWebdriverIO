import Page from "./page.js";
import utils from "../Lib/utils.js";

class openMenu extends Page {
    get openMenuBtn() {return $('//button[text() = "Open Menu"]')}
    get allItems() {return $('//a[@id="inventory_sidebar_link"]')}
    get AboutLink() {return $('//a[@id="about_sidebar_link"]')}
    get logOut() {return $('//a[@id="logout_sidebar_link"]')}
    get resetAppState() {return $('//a[@id="reset_sidebar_link"]')}
    get closeMenuBtn() {return $('//button[text() = "Close Menu"]')}

    async validateOpenMenu() {
        await utils.waitUntilClickable(this.openMenuBtn)
        await utils.objClick(this.openMenuBtn)
        await  utils.waitUntilClickable(this.allItems)
        await utils.waitUntilClickable(this.AboutLink)
        await utils.waitUntilDisplayed(this.logOut)
        await utils.waitUntilClickable(this.resetAppState)
        await utils.objClick(this.closeMenuBtn)
        await utils.addStepWithScreenShotInReport("successfully validated Open menu items")
    }




}

export default new openMenu(); 