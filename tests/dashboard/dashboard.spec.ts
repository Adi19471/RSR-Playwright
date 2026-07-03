import { test, expect } from "../../fixtures/authFixture";
import { expectDashboardLoaded, kpiCard } from "../../pages/DashboardPage";

test.beforeEach(async ({ page }) => {
  await expectDashboardLoaded(page);
});

test("KPI cards are visible for contracts, parties, rails and ships", async ({ page }) => {
  for (const title of ["Contracts", "Parties", "Rails", "Ships"]) {
    await expect(kpiCard(page, title)).toBeVisible();
  }
});

test("Parties KPI card navigates to the Rail party dashboard", async ({ page }) => {
  await kpiCard(page, "Parties").click();
  await expect(page).toHaveURL(/Rail\/partydasboard/);
});
