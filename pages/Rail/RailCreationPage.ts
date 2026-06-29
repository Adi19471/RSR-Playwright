import { Page } from "@playwright/test";

export interface RailCreationData {
  rakeId: string;
  contractNo: string;
  noOfWagons: string;
  wagonType: string;
  washeryName: string;
  sickWagons: string;
  loadOperationType: string;
  toLocation: string;
  fromLocation: string;
  dateOfLoading: string;
}

export async function createRail(page: Page, data: RailCreationData) {
  await page
    .getByRole("link", {
      name: "Rail",
      exact: true,
    })
    .click();

  await page
    .getByRole("button", { name: "Add to favourites APPDCL Rail" })
    .click();

  await page
    .getByRole("button", {
      name: /New Rail/i,
    })
    .click();

  await page
    .getByRole("textbox", {
      name: "Rake ID",
    })
    .fill(data.rakeId);

  await page
    .getByRole("combobox", {
      name: "Contract No",
    })
    .click();

  await page
    .getByRole("option", {
      name: data.contractNo,
    })
    .click();

  await page
    .getByRole("textbox", {
      name: "No. of Wagons",
    })
    .fill(data.noOfWagons);

  await page
    .getByRole("combobox", {
      name: "Type of Wagon",
    })
    .click();

  await page
    .getByRole("option", {
      name: data.wagonType,
    })
    .click();

  await page
    .getByRole("textbox", {
      name: "Washery Name",
    })
    .fill(data.washeryName);

  await page
    .getByRole("textbox", {
      name: "Sick Wagons",
    })
    .fill(data.sickWagons);

  await page
    .getByRole("combobox", {
      name: "Load Operation Type",
    })
    .click();

  await page
    .getByRole("option", {
      name: data.loadOperationType,
    })
    .click();

  await page
    .getByRole("combobox", {
      name: "To Location",
    })
    .click();

  await page
    .getByRole("option", {
      name: data.toLocation,
    })
    .click();

  await page
    .getByRole("combobox", {
      name: "From Location",
    })
    .click();

  await page
    .getByRole("option", {
      name: data.fromLocation,
    })
    .click();

 await page
  .getByLabel('Date of Loading')
  .fill(data.dateOfLoading);

  await page
    .getByRole("button", {
      name: "Save",
    })
    .click();
}
