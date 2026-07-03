import { Page, expect } from "@playwright/test";

export const LOAD_TABS = [
  "LOAD HANDLING",
  "RAKE DETAILS",
  "COMMERCIAL",
  "COAL INVOICE",
  "EXPENSES CHARGES",
] as const;

export async function openLoadForRow(page: Page, rowIndex = 0) {
  await page.getByRole("button", { name: "Open load" }).nth(rowIndex).click();
  await expect(page.getByRole("heading", { name: "Rake Load" })).toBeVisible();
}

export async function expectLoadScreenLoaded(page: Page) {
  await expect(page).toHaveURL(/RailNew\/load\//);
  await expect(page.getByRole("heading", { name: "Rake Load" })).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Rake ID" })).toBeVisible();
  for (const tab of LOAD_TABS) {
    await expect(page.getByRole("tab", { name: tab })).toBeVisible();
  }
  await expect(page.getByRole("button", { name: "Save" })).toBeVisible();
}
