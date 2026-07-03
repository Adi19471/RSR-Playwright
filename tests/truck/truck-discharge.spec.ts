import { test } from "../../fixtures/authFixture";
import { openTruckOverview, openDischargeForRow } from "../../pages/Truck/TruckOverviewPage";
import { expectDischargeScreenLoaded } from "../../pages/Truck/TruckDischargePage";

test("Truck Discharge screen opens with expected fields and tabs", async ({ page }) => {
  await openTruckOverview(page);
  await openDischargeForRow(page);
  await expectDischargeScreenLoaded(page);
});
