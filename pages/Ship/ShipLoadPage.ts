import { Page, expect } from "@playwright/test";

export const LOAD_TABS = [
  "Delay",
  "LOAD HANDLING",
  "VESSEL DETAILS",
  "STOCKPILE DETAILS",
  "EQUIPMENT DETAILS",
  "NMR UTILIZED",
  "WATER TANK & DETAILS",
  "SURVEY DETAILS",
  "EXPENSES CHARGES",
] as const;

export async function expectLoadScreenLoaded(page: Page) {
  await expect(page).toHaveURL(/ShipNew\/load\//);
  await expect(page.getByRole("heading", { name: "Vessel Load" })).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Vessel Name" })).toBeVisible();
  for (const tab of LOAD_TABS) {
    await expect(page.getByRole("tab", { name: tab })).toBeVisible();
  }
  await expect(page.getByRole("button", { name: "Save" })).toBeVisible();
}
