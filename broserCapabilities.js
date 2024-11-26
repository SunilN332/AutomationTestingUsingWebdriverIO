export function generateBrowserCapabilities(browserName) {
    const capabilities = {
        chrome: {
            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'wdio:enforceWebDriverClassic': true,
            'goog:chromeOptions': {
                w3c: true,
                args: [
                    '--start-maximized',
                    '--disable-infobars',
                    '--disable-dev-shm-usage',
                    '--disable-popup-blocking',
                    '--disable-notifications',
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-gpu',
                    '--headless=new',
                ],
                prefs: {
                    'autofill.profile_enabled': false,
                    'profile.default_content_setting_values.notifications': 2,
                    credentials_enable_service: false,
                },
            },
        },
        firefox: {
            maxInstances: 1,
            browserName: 'firefox',
            acceptInsecureCerts: true,
            'moz:firefoxOptions': {
                args: '-headless',
                prefs: {
                    'dom.webnotifications.enabled': false,
                    'dom.push.enabled': false,
                    'browser.cache.disk.enable': false,
                    'browser.cache.memory.enable': true,
                    'network.http.pipelining': true,
                    'network.http.proxy.pipelining': true,
                    'browser.tabs.remote.autostart': false,
                    'browser.tabs.remote.autostart.2': false,
                },
                log: { level: 'trace' },
            },
        },
    };

    return capabilities[browserName];
}
