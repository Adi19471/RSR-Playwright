import { Page, expect } from "@playwright/test";

export type TrackingMode = "Rail Tracking" | "Ship Tracking" | "Truck Tracking";

const SEARCH_LABEL: Record<TrackingMode, string> = {
  "Rail Tracking": "Search Rake ID",
  "Ship Tracking": "Search Voyage Number",
  "Truck Tracking": "Search Challan Number",
};

const EMPTY_STATE_TEXT: Record<TrackingMode, string> = {
  "Rail Tracking": "No Indent Selected",
  "Ship Tracking": "No Voyage Selected",
  "Truck Tracking": "No Challan Selected",
};

export async function openTracking(page: Page) {
  await page.getByRole("link", { name: "Tracking", exact: true }).click();
  await expect(page).toHaveURL(/Tracking\/TrackingSearch/);
  await expect(page.getByRole("heading", { name: "Tracking", exact: true })).toBeVisible();
}

export async function switchMode(page: Page, mode: TrackingMode) {
  await page.getByRole("tab", { name: mode }).click();
  await expect(page.getByRole("tab", { name: mode })).toHaveAttribute("aria-selected", "true");
}

export function searchInput(page: Page, mode: TrackingMode) {
  return page.getByRole("combobox", { name: SEARCH_LABEL[mode] });
}

export async function expectEmptyState(page: Page, mode: TrackingMode) {
  await expect(page.getByText(EMPTY_STATE_TEXT[mode])).toBeVisible();
}

/**
 * Opens the search autocomplete for the given mode and selects the first
 * available option. Live UAT data for a mode can be empty, so this returns
 * `false` (without selecting anything) rather than failing when there are
 * no options to pick from.
 */
export async function selectFirstOption(page: Page, mode: TrackingMode): Promise<boolean> {
  await searchInput(page, mode).click();
  const option = page.getByRole("option").first();
  const hasOption = await option.isVisible().catch(() => false);
  if (!hasOption) {
    await page.keyboard.press("Escape");
    return false;
  }
  await option.click();
  return true;
}

export async function expectTrackingDetailsVisible(page: Page) {
  await expect(page.getByText("Tracking Details")).toBeVisible();
  await expect(page.getByRole("button", { name: "Download Excel" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Download PDF" })).toBeVisible();
  await expect(page.getByRole("grid")).toBeVisible();
}
