import { Page, expect } from "@playwright/test";

export const DISCHARGE_TABS = [
  "DELAY",
  "DISCHARGE HANDLING",
  "STOCKPILE DETAILS",
  "EQUIPMENT DETAILS",
  "NMR UTILIZED",
  "WATER TANK DETAILS",
  "EXPENSES CHARGES",
] as const;

export async function expectDischargeScreenLoaded(page: Page) {
  await expect(page).toHaveURL(/ShipNew\/discharge\//);
  await expect(page.getByRole("heading", { name: "Vessel Discharge" })).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Vessel Name" })).toBeVisible();
  for (const tab of DISCHARGE_TABS) {
    await expect(page.getByRole("tab", { name: tab })).toBeVisible();
  }
  await expect(page.getByRole("button", { name: "Save" })).toBeVisible();
}
