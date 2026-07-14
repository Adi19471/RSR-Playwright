import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import { authFile } from "./global-setup";

dotenv.config();

export default defineConfig({
  testDir: "./tests",

  // Logs in once and saves the session so individual specs don't each
  // perform their own UI login (faster, and avoids repeatedly re-triggering
  // UAT's single-session-per-account behavior).
  globalSetup: "./global-setup.ts",

  timeout: 60 * 1000,

  expect: {
    timeout: 10 * 1000,
  },

  retries: process.env.CI ? 2 : 0,

  // UAT enforces a single session per user account, so parallel workers
  // sharing RSR_USERNAME/RSR_PASSWORD log each other out mid-test.
  workers: 1,

  reporter: [
    ["html"],
    ["list"],
    ["allure-playwright"]
  ],

 use: {
  baseURL: process.env.BASE_URL,

  // CI runners have no display, so headed mode there would fail to launch.
  headless: !!process.env.CI,

  viewport: null,

  storageState: authFile,

  screenshot: "only-on-failure",

  video: "retain-on-failure",

  trace: "retain-on-failure",

  actionTimeout: 15000,

  navigationTimeout: 30000,

  ignoreHTTPSErrors: true,
},

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        viewport: null,
        launchOptions: {
          args: [
            '--start-maximized',
            '--force-device-scale-factor=1',
          ],
        },
      },
    },

    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        viewport: null,
        launchOptions: {
          args: [
            '--start-maximized',
            '--force-device-scale-factor=1',
          ],
        },
      },
    },

    {
      name: 'msedge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
        viewport: null,
        launchOptions: {
          args: [
            '--start-maximized',
            '--force-device-scale-factor=1',
          ],
        },
      },
    },

    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        viewport: null,
      },
    },

    {
      name: 'webkit',
      use: {
        browserName: 'webkit',
        viewport: null,
      },
    },
  ],

  outputDir: "test-results",
});