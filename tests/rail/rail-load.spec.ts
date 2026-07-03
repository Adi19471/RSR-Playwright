import { test } from "../../fixtures/authFixture";
import { openPartyDashboard, openParty } from "../../pages/Rail/RailOverviewPage";
import { openLoadForRow, expectLoadScreenLoaded } from "../../pages/Rail/RailLoadPage";

test("Rake Load screen opens with expected fields and tabs", async ({ page }) => {
  await openPartyDashboard(page);
  await openParty(page, "APPDCL");
  await openLoadForRow(page);
  await expectLoadScreenLoaded(page);
});
