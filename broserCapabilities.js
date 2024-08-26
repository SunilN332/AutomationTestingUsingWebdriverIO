// broswerCapabilities.js

export function generateBrowserCapabilities(browserName) {
    const capabilities = {
        chrome: {
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                w3c: true,
                prefs: {
                    'autofill.profile_enabled': false,
                },
                args: [
                    '--start-maximized',
                    '--headless',
                    '--disable-gpu',
                    '--disable-infobars',
                    '--didable-dev-shm-usage',
                    '--disable-popup-blocking',
                    '--disable-notifications',
                ],
            },
        },
    };
    return capabilities[browserName];
}
