# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin\admin-master-creation.spec.ts >> Wagons: new wagon type persists in the grid
- Location: tests\admin\admin-master-creation.spec.ts:13:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('textbox', { name: 'Search All Fields' })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByRole('textbox', { name: 'Search All Fields' })

```

```yaml
- img "Bothra Logo"
- link "Dashboard":
  - /url: /RSR/dashboard/default
- link "Tracking":
  - /url: /RSR/Tracking/TrackingSearch
- link "Contract":
  - /url: /RSR/Contracts/createContracts
- link "Rail":
  - /url: /RSR/Rail/partydasboard
- link "Stock":
  - /url: /RSR/StockMain/
- link "Ship":
  - /url: /RSR/ShipNew/overview_Ship_page
- link "Truck":
  - /url: /RSR/TruckNew/Overview_Truck_page
- link "Admin":
  - /url: /RSR/MainAdmin/Screens
- link "Reports":
  - /url: /RSR/reports/RSR
- text: A
- paragraph: ADMINRSR
- paragraph: Profile
- button "Logout"
- heading "Masters" [level=5]
- paragraph: 13 of 13 screens
- textbox "Search master screens..."
- paragraph: Operations
- text: "3"
- separator
- button "Wagons":
  - paragraph: Wagons
- button "Sidings":
  - paragraph: Sidings
- button "Tanker Type":
  - paragraph: Tanker Type
- paragraph: Party
- text: "1"
- separator
- button "Party":
  - paragraph: Party
- paragraph: Location
- text: "6"
- separator
- button "Locations":
  - paragraph: Locations
- button "Sub location":
  - paragraph: Sub location
- button "Subsidiary":
  - paragraph: Subsidiary
- button "Berth":
  - paragraph: Berth
- button "Equipment":
  - paragraph: Equipment
- button "Machinery":
  - paragraph: Machinery
- paragraph: Users
- text: "1"
- separator
- button "Users":
  - paragraph: Users
- paragraph: Settings
- text: "2"
- separator
- button "Roles":
  - paragraph: Roles
- button "App Settings":
  - paragraph: App Settings
- banner:
  - link "© 2026 Infyz Solutions":
    - /url: "#"
- img
```

# Test source

```ts
  1  | import { Page, expect } from "@playwright/test";
  2  | 
  3  | export async function openAdminScreens(page: Page) {
  4  |   await page.getByRole("link", { name: "Admin", exact: true }).click();
  5  |   await expect(page.getByRole("heading", { name: "Masters" })).toBeVisible();
  6  | }
  7  | 
  8  | export const MASTER_SCREENS = [
  9  |   { button: "Wagons", heading: "WagonType" },
  10 |   { button: "Sidings", heading: "Sidings" },
  11 |   { button: "Tanker Type", heading: "Tanker Types" },
  12 |   { button: "Party", heading: "Party" },
  13 |   { button: "Locations", heading: "Location" },
  14 |   { button: "Sub location", heading: "Sub-Locations" },
  15 |   { button: "Subsidiary", heading: "Subsidiary" },
  16 |   { button: "Berth", heading: "Berth" },
  17 |   { button: "Equipment", heading: "Equipment Type" },
  18 |   { button: "Machinery", heading: "Machinery Type" },
  19 |   { button: "Users", heading: "Users" },
  20 | ] as const;
  21 | 
  22 | export async function openMasterScreen(page: Page, buttonName: string) {
  23 |   await page.getByRole("button", { name: buttonName, exact: true }).click();
  24 |   // Every master screen shares this "Search All Fields" textbox, so it's a
  25 |   // reliable, generic signal that the SPA finished navigating off the
  26 |   // Masters selector before callers (e.g. openNewRecordForm) proceed.
> 27 |   await expect(page.getByRole("textbox", { name: "Search All Fields" })).toBeVisible({
     |                                                                          ^ Error: expect(locator).toBeVisible() failed
  28 |     timeout: 15000,
  29 |   });
  30 | }
  31 | 
  32 | export async function expectMasterScreenLoaded(page: Page, heading: string) {
  33 |   await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  34 |   await expect(page.getByRole("textbox", { name: "Search All Fields" })).toBeVisible();
  35 |   await expect(page.getByRole("button", { name: "New" })).toBeVisible();
  36 |   await expect(page.getByRole("grid")).toBeVisible();
  37 | }
  38 | 
  39 | export async function openNewRecordForm(page: Page) {
  40 |   const newBtn = page.getByRole("button", { name: "New" });
  41 |   await expect(newBtn).toBeEnabled({ timeout: 15000 });
  42 |   await newBtn.click();
  43 | }
  44 | 
  45 | export interface AdminField {
  46 |   label: string;
  47 |   value?: string;
  48 |   kind?: "textbox" | "combobox";
  49 | }
  50 | 
  51 | async function fillAdminField(page: Page, field: AdminField) {
  52 |   if (field.kind === "combobox") {
  53 |     await page.getByRole("combobox", { name: field.label }).click();
  54 |     const option = field.value
  55 |       ? page.getByRole("option", { name: field.value }).first()
  56 |       : page.getByRole("option").first();
  57 |     await option.click();
  58 |   } else {
  59 |     await page.getByRole("textbox", { name: field.label }).fill(field.value ?? "");
  60 |   }
  61 | }
  62 | 
  63 | export async function createAdminRecord(
  64 |   page: Page,
  65 |   fields: AdminField[],
  66 |   saveButtonName: string = "Save"
  67 | ) {
  68 |   for (const field of fields) {
  69 |     await fillAdminField(page, field);
  70 |   }
  71 |   const saveBtn = page.getByRole("button", { name: saveButtonName });
  72 |   await expect(saveBtn).toBeEnabled({ timeout: 10000 });
  73 |   await saveBtn.click();
  74 | }
  75 | 
  76 | export async function searchAdminGrid(page: Page, query: string) {
  77 |   await page.getByRole("textbox", { name: "Search All Fields" }).fill(query);
  78 | }
  79 | 
```