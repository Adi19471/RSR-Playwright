import { chromium, FullConfig } from "@playwright/test";
import fs from "fs";
import path from "path";
import { login } from "./pages/LoginPage";

export const authFile = path.resolve(__dirname, "playwright/.auth/user.json");
export const sessionStorageFile = path.resolve(__dirname, "playwright/.auth/session-storage.json");

export default async function globalSetup(config: FullConfig) {
  const baseURL = config.projects[0].use.baseURL;
  const browser = await chromium.launch({ headless: !!process.env.CI });
  const context = await browser.newContext({ baseURL });
  const page = await context.newPage();

  await login(page);
  await page.waitForURL(/dashboard\/default/);

  // This app keeps its auth JWT in sessionStorage (not a cookie or
  // localStorage), which Playwright's storageState() does not capture.
  // Save it separately so authFixture.ts can inject it via addInitScript.
  const sessionStorage = await page.evaluate(() => JSON.stringify(window.sessionStorage));
  fs.mkdirSync(path.dirname(sessionStorageFile), { recursive: true });
  fs.writeFileSync(sessionStorageFile, sessionStorage);

  await context.storageState({ path: authFile });
  await browser.close();
}
