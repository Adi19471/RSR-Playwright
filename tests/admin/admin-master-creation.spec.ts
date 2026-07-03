import { test, expect } from "../../fixtures/authFixture";
import {
  openAdminScreens,
  openMasterScreen,
  openNewRecordForm,
  createAdminRecord,
  searchAdminGrid,
} from "../../pages/Admin/AdminScreensPage";

// Party is excluded: its "New" button is permission-disabled for ADMINRSR.
// Users is excluded: creating a record there means a real login account, kept verify-only.

test("Wagons: new wagon type persists in the grid", async ({ page }) => {
  const code = `AT${Date.now()}`;
  await openAdminScreens(page);
  await openMasterScreen(page, "Wagons");
  await openNewRecordForm(page);
  await createAdminRecord(page, [
    { label: "Code", value: code },
    { label: "Wagon Type", value: `AUTOTEST-${code}` },
  ]);
  await searchAdminGrid(page, code);
  await expect(page.getByRole("grid")).toContainText(code);
});

test("Sidings: new siding persists in the grid", async ({ page }) => {
  const code = `AT${Date.now()}`;
  await openAdminScreens(page);
  await openMasterScreen(page, "Sidings");
  await openNewRecordForm(page);
  await createAdminRecord(page, [
    { label: "Code", value: code },
    { label: "Description", value: `AUTOTEST-${code}` },
  ]);
  await searchAdminGrid(page, code);
  await expect(page.getByRole("grid")).toContainText(code);
});

test("Tanker Type: new tanker type persists in the grid", async ({ page }) => {
  const code = `AT${Date.now()}`;
  await openAdminScreens(page);
  await openMasterScreen(page, "Tanker Type");
  await openNewRecordForm(page);
  await createAdminRecord(page, [{ label: "Tanker Type", value: code }]);
  await searchAdminGrid(page, code);
  await expect(page.getByRole("grid")).toContainText(code);
});

test("Locations: new location persists in the grid", async ({ page }) => {
  const code = `AT${Date.now()}`;
  await openAdminScreens(page);
  await openMasterScreen(page, "Locations");
  await openNewRecordForm(page);
  await createAdminRecord(page, [
    { label: "Location Code", value: code },
    { label: "Location Abbr", value: code.slice(-8) },
    { label: "Location Name", value: `AUTOTEST-${code}` },
    { label: "Location Type", kind: "combobox" },
    { label: "Country", kind: "combobox" },
  ]);
  await searchAdminGrid(page, code);
  await expect(page.getByRole("grid")).toContainText(code);
});

test("Sub location: new sub-location persists in the grid", async ({ page }) => {
  const code = `AT${Date.now()}`;
  await openAdminScreens(page);
  await openMasterScreen(page, "Sub location");
  await openNewRecordForm(page);
  await createAdminRecord(page, [
    { label: "Code", value: code },
    { label: "Description", value: `AUTOTEST-${code}` },
    { label: "Location", kind: "combobox" },
  ]);
  await searchAdminGrid(page, code);
  await expect(page.getByRole("grid")).toContainText(code);
});

test("Subsidiary: new subsidiary persists in the grid", async ({ page }) => {
  const code = `AT${Date.now()}`;
  await openAdminScreens(page);
  await openMasterScreen(page, "Subsidiary");
  await openNewRecordForm(page);
  await createAdminRecord(page, [
    { label: "Name", value: `AUTOTEST-${code}` },
    { label: "Code", value: code },
    { label: "Description", value: `AUTOTEST-${code}` },
  ]);
  await searchAdminGrid(page, code);
  await expect(page.getByRole("grid")).toContainText(code);
});

test("Berth: new berth persists in the grid", async ({ page }) => {
  const code = `AT${Date.now()}`;
  await openAdminScreens(page);
  await openMasterScreen(page, "Berth");
  await openNewRecordForm(page);
  await createAdminRecord(page, [
    { label: "Berth Number", value: code },
    { label: "Measurement Type", kind: "combobox" },
    { label: "Description", value: `AUTOTEST-${code}` },
  ]);
  await searchAdminGrid(page, code);
  await expect(page.getByRole("grid")).toContainText(code);
});

test("Equipment: new equipment type persists in the grid", async ({ page }) => {
  const code = `AT${Date.now()}`;
  await openAdminScreens(page);
  await openMasterScreen(page, "Equipment");
  await openNewRecordForm(page);
  await createAdminRecord(page, [
    { label: "Code", value: code },
    { label: "Description", value: `AUTOTEST-${code}` },
  ]);
  await searchAdminGrid(page, code);
  await expect(page.getByRole("grid")).toContainText(code);
});

test("Machinery: new machinery type persists in the grid", async ({ page }) => {
  // Known bug (found 2026-07-03): the "New" form shows a "Created successfully"
  // toast, but the record never actually persists (confirmed via fresh reload +
  // search: count stays unchanged, new code not found). Kept as an expected
  // failure so this alerts loudly the moment the backend actually fixes it.
  test.fail();
  const code = `AT${Date.now()}`;
  await openAdminScreens(page);
  await openMasterScreen(page, "Machinery");
  await openNewRecordForm(page);
  await createAdminRecord(page, [
    { label: "Code", value: code },
    { label: "Group", kind: "combobox" },
    { label: "Description", value: `AUTOTEST-${code}` },
  ]);
  await searchAdminGrid(page, code);
  await expect(page.getByRole("grid")).toContainText(code);
});
