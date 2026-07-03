import { Page, expect } from "@playwright/test";

export const NAV_LINKS = [
  "Dashboard",
  "Tracking",
  "Contract",
  "Rail",
  "Stock",
  "Ship",
  "Truck",
  "Admin",
  "Reports",
] as const;

export type NavLink = (typeof NAV_LINKS)[number];

export async function expectDashboardLoaded(page: Page) {
  await expect(page).toHaveURL(/dashboard\/default/);
  await expect(
    page.getByRole("heading", { name: "Operations Dashboard" })
  ).toBeVisible();
}

export async function openModule(page: Page, name: NavLink) {
  await page.getByRole("link", { name, exact: true }).click();
}

export function kpiCard(page: Page, title: string) {
  return page.getByRole("link", { name: new RegExp(`Open Total ${title}`, "i") });
}
