import { test } from "../../fixtures/authFixture";
import { openShipOverview, searchShips, openDischargeForRow } from "../../pages/Ship/ShipOverviewPage";
import { expectDischargeScreenLoaded } from "../../pages/Ship/ShipDischargePage";

test("Vessel Discharge screen opens with expected fields and tabs", async ({ page }) => {
  await openShipOverview(page);
  // Filter to a known real customer so this doesn't accidentally land on a
  // freshly AUTOTEST-created ship, which lacks a linked vessel/berth.
  await searchShips(page, "APPDCL");
  await openDischargeForRow(page);
  await expectDischargeScreenLoaded(page);
});
