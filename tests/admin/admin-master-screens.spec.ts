import { test } from "../../fixtures/authFixture";
import {
  openAdminScreens,
  openMasterScreen,
  expectMasterScreenLoaded,
  MASTER_SCREENS,
} from "../../pages/Admin/AdminScreensPage";

for (const { button, heading } of MASTER_SCREENS) {
  test(`${button} master screen loads with search, New button and grid`, async ({ page }) => {
    await openAdminScreens(page);
    await openMasterScreen(page, button);
    await expectMasterScreenLoaded(page, heading);
  });
}
