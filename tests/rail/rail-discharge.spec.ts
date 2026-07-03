import { test } from "../../fixtures/authFixture";
import { openPartyDashboard, openParty } from "../../pages/Rail/RailOverviewPage";
import {
  openDischargeForRow,
  expectDischargeScreenLoaded,
} from "../../pages/Rail/RailDischargePage";

test("Rake Discharge screen opens with expected fields and tabs", async ({ page }) => {
  await openPartyDashboard(page);
  await openParty(page, "APPDCL");
  await openDischargeForRow(page);
  await expectDischargeScreenLoaded(page);
});
