# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin\admin-master-screens.spec.ts >> Users master screen loads with search, New button and grid
- Location: tests\admin\admin-master-screens.spec.ts:10:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Users', exact: true })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('heading', { name: 'Users', exact: true })

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
- paragraph: 12 of 12 screens
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
- text: "1"
- separator
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
  24 | }
  25 | 
  26 | export async function expectMasterScreenLoaded(page: Page, heading: string) {
> 27 |   await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
     |                                                                           ^ Error: expect(locator).toBeVisible() failed
  28 |   await expect(page.getByRole("textbox", { name: "Search All Fields" })).toBeVisible();
  29 |   await expect(page.getByRole("button", { name: "New" })).toBeVisible();
  30 |   await expect(page.getByRole("grid")).toBeVisible();
  31 | }
  32 | 
  33 | export async function openNewRecordForm(page: Page) {
  34 |   const newBtn = page.getByRole("button", { name: "New" });
  35 |   await expect(newBtn).toBeEnabled({ timeout: 15000 });
  36 |   await newBtn.click();
  37 | }
  38 | 
  39 | export interface AdminField {
  40 |   label: string;
  41 |   value?: string;
  42 |   kind?: "textbox" | "combobox";
  43 | }
  44 | 
  45 | async function fillAdminField(page: Page, field: AdminField) {
  46 |   if (field.kind === "combobox") {
  47 |     await page.getByRole("combobox", { name: field.label }).click();
  48 |     const option = field.value
  49 |       ? page.getByRole("option", { name: field.value }).first()
  50 |       : page.getByRole("option").first();
  51 |     await option.click();
  52 |   } else {
  53 |     await page.getByRole("textbox", { name: field.label }).fill(field.value ?? "");
  54 |   }
  55 | }
  56 | 
  57 | export async function createAdminRecord(
  58 |   page: Page,
  59 |   fields: AdminField[],
  60 |   saveButtonName: string = "Save"
  61 | ) {
  62 |   for (const field of fields) {
  63 |     await fillAdminField(page, field);
  64 |   }
  65 |   const saveBtn = page.getByRole("button", { name: saveButtonName });
  66 |   await expect(saveBtn).toBeEnabled({ timeout: 10000 });
  67 |   await saveBtn.click();
  68 | }
  69 | 
  70 | export async function searchAdminGrid(page: Page, query: string) {
  71 |   await page.getByRole("textbox", { name: "Search All Fields" }).fill(query);
  72 | }
  73 | 
```