import { Page, expect } from "@playwright/test";

export async function openTruckOverview(page: Page) {
  await page.getByRole("link", { name: "Truck", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Truck Overview" })).toBeVisible();
}

export function searchBox(page: Page) {
  return page.getByRole("textbox", { name: /Search vehicle, party, DO/i });
}

export async function searchTrucks(page: Page, query: string) {
  await searchBox(page).fill(query);
}

export async function goToNextPage(page: Page) {
  await page.getByRole("button", { name: "Go to next page" }).click();
}

export async function goToPreviousPage(page: Page) {
  await page.getByRole("button", { name: "Go to previous page" }).click();
}

export function paginationLabel(page: Page) {
  return page.getByText(/^\d+[–-]\d+ of \d+$/);
}

export async function openNewTruckForm(page: Page) {
  await page.getByRole("button", { name: "New Truck" }).click();
  await expect(
    page.getByRole("heading", { name: /New Truck Operation/i })
  ).toBeVisible();
}

export const NEW_TRUCK_COMBOBOX_FIELDS = ["Contract", "Party", "From Location", "To Location"] as const;

export const NEW_TRUCK_TEXTBOX_FIELDS = [
  "Vehicle Number",
  "Delivery Order No",
  "Quantity (MT)",
  "LR No",
] as const;

export interface NewTruckData {
  /** Option to select; if omitted, the first real option (after "— Select —") is used. */
  contract?: string;
  vehicleNumber: string;
  party?: string;
  fromLocation?: string;
  toLocation?: string;
  deliveryOrderNo: string;
  quantity: string;
  deliveryOrderDate: string;
  lrNo: string;
}

// Plain MUI Select (not an Autocomplete textbox); options match case-insensitively.
// Selecting a Contract auto-derives Party/From Location/To Location and disables
// them, so skip fields that are already disabled instead of forcing a click.
async function selectDropdownOption(page: Page, fieldName: string, optionName?: string) {
  const combo = page.getByRole("combobox", { name: fieldName });
  if ((await combo.getAttribute("aria-disabled")) === "true") return;

  await combo.click();
  if (optionName) {
    await page.getByRole("option", { name: optionName }).first().click();
  } else {
    await page.getByRole("option").nth(1).click(); // 0 is the "— Select —" placeholder
  }
}

export async function createTruck(page: Page, data: NewTruckData) {
  await selectDropdownOption(page, "Contract", data.contract);
  await page.getByRole("textbox", { name: "Vehicle Number" }).fill(data.vehicleNumber);
  await selectDropdownOption(page, "Party", data.party);
  await selectDropdownOption(page, "From Location", data.fromLocation);
  await selectDropdownOption(page, "To Location", data.toLocation);
  await page.getByRole("textbox", { name: "Delivery Order No" }).fill(data.deliveryOrderNo);
  await page.getByRole("textbox", { name: "Quantity (MT)" }).fill(data.quantity);
  await page.getByRole("textbox", { name: "Delivery Order Date" }).fill(data.deliveryOrderDate);
  await page.getByRole("textbox", { name: "LR No" }).fill(data.lrNo);

  await page.getByRole("button", { name: "Save Truck" }).click();
  await expect(page.getByRole("heading", { name: /New Truck Operation/i })).toBeHidden();
}

export async function openLoadForRow(page: Page, rowIndex = 0) {
  await page.getByRole("button", { name: "Open load" }).nth(rowIndex).click();
  await expect(page.getByRole("heading", { name: "Truck Load" })).toBeVisible();
}

export async function openDischargeForRow(page: Page, rowIndex = 0) {
  await page.getByRole("button", { name: "Open discharge" }).nth(rowIndex).click();
  await expect(page.getByRole("heading", { name: "Truck Discharge" })).toBeVisible();
}
