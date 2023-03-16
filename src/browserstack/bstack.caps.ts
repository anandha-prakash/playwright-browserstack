require('dotenv').config();

export const credentials = {
    'browserstack.username': process.env.BROWSERSTACK_USERNAME,
    'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
};

export const common_capabilities = {
    project: 'softwareadvice-pw-project',
    'browserstack.maskCommands': 'sendType, sendPress, setHTTPCredentials, setStorageState, setGeolocation',
    'browserstack.debug': 'true',
    'browserstack.video': 'true',
    'browserstack.console': 'verbose',
    'browserstack.networkLogs': 'true',
};

export const browsers = {
    chrome: {
        browser: 'chrome',
        browser_version: 'latest',
        os: 'osx',
        os_version: 'Ventura',
        ...credentials,
        ...common_capabilities
    },
    firefox: {
        browser: 'playwright-firefox',
        browser_version: 'latest',
        os: 'osx',
        os_version: 'Ventura',
        ...credentials,
        ...common_capabilities
    },
    safari: {
        browser: 'playwright-webkit',
        browser_version: 'latest',
        os: 'osx',
        os_version: 'Ventura',
        ...credentials,
        ...common_capabilities
    },
    edge: {
        browser: 'edge',
        browser_version: 'latest',
        os: 'Windows',
        os_version: '11',
        ...credentials,
        ...common_capabilities
    },
    iphone: {
        browser: 'playwright-webkit',
        browser_version: 'latest',
        os: 'osx',
        os_version: 'Ventura',
        ...credentials,
        ...common_capabilities
    },
    android: {
        browser: 'chrome',
        browser_version: 'latest',
        os: 'osx',
        os_version: 'Ventura',
        ...credentials,
        ...common_capabilities
    },
};
