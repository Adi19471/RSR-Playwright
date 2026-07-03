import { Page, expect } from "@playwright/test";

export const DISCHARGE_TABS = ["Unload / Discharge Details", "Expenses & Charges"] as const;

export async function expectDischargeScreenLoaded(page: Page) {
  await expect(page).toHaveURL(/TruckNew\/discharge\//);
  await expect(page.getByRole("heading", { name: "Truck Discharge" })).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Vehicle No", exact: true })).toBeVisible();
  for (const tab of DISCHARGE_TABS) {
    await expect(page.getByRole("tab", { name: tab })).toBeVisible();
  }
  await expect(page.getByRole("button", { name: "Save" })).toBeVisible();
}
