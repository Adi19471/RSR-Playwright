import { Page, expect } from "@playwright/test";

export async function openShipOverview(page: Page) {
  await page.getByRole("link", { name: "Ship", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Ship Operations" })).toBeVisible();
}

export function searchBox(page: Page) {
  return page.getByPlaceholder("Global search...");
}

export async function searchShips(page: Page, query: string) {
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

export async function openAddNewForm(page: Page) {
  await page.getByRole("button", { name: "Add New" }).click();
  await expect(
    page.getByRole("heading", { name: "New Ship / Vessel Operation" })
  ).toBeVisible();
}

export const NEW_SHIP_COMBOBOX_FIELDS = ["Contract", "Load Port", "Discharge Port"] as const;

export const NEW_SHIP_TEXTBOX_FIELDS = [
  "Customer",
  "Vessel Name",
  "Cargo",
  "VCN / Voyage Number",
  "Load Quantity (MT)",
] as const;

export interface NewShipData {
  /** Contract number to select; if omitted, the first available option is used. */
  contract?: string;
  customer: string;
  vesselName: string;
  cargo: string;
  loadQuantity: string;
  loadPort: string;
  dischargePort: string;
}

// This is a plain (non-editable) MUI Select, not an Autocomplete textbox —
// options can't be filtered by typing; just click the option by name.
// `exact: true` is case-sensitive, so match case-insensitively (substring)
// instead of hardcoding the master data's exact casing.
async function selectPortOption(page: Page, fieldName: string, portName: string) {
  await page.getByRole("combobox", { name: fieldName }).click();
  await page.getByRole("option", { name: portName }).first().click();
}

export async function createShip(page: Page, data: NewShipData) {
  await page.getByRole("combobox", { name: "Contract" }).click();
  if (data.contract) {
    await page.getByRole("option", { name: data.contract, exact: true }).click();
  } else {
    await page.getByRole("option").first().click();
  }
  await page.getByRole("textbox", { name: "Customer" }).fill(data.customer);
  await page.getByRole("textbox", { name: "Vessel Name" }).fill(data.vesselName);
  await page.getByRole("textbox", { name: "Cargo" }).fill(data.cargo);
  await page.getByRole("textbox", { name: "Load Quantity (MT)" }).fill(data.loadQuantity);
  await selectPortOption(page, "Load Port", data.loadPort);
  await selectPortOption(page, "Discharge Port", data.dischargePort);

  await page.getByRole("button", { name: "Save Operation" }).click();
  await expect(page.getByRole("heading", { name: "New Ship / Vessel Operation" })).toBeHidden();
}

export async function openLoadForRow(page: Page, rowIndex = 0) {
  await page.getByRole("link", { name: "Open load" }).nth(rowIndex).click();
  await expect(page.getByRole("heading", { name: "Vessel Load" })).toBeVisible();
}

export async function openDischargeForRow(page: Page, rowIndex = 0) {
  await page.getByRole("link", { name: "Open discharge" }).nth(rowIndex).click();
  await expect(page.getByRole("heading", { name: "Vessel Discharge" })).toBeVisible();
}
