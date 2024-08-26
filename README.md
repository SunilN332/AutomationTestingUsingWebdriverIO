# Swag Labs Demo Automation web Application

## WebDriverIOAutomationTesting

This repository describes Automation Testing using [WebdriverIO with Mocha Framework](https://webdriver.io/)

### Cloning the Repository:

To clone the remote repository and create a local copy in your machine use this command

```
git clone https://github.com/sunilNreddy332/WebDriverIOAutomationTesting.git
```

### Installation:

This project requires lastest Nodejs version and other packages that are listed in the package.json file.

-   Install latest version node
-   To install the required packages run the below command:
-   `npm install`

### Execution:

-   To execute as suite, use below command.

```
 npm run suiteName
```

Note: A suite must be created in wdio.conf.js. Refer to wdio.conf.js file to check the list of suite level files.

Example:

```
 suites: {
       swagLabs: [
           './test/specs/test.e2e.js',
           './test/specs/validateLoginPage.spec.js',
           './test/specs/openMenu.spec.js',
           './test/specs/addProductionToCartValidation.spec.js',
           './test/specs/removeCartItemsFromCart.spec.js',
           './test/specs/initiateShipmentCartItemsAndCompleteTheOrder.spec.js'
       ],
   },
```

-   To execute the individual script, use the below command.

```
 npx wdio run .\wdio.conf.js --spec "file path"
```

Example:

```
   test/specs/test.e2e.js
```

## Report:

-   To generate the allure report, use the below commands.

```
- npm run generatereport
- allure open -h localhost -p 4444**

```
