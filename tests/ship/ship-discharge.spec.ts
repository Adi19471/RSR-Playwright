import { test } from "../../fixtures/authFixture";
import { openShipOverview, openDischargeForRow } from "../../pages/Ship/ShipOverviewPage";
import { expectDischargeScreenLoaded } from "../../pages/Ship/ShipDischargePage";

test("Vessel Discharge screen opens with expected fields and tabs", async ({ page }) => {
  await openShipOverview(page);
  await openDischargeForRow(page);
  await expectDischargeScreenLoaded(page);
});
