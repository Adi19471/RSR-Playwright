import { test, expect } from "../../fixtures/authFixture";
import {
  openTracking,
  switchMode,
  searchInput,
  expectEmptyState,
  selectFirstOption,
  expectTrackingDetailsVisible,
  TrackingMode,
} from "../../pages/Tracking/TrackingPage";

test.beforeEach(async ({ page }) => {
  await openTracking(page);
});

test("Tracking screen defaults to Rail Tracking with an empty state", async ({ page }) => {
  await expect(page.getByRole("tab", { name: "Rail Tracking" })).toHaveAttribute(
    "aria-selected",
    "true"
  );
  await expect(searchInput(page, "Rail Tracking")).toBeVisible();
  await expectEmptyState(page, "Rail Tracking");
});

test("all three tracking modes are selectable and show empty state before a selection", async ({
  page,
}) => {
  const modes: TrackingMode[] = ["Rail Tracking", "Ship Tracking", "Truck Tracking"];
  for (const mode of modes) {
    await switchMode(page, mode);
    await expect(searchInput(page, mode)).toBeVisible();
    await expectEmptyState(page, mode);
  }
});

for (const mode of ["Rail Tracking", "Ship Tracking", "Truck Tracking"] as TrackingMode[]) {
  test(`selecting a ${mode.toLowerCase()} record shows its tracking details`, async ({ page }) => {
    await switchMode(page, mode);
    const selected = await selectFirstOption(page, mode);
    test.skip(!selected, `No live ${mode} records available in UAT to select`);

    await expectTrackingDetailsVisible(page);
  });
}
