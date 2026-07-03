import { test } from "../../fixtures/authFixture";
import { expectDashboardLoaded } from "../../pages/DashboardPage";

test("user can login and reach the dashboard", async ({ page }) => {
  await expectDashboardLoaded(page);
});
