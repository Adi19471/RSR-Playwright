import { Page, expect } from "@playwright/test";

export async function openAdminScreens(page: Page) {
  await page.getByRole("link", { name: "Admin", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Masters" })).toBeVisible();
}

export const MASTER_SCREENS = [
  { button: "Wagons", heading: "WagonType" },
  { button: "Sidings", heading: "Sidings" },
  { button: "Tanker Type", heading: "Tanker Types" },
  { button: "Party", heading: "Party" },
  { button: "Locations", heading: "Location" },
  { button: "Sub location", heading: "Sub-Locations" },
  { button: "Subsidiary", heading: "Subsidiary" },
  { button: "Berth", heading: "Berth" },
  { button: "Equipment", heading: "Equipment Type" },
  { button: "Machinery", heading: "Machinery Type" },
  { button: "Users", heading: "Users" },
] as const;

export async function openMasterScreen(page: Page, buttonName: string) {
  await page.getByRole("button", { name: buttonName, exact: true }).click();
  // Every master screen shares this "Search All Fields" textbox, so it's a
  // reliable, generic signal that the SPA finished navigating off the
  // Masters selector before callers (e.g. openNewRecordForm) proceed.
  await expect(page.getByRole("textbox", { name: "Search All Fields" })).toBeVisible({
    timeout: 15000,
  });
}

export async function expectMasterScreenLoaded(page: Page, heading: string) {
  await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Search All Fields" })).toBeVisible();
  await expect(page.getByRole("button", { name: "New" })).toBeVisible();
  await expect(page.getByRole("grid")).toBeVisible();
}

export async function openNewRecordForm(page: Page) {
  const newBtn = page.getByRole("button", { name: "New" });
  await expect(newBtn).toBeEnabled({ timeout: 15000 });
  await newBtn.click();
}

export interface AdminField {
  label: string;
  value?: string;
  kind?: "textbox" | "combobox";
}

async function fillAdminField(page: Page, field: AdminField) {
  if (field.kind === "combobox") {
    await page.getByRole("combobox", { name: field.label }).click();
    const option = field.value
      ? page.getByRole("option", { name: field.value }).first()
      : page.getByRole("option").first();
    await option.click();
  } else {
    await page.getByRole("textbox", { name: field.label }).fill(field.value ?? "");
  }
}

export async function createAdminRecord(
  page: Page,
  fields: AdminField[],
  saveButtonName: string = "Save"
) {
  for (const field of fields) {
    await fillAdminField(page, field);
  }
  const saveBtn = page.getByRole("button", { name: saveButtonName });
  await expect(saveBtn).toBeEnabled({ timeout: 10000 });
  await saveBtn.click();
}

export async function searchAdminGrid(page: Page, query: string) {
  await page.getByRole("textbox", { name: "Search All Fields" }).fill(query);
}
