import { test, expect } from "../../fixtures/authFixture";
import {
  openShipOverview,
  openAddNewForm,
  createShip,
  searchShips,
  NEW_SHIP_COMBOBOX_FIELDS,
  NEW_SHIP_TEXTBOX_FIELDS,
} from "../../pages/Ship/ShipOverviewPage";

test("New Ship / Vessel Operation form opens with expected fields", async ({ page }) => {
  await openShipOverview(page);
  await openAddNewForm(page);

  for (const field of NEW_SHIP_COMBOBOX_FIELDS) {
    await expect(page.getByRole("combobox", { name: field })).toBeVisible();
  }
  for (const field of NEW_SHIP_TEXTBOX_FIELDS) {
    await expect(page.getByRole("textbox", { name: field })).toBeVisible();
  }

  await expect(page.getByRole("button", { name: "Save Operation" })).toBeVisible();
  await page.getByRole("button", { name: "Cancel" }).click();
});

test("New Ship / Vessel Operation can be created and persists in the grid", async ({ page }) => {
  const vesselName = `AUTOTEST-SHIP-${Date.now()}`;

  await openShipOverview(page);
  await openAddNewForm(page);
  await createShip(page, {
    customer: "AUTOTEST-CUSTOMER",
    vesselName,
    cargo: "AUTOTEST-CARGO",
    loadQuantity: "100",
    loadPort: "Paradip Port",
    dischargePort: "Krishnapatnam port",
  });

  await searchShips(page, vesselName);
  const row = page.getByRole("row", { name: new RegExp(vesselName) });
  await expect(row).toBeVisible();
  await expect(row).toContainText("100");
  await expect(row).toContainText("Paradip Port");
});
