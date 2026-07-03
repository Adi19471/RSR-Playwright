import { test, expect } from "../../fixtures/authFixture";
import {
  openShipOverview,
  searchShips,
  searchBox,
  goToNextPage,
  paginationLabel,
} from "../../pages/Ship/ShipOverviewPage";

test.beforeEach(async ({ page }) => {
  await openShipOverview(page);
});

test("ship grid paginates to the next page", async ({ page }) => {
  const label = paginationLabel(page);
  await expect(label).toHaveText(/^1–5 of \d+$/);
  const total = (await label.textContent())!.match(/of (\d+)/)![1];

  await goToNextPage(page);
  await expect(label).toHaveText(`6–10 of ${total}`);
});

test("search filters the ship grid by customer", async ({ page }) => {
  await searchShips(page, "APPDCL");
  await expect(page.getByRole("grid")).toContainText("APPDCL");
  await expect(page.getByRole("grid")).not.toContainText("NTPC TAMILNADU");
  await searchBox(page).fill("");
});
