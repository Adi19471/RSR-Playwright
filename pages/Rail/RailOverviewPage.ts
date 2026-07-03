import { Page, expect } from "@playwright/test";

export type RailTab = "Mine to Port" | "Port to Plant";

export async function openPartyDashboard(page: Page) {
  await page.getByRole("link", { name: "Rail", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Parties" })).toBeVisible();
}

export async function openParty(page: Page, partyName: string) {
  await page
    .getByRole("button", { name: new RegExp(`Add to favourites ${partyName}`, "i") })
    .click();
  await expect(page.getByRole("heading", { name: "Rail Overview" })).toBeVisible();
}

export async function switchTab(page: Page, tab: RailTab) {
  await page.getByRole("tab", { name: tab }).click();
  await expect(page.getByRole("tab", { name: tab })).toHaveAttribute(
    "aria-selected",
    "true"
  );
}

export async function searchRake(page: Page, query: string) {
  await page.getByRole("textbox", { name: /Search rake, party, RR/i }).fill(query);
}
