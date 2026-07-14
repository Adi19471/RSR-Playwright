import { test as base } from "@playwright/test";
import fs from "fs";
import { sessionStorageFile } from "../global-setup";

// Auth is handled once by global-setup.ts. playwright.config.ts's
// `use.storageState` restores cookies/localStorage automatically, but this
// app's JWT lives in sessionStorage, which storageState doesn't capture — so
// it's injected here via addInitScript before the page's own scripts run.
export const test = base.extend({
  context: async ({ context }, use) => {
    if (fs.existsSync(sessionStorageFile)) {
      const sessionStorageJson = fs.readFileSync(sessionStorageFile, "utf-8");
      await context.addInitScript((raw) => {
        const data = JSON.parse(raw) as Record<string, string>;
        for (const [key, value] of Object.entries(data)) {
          window.sessionStorage.setItem(key, value);
        }
      }, sessionStorageJson);
    } 
    await use(context);
  },
  page: async ({ page }, use) => {
    await page.goto("/RSR/dashboard/default");
    await use(page);
  },
});

export { expect } from "@playwright/test";
