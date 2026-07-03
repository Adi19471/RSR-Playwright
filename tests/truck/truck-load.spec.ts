import { test } from "../../fixtures/authFixture";
import { openTruckOverview, searchTrucks, openLoadForRow } from "../../pages/Truck/TruckOverviewPage";
import { expectLoadScreenLoaded } from "../../pages/Truck/TruckLoadPage";

test("Truck Load screen opens with expected fields and tabs", async ({ page }) => {
  await openTruckOverview(page);
  // Filter to a known real party so this doesn't land on a freshly
  // AUTOTEST-created truck (from truck-creation.spec.ts).
  await searchTrucks(page, "APGENCO");
  await openLoadForRow(page);
  await expectLoadScreenLoaded(page);
});
