import { test } from "../../fixtures/authFixture";
import { openTruckOverview, openLoadForRow } from "../../pages/Truck/TruckOverviewPage";
import { expectLoadScreenLoaded } from "../../pages/Truck/TruckLoadPage";

test("Truck Load screen opens with expected fields and tabs", async ({ page }) => {
  await openTruckOverview(page);
  await openLoadForRow(page);
  await expectLoadScreenLoaded(page);
});
