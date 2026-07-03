import { Page, expect } from "@playwright/test";

export const LOAD_TABS = ["Load Operation Details", "Expenses & Charges"] as const;

export async function expectLoadScreenLoaded(page: Page) {
  await expect(page).toHaveURL(/TruckNew\/load\//);
  await expect(page.getByRole("heading", { name: "Truck Load" })).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Vehicle No", exact: true })).toBeVisible();
  for (const tab of LOAD_TABS) {
    await expect(page.getByRole("tab", { name: tab })).toBeVisible();
  }
  await expect(page.getByRole("button", { name: "Save" })).toBeVisible();
}
