import { test, expect } from "../../fixtures/authFixture";
import {
  openPartyDashboard,
  openParty,
  switchTab,
} from "../../pages/Rail/RailOverviewPage";

test("Rail party dashboard lists operations parties", async ({ page }) => {
  await openPartyDashboard(page);
  await expect(
    page.getByRole("button", { name: /Add to favourites APPDCL/i })
  ).toBeVisible();
});

test("opening a party shows Rail Overview with Mine to Port / Port to Plant tabs", async ({
  page,
}) => {
  await openPartyDashboard(page);
  await openParty(page, "APPDCL");

  await expect(page.getByRole("tab", { name: "Mine to Port" })).toBeVisible();
  await expect(page.getByRole("tab", { name: "Port to Plant" })).toBeVisible();

  await switchTab(page, "Port to Plant");
});
