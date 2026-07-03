import { test, expect } from "../../fixtures/authFixture";
import {
  openTruckOverview,
  openNewTruckForm,
  createTruck,
  searchTrucks,
  NEW_TRUCK_COMBOBOX_FIELDS,
  NEW_TRUCK_TEXTBOX_FIELDS,
} from "../../pages/Truck/TruckOverviewPage";

test("New Truck Operation form opens with expected fields", async ({ page }) => {
  await openTruckOverview(page);
  await openNewTruckForm(page);

  for (const field of NEW_TRUCK_COMBOBOX_FIELDS) {
    await expect(page.getByRole("combobox", { name: field })).toBeVisible();
  }
  for (const field of NEW_TRUCK_TEXTBOX_FIELDS) {
    await expect(page.getByRole("textbox", { name: field })).toBeVisible();
  }

  await expect(page.getByRole("button", { name: "Save Truck" })).toBeVisible();
  await page.getByRole("button", { name: "Cancel" }).click();
});

test("New Truck Operation can be created and persists in the grid", async ({ page }) => {
  const vehicleNumber = `AUTOTEST${Date.now()}`;

  await openTruckOverview(page);
  await openNewTruckForm(page);
  await createTruck(page, {
    vehicleNumber,
    // Party is auto-derived from Contract and disabled once Contract is set,
    // so it's intentionally left unset here rather than passed and ignored.
    fromLocation: "Talcher Mine",
    toLocation: "Paradip Port",
    deliveryOrderNo: `AUTOTEST-DO-${Date.now()}`,
    quantity: "100",
    deliveryOrderDate: new Date().toLocaleDateString("en-GB").replace(/\//g, "-"),
    lrNo: `AUTOTEST-LR-${Date.now()}`,
  });

  await searchTrucks(page, vehicleNumber);
  const row = page.getByRole("row", { name: new RegExp(vehicleNumber) });
  await expect(row).toBeVisible();
  await expect(row).toContainText("Talcher Mine");
  await expect(row).toContainText("100");
});
