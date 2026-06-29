import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  testDir: "./tests",

  timeout: 60 * 1000,

  expect: {
    timeout: 10 * 1000,
  },

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ["html"],
    ["list"],
    ["allure-playwright"]
  ],

  use: {
    baseURL: process.env.BASE_URL,

    headless: false,

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    trace: "retain-on-failure",

    actionTimeout: 15000,

    navigationTimeout: 30000,

    viewport: {
      width: 1920,
      height: 1080,
    },

    ignoreHTTPSErrors: true,
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },

    // Enable if required
    // {
    //   name: "firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //   },
    // },

    // {
    //   name: "webkit",
    //   use: {
    //     ...devices["Desktop Safari"],
    //   },
    // },
  ],

  outputDir: "test-results",
});