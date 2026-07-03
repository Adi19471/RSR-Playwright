import { test } from "../../fixtures/authFixture";
import { openShipOverview, searchShips, openLoadForRow } from "../../pages/Ship/ShipOverviewPage";
import { expectLoadScreenLoaded } from "../../pages/Ship/ShipLoadPage";

test("Vessel Load screen opens with expected fields and tabs", async ({ page }) => {
  await openShipOverview(page);
  // Filter to a known real customer so this doesn't accidentally land on a
  // freshly AUTOTEST-created ship (e.g. from ship-creation.spec.ts), which
  // lacks a linked vessel and shows a "select a vessel" picker instead.
  await searchShips(page, "APPDCL");
  await openLoadForRow(page);
  await expectLoadScreenLoaded(page);
});
