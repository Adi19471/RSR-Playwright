import { test } from "@playwright/test";
import { login } from "../../pages/LoginPage";
import { expectDashboardLoaded } from "../../pages/Dashboard/DashboardPage";

// Every other spec reuses the session saved by global-setup.ts. This one
// explicitly starts unauthenticated so it actually exercises a fresh login.
test.use({ storageState: { cookies: [], origins: [] } });

test("user can login and reach the dashboard", async ({ page }) => {
  await login(page);
  await expectDashboardLoaded(page);
});
