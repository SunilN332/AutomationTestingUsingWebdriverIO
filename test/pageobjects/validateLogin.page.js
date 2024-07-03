import utils from "../Lib/utils.js";
import Page from "./page.js";

class loginPageValidation extends Page {
    get swagLabs() {return $('//div[@class="login_logo"]')}
    get accecptedUserNames() {return $('//div[@id="login_credentials"]/h4')}
    get passwordForAllUsers() {return $('//div[@class="login_password"]')}
    get inputUsername () {return $('#user-name')}
    get inputPassword () {return $('#password');}
    get btnSubmit () {return $('//input[@name="login-button"]')}

    async validateLoginPage() {
        await expect(this.swagLabs).toHaveText("Swag Labs")
        await expect(this.accecptedUserNames).toHaveText(expect.stringContaining("Accepted usernames are:"))
        await expect(this.passwordForAllUsers).toHaveText(expect.stringContaining("Password for all users:"))
        await this.inputPassword.isClickable()
        await this.inputUsername.isClickable()
        await this.btnSubmit.isClickable()
        await utils.addScreenShotWithMessageInReport("successfulll Validated Log IN dom page")
    
    }


}

export default new loginPageValidation(); 