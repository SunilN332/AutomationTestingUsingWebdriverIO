import Page from "./page";

class loginPageValidation extends Page {
    get swagLabs() {return $('//div[@class="login_logo"]')}
    get accecptedUserNames() {return $('//div[@id="login_credentials"]/h4')}
    get passwordForAllUsers() {return $('//div[@class="login_password"]')}


}

export default new loginPageValidation(); 