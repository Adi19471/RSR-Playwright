import { test, expect } from "../../fixtures/authFixture";
import {
  openTruckOverview,
  searchTrucks,
  searchBox,
  goToNextPage,
  paginationLabel,
} from "../../pages/Truck/TruckOverviewPage";

test.beforeEach(async ({ page }) => {
  await openTruckOverview(page);
});

test("truck grid paginates to the next page", async ({ page }) => {
  const label = paginationLabel(page);
  await expect(label).toHaveText(/^1–5 of \d+$/);
  const total = (await label.textContent())!.match(/of (\d+)/)![1];

  await goToNextPage(page);
  await expect(label).toHaveText(`6–10 of ${total}`);
});

test("search filters the truck grid by party", async ({ page }) => {
  await searchTrucks(page, "APGENCO");
  await expect(page.getByRole("grid")).toContainText("APGENCO");
  await expect(page.getByRole("grid")).not.toContainText("NTECL");
  await searchBox(page).fill("");
});
