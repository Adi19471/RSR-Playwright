import { test } from "../../fixtures/authFixture";
import { openShipOverview, openLoadForRow } from "../../pages/Ship/ShipOverviewPage";
import { expectLoadScreenLoaded } from "../../pages/Ship/ShipLoadPage";

test("Vessel Load screen opens with expected fields and tabs", async ({ page }) => {
  await openShipOverview(page);
  await openLoadForRow(page);
  await expectLoadScreenLoaded(page);
});
