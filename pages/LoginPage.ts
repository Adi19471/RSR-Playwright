import { Page } from "@playwright/test";

export async function login(page: Page) {
  await page.goto("http://10.99.99.57/RSR/");
  await page.locator('input[name="username"]').fill(process.env.RSR_USERNAME ?? "ADMINRSR");
  await page.locator('input[name="password"]').fill(process.env.RSR_PASSWORD ?? "ADMINRSR");
  await page.locator("button[type=submit]").click();
}
