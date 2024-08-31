"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const path = require("path");
const fs = require("fs");
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
console.log('BASE_URL', process.env.BASE_URL);
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });
let userConfig = {};
try {
    const userconfigPath = path.resolve(process.cwd() + 'playwright.config.ts');
    if (fs.existsSync(userconfigPath)) {
        const importedConfig = require(userconfigPath);
        userConfig = importedConfig.default || importedConfig;
    }
    else {
        console.log('No custom configuration found');
    }
}
catch (e) {
    console.log('No custom configuration found', e);
}
/**
 * See https://playwright.dev/docs/test-configuration.
 */
const mainConfig = {
    testDir: './tests',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: 'html',
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        // baseURL: 'http://127.0.0.1:3000',
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
        baseURL: process.env.BASE_URL,
    },
    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: Object.assign({}, test_1.devices['Desktop Chrome']),
        },
        {
            name: 'firefox',
            use: Object.assign({}, test_1.devices['Desktop Firefox']),
        },
        {
            name: 'webkit',
            use: Object.assign({}, test_1.devices['Desktop Safari']),
        },
        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },
        /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
        // },
        // {
        //   name: 'Google Chrome',
        //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        // },
    ],
    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://127.0.0.1:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
};
exports.default = (0, test_1.defineConfig)(Object.assign(Object.assign({}, userConfig), mainConfig));
