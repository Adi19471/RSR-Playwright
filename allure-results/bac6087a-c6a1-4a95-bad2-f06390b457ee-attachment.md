# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: rail\rail-creation.spec.ts >> Creation Rail
- Location: tests\rail\rail-creation.spec.ts:6:5

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Rail', exact: true })

```

# Page snapshot

```yaml
- generic [ref=e5]:
  - generic [ref=e7]:
    - img "Company Logo" [ref=e8]
    - heading "Port Logistics & Services" [level=5] [ref=e9]
    - paragraph [ref=e10]: Built-in trust — smarter port operations
  - generic [ref=e11]:
    - img [ref=e13]
    - heading "Welcome Back" [level=6] [ref=e15]
    - paragraph [ref=e16]: Sign in to access your dashboard
    - generic [ref=e17]:
      - generic [ref=e18]:
        - generic [ref=e19]:
          - text: User Name
          - generic [ref=e20]: "*"
        - generic [ref=e21]:
          - img [ref=e23]
          - textbox "User Name" [ref=e25]: infyz
          - group:
            - generic: User Name *
      - generic [ref=e26]:
        - generic [ref=e27]:
          - text: Password
          - generic [ref=e28]: "*"
        - generic [ref=e29]:
          - img [ref=e31]
          - textbox "Password" [ref=e34]: ADMINRSR
          - button "toggle password visibility" [ref=e36] [cursor=pointer]:
            - img [ref=e37]
          - group:
            - generic: Password *
      - button "Sign In" [ref=e39] [cursor=pointer]: Sign In
      - separator [ref=e40]
```

# Test source

```ts
  1   | import { Page } from "@playwright/test";
  2   | 
  3   | export interface RailCreationData {
  4   |   rakeId: string;
  5   |   contractNo: string;
  6   |   noOfWagons: string;
  7   |   wagonType: string;
  8   |   washeryName: string;
  9   |   sickWagons: string;
  10  |   loadOperationType: string;
  11  |   toLocation: string;
  12  |   fromLocation: string;
  13  |   dateOfLoading: string;
  14  | }
  15  | 
  16  | export async function createRail(page: Page, data: RailCreationData) {
  17  |   await page
  18  |     .getByRole("link", {
  19  |       name: "Rail",
  20  |       exact: true,
  21  |     })
> 22  |     .click();
      |      ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  23  | 
  24  |   await page
  25  |     .getByRole("button", { name: "Add to favourites APPDCL Rail" })
  26  |     .click();
  27  | 
  28  |   await page
  29  |     .getByRole("button", {
  30  |       name: /New Rail/i,
  31  |     })
  32  |     .click();
  33  | 
  34  |   await page
  35  |     .getByRole("textbox", {
  36  |       name: "Rake ID",
  37  |     })
  38  |     .fill(data.rakeId);
  39  | 
  40  |   await page
  41  |     .getByRole("combobox", {
  42  |       name: "Contract No",
  43  |     })
  44  |     .click();
  45  | 
  46  |   await page
  47  |     .getByRole("option", {
  48  |       name: data.contractNo,
  49  |     })
  50  |     .click();
  51  | 
  52  |   await page
  53  |     .getByRole("textbox", {
  54  |       name: "No. of Wagons",
  55  |     })
  56  |     .fill(data.noOfWagons);
  57  | 
  58  |   await page
  59  |     .getByRole("combobox", {
  60  |       name: "Type of Wagon",
  61  |     })
  62  |     .click();
  63  | 
  64  |   await page
  65  |     .getByRole("option", {
  66  |       name: data.wagonType,
  67  |     })
  68  |     .click();
  69  | 
  70  |   await page
  71  |     .getByRole("textbox", {
  72  |       name: "Washery Name",
  73  |     })
  74  |     .fill(data.washeryName);
  75  | 
  76  |   await page
  77  |     .getByRole("textbox", {
  78  |       name: "Sick Wagons",
  79  |     })
  80  |     .fill(data.sickWagons);
  81  | 
  82  |   await page
  83  |     .getByRole("combobox", {
  84  |       name: "Load Operation Type",
  85  |     })
  86  |     .click();
  87  | 
  88  |   await page
  89  |     .getByRole("option", {
  90  |       name: data.loadOperationType,
  91  |     })
  92  |     .click();
  93  | 
  94  |   await page
  95  |     .getByRole("combobox", {
  96  |       name: "To Location",
  97  |     })
  98  |     .click();
  99  | 
  100 |   await page
  101 |     .getByRole("option", {
  102 |       name: data.toLocation,
  103 |     })
  104 |     .click();
  105 | 
  106 |   await page
  107 |     .getByRole("combobox", {
  108 |       name: "From Location",
  109 |     })
  110 |     .click();
  111 | 
  112 |   await page
  113 |     .getByRole("option", {
  114 |       name: data.fromLocation,
  115 |     })
  116 |     .click();
  117 | 
  118 |  await page
  119 |   .getByLabel('Date of Loading')
  120 |   .fill(data.dateOfLoading);
  121 | 
  122 |   await page
```