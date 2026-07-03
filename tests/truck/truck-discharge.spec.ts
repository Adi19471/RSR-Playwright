import { test } from "../../fixtures/authFixture";
import { openTruckOverview, searchTrucks, openDischargeForRow } from "../../pages/Truck/TruckOverviewPage";
import { expectDischargeScreenLoaded } from "../../pages/Truck/TruckDischargePage";

test("Truck Discharge screen opens with expected fields and tabs", async ({ page }) => {
  await openTruckOverview(page);
  // Filter to a known real party so this doesn't land on a freshly
  // AUTOTEST-created truck.
  await searchTrucks(page, "APGENCO");
  await openDischargeForRow(page);
  await expectDischargeScreenLoaded(page);
});
