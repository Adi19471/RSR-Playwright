import { Page, expect } from "@playwright/test";

export const DISCHARGE_TABS = [
  "RAIL DETAILS",
  "DISCHARGE HANDLING",
  "EQUIPMENT DETAILS",
  "NMR UTILIZED",
  "WATER TANK DETAILS",
  "MISSING WAGONS",
  "EXPENSES CHARGES",
] as const;

export async function openDischargeForRow(page: Page, rowIndex = 0) {
  await page.getByRole("button", { name: "Open discharge" }).nth(rowIndex).click();
  await expect(page.getByRole("heading", { name: "Rake Discharge" })).toBeVisible();

  // When a rake has more than one RR / place-of-discharge combination, the
  // screen shows a picker instead of auto-loading the form.
  const picker = page.getByRole("heading", { name: "Please select a Rake Id Operation" });
  if (await picker.isVisible().catch(() => false)) {
    await page.getByRole("combobox", { name: /Search rake/i }).click();
    await page.getByRole("option").first().click();
  }
}

export async function expectDischargeScreenLoaded(page: Page) {
  await expect(page).toHaveURL(/RailNew\/discharge\//);
  await expect(page.getByRole("heading", { name: "Rake Discharge" })).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Rake ID" })).toBeVisible();
  for (const tab of DISCHARGE_TABS) {
    await expect(page.getByRole("tab", { name: tab })).toBeVisible();
  }
  await expect(page.getByRole("button", { name: "Save" })).toBeVisible();
}
