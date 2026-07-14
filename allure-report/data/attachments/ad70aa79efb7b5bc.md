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
  - waiting for getByRole('option', { name: 'CONTR/2025-26/39' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e5]:
      - img [ref=e7]
      - generic [ref=e8]:
        - link [ref=e9] [cursor=pointer]:
          - /url: /RSR/dashboard/default
          - generic [ref=e10]: dashboard
          - generic [ref=e11]: Dashboard
        - link [ref=e12] [cursor=pointer]:
          - /url: /RSR/Tracking/TrackingSearch
          - generic [ref=e13]: location_searching
          - generic [ref=e14]: Tracking
        - link [ref=e15] [cursor=pointer]:
          - /url: /RSR/Contracts/createContracts
          - generic [ref=e16]: assignment_turned_in
          - generic [ref=e17]: Contract
        - link [ref=e18] [cursor=pointer]:
          - /url: /RSR/Rail/partydasboard
          - generic [ref=e19]: directions_railway
          - generic [ref=e20]: Rail
        - link [ref=e21] [cursor=pointer]:
          - /url: /RSR/StockMain/
          - generic [ref=e22]: inventory_2
          - generic [ref=e23]: Stock
        - link [ref=e24] [cursor=pointer]:
          - /url: /RSR/ShipNew/overview_Ship_page
          - generic [ref=e25]: directions_boat
          - generic [ref=e26]: Ship
        - link [ref=e27] [cursor=pointer]:
          - /url: /RSR/TruckNew/Overview_Truck_page
          - generic [ref=e28]: local_shipping
          - generic [ref=e29]: Truck
        - link [ref=e30] [cursor=pointer]:
          - /url: /RSR/MainAdmin/Screens
          - generic [ref=e31]: admin_panel_settings
          - generic [ref=e32]: Admin
        - link [ref=e33] [cursor=pointer]:
          - /url: /RSR/reports/RSR
          - generic [ref=e34]: bar_chart
          - generic [ref=e35]: Reports
      - generic [ref=e36]:
        - generic [ref=e37]:
          - generic [ref=e38]: A
          - generic [ref=e39]:
            - paragraph [ref=e40]: ADMINRSR
            - paragraph [ref=e41]: Profile
        - button [ref=e42] [cursor=pointer]:
          - img [ref=e43]
    - generic [ref=e47]:
      - generic [ref=e50]:
        - generic [ref=e54]:
          - tablist [ref=e57]:
            - tab [selected] [ref=e58] [cursor=pointer]:
              - img [ref=e59]
              - text: Mine to Port
            - tab [ref=e61] [cursor=pointer]:
              - img [ref=e62]
              - text: Port to Plant
          - button [ref=e64] [cursor=pointer]:
            - img [ref=e66]
            - text: Close
        - generic [ref=e71]:
          - generic [ref=e72]:
            - img [ref=e73]
            - heading [level=6] [ref=e75]: Rail Overview
            - generic [ref=e76]: Mine to Port
            - generic [ref=e77]:
              - button [ref=e78] [cursor=pointer]:
                - img [ref=e80]
                - text: Pending 8
              - button [ref=e82] [cursor=pointer]:
                - img [ref=e84]
                - text: Completed 8
          - generic [ref=e88]:
            - textbox [ref=e89]:
              - /placeholder: Search rake, party, RR...
            - group
          - button [ref=e91] [cursor=pointer]:
            - img [ref=e93]
            - text: New Rail
        - generic [ref=e96]:
          - generic [ref=e97]:
            - button [ref=e98] [cursor=pointer]:
              - img [ref=e100]
              - text: Excel
            - button [ref=e102] [cursor=pointer]:
              - img [ref=e104]
              - text: PDF
            - img [ref=e106]
          - grid [ref=e108]:
            - row [ref=e109]:
              - columnheader [ref=e110]:
                - generic [ref=e112]: Actions
              - columnheader [ref=e113] [cursor=pointer]:
                - generic [ref=e115]:
                  - generic [ref=e116]: Rake ID
                  - generic [ref=e118]:
                    - textbox [ref=e119]
                    - group
              - columnheader [ref=e120] [cursor=pointer]:
                - generic [ref=e122]:
                  - generic [ref=e123]: Party
                  - generic [ref=e125]:
                    - textbox [ref=e126]
                    - group
              - columnheader [ref=e127] [cursor=pointer]:
                - generic [ref=e129]:
                  - generic [ref=e130]: Date of Loading
                  - generic [ref=e132]:
                    - textbox [ref=e133]
                    - group
              - columnheader [ref=e134] [cursor=pointer]:
                - generic [ref=e136]:
                  - generic [ref=e137]: Contract No
                  - generic [ref=e139]:
                    - textbox [ref=e140]
                    - group
              - columnheader [ref=e141] [cursor=pointer]:
                - generic [ref=e143]:
                  - generic [ref=e144]: RR No
                  - generic [ref=e146]:
                    - textbox [ref=e147]
                    - group
              - columnheader [ref=e148] [cursor=pointer]:
                - generic [ref=e150]:
                  - generic [ref=e151]: From
                  - generic [ref=e153]:
                    - textbox [ref=e154]
                    - group
              - columnheader [ref=e155] [cursor=pointer]:
                - generic [ref=e157]:
                  - generic [ref=e158]: To
                  - generic [ref=e160]:
                    - textbox [ref=e161]
                    - group
              - columnheader [ref=e162] [cursor=pointer]:
                - generic [ref=e164]:
                  - generic [ref=e165]: Type of Wagon
                  - generic [ref=e167]:
                    - textbox [ref=e168]
                    - group
              - columnheader [ref=e169] [cursor=pointer]:
                - generic [ref=e171]:
                  - generic [ref=e172]: No. of Wagons
                  - generic [ref=e174]:
                    - textbox [ref=e175]
                    - group
              - columnheader [ref=e176] [cursor=pointer]:
                - generic [ref=e178]:
                  - generic [ref=e179]: Total Quantity
                  - generic [ref=e181]:
                    - textbox [ref=e182]
                    - group
            - rowgroup [ref=e183]:
              - row [ref=e184]:
                - gridcell [ref=e185]:
                  - generic [ref=e186]:
                    - button [ref=e187] [cursor=pointer]:
                      - img [ref=e188]
                    - button [ref=e190] [cursor=pointer]:
                      - img [ref=e191]
                - gridcell [ref=e194]:
                  - generic [ref=e195]: RRR1
                - gridcell [ref=e196]:
                  - generic [ref=e197]: APPDCL
                - gridcell [ref=e198]:
                  - generic [ref=e199]: 24-06-2026
                - gridcell [ref=e200]: CONTR/2025-26/333
                - gridcell [ref=e201]:
                  - generic [ref=e202]: "567890"
                - gridcell [ref=e203]: Talcher
                - gridcell [ref=e204]: Paradip Port
                - gridcell [ref=e205]: BOBRN
                - gridcell [ref=e206]: "-"
                - gridcell [ref=e207]: "-"
              - row [ref=e208]:
                - gridcell [ref=e209]:
                  - generic [ref=e210]:
                    - button [ref=e211] [cursor=pointer]:
                      - img [ref=e212]
                    - button [ref=e214] [cursor=pointer]:
                      - img [ref=e215]
                - gridcell [ref=e218]:
                  - generic [ref=e219]: TEST INV
                - gridcell [ref=e220]:
                  - generic [ref=e221]: APPDCL
                - gridcell [ref=e222]:
                  - generic [ref=e223]: 19-06-2026
                - gridcell [ref=e224]: CONTR/2025-26/340
                - gridcell [ref=e225]:
                  - generic [ref=e226]: "-"
                - gridcell [ref=e227]: Bayyavaram
                - gridcell [ref=e228]: DHAMRA
                - gridcell [ref=e229]: BOXN
                - gridcell [ref=e230]: "-"
                - gridcell [ref=e231]: "-"
              - row [ref=e232]:
                - gridcell [ref=e233]:
                  - generic [ref=e234]:
                    - button [ref=e235] [cursor=pointer]:
                      - img [ref=e236]
                    - button [ref=e238] [cursor=pointer]:
                      - img [ref=e239]
                - gridcell [ref=e242]:
                  - generic [ref=e243]: "324567"
                - gridcell [ref=e244]:
                  - generic [ref=e245]: APPDCL
                - gridcell [ref=e246]:
                  - generic [ref=e247]: 16-06-2026
                - gridcell [ref=e248]: CONTR/2025-26/340
                - gridcell [ref=e249]:
                  - generic [ref=e250]: "-"
                - gridcell [ref=e251]: KAKINADA PORT
                - gridcell [ref=e252]: RTG
                - gridcell [ref=e253]: BOXDATA
                - gridcell [ref=e254]: "-"
                - gridcell [ref=e255]: "-"
              - row [ref=e256]:
                - gridcell [ref=e257]:
                  - generic [ref=e258]:
                    - button [ref=e259] [cursor=pointer]:
                      - img [ref=e260]
                    - button [ref=e262] [cursor=pointer]:
                      - img [ref=e263]
                - gridcell [ref=e266]:
                  - generic [ref=e267]: DERF
                - gridcell [ref=e268]:
                  - generic [ref=e269]: APPDCL
                - gridcell [ref=e270]:
                  - generic [ref=e271]: 25-05-2026
                - gridcell [ref=e272]: CONTR/2015-16/314
                - gridcell [ref=e273]:
                  - generic [ref=e274]: 4567981, 4567982
                - gridcell [ref=e275]: Talcher Mine
                - gridcell [ref=e276]: Paradip Port
                - gridcell [ref=e277]: BOXN
                - gridcell [ref=e278]: "-"
                - gridcell [ref=e279]: "-"
              - row [ref=e280]:
                - gridcell [ref=e281]:
                  - generic [ref=e282]:
                    - button [ref=e283] [cursor=pointer]:
                      - img [ref=e284]
                    - button [ref=e286] [cursor=pointer]:
                      - img [ref=e287]
                - gridcell [ref=e290]:
                  - generic [ref=e291]: RTFE2
                - gridcell [ref=e292]:
                  - generic [ref=e293]: APPDCL
                - gridcell [ref=e294]:
                  - generic [ref=e295]: 25-05-2026
                - gridcell [ref=e296]: CONTR/2015-16/314
                - gridcell [ref=e297]:
                  - generic [ref=e298]: 34568, 654323
                - gridcell [ref=e299]: Talcher Mine
                - gridcell [ref=e300]: Paradip Port
                - gridcell [ref=e301]: BOXN
                - gridcell [ref=e302]: "-"
                - gridcell [ref=e303]: "-"
          - generic [ref=e308]:
            - paragraph [ref=e309]: "Rows per page:"
            - generic [ref=e310]:
              - combobox [ref=e311] [cursor=pointer]: "5"
              - textbox: "5"
              - img
            - paragraph [ref=e312]: 1–5 of 8
            - generic [ref=e313]:
              - button [disabled]:
                - img
              - button [ref=e314] [cursor=pointer]:
                - img [ref=e315]
      - banner [ref=e317]:
        - link [ref=e320] [cursor=pointer]:
          - /url: "#"
          - text: © 2026 Infyz Solutions
  - generic: Select Language
  - generic [ref=e321]: "150"
  - img [ref=e324]
  - generic [ref=e329]:
    - heading [level=6] [ref=e330]: New Rail Creation - Mine-Port
    - button [ref=e331] [cursor=pointer]:
      - img [ref=e332]
    - generic [ref=e334]:
      - generic [ref=e336]:
        - generic: Indent No
        - generic [ref=e337]:
          - textbox [disabled] [ref=e338]
          - group:
            - generic: Indent No
        - paragraph [ref=e339]: Auto-generated
      - generic [ref=e341]:
        - generic [ref=e342]:
          - text: Rake ID
          - generic [ref=e343]: "*"
        - generic [ref=e344]:
          - textbox [ref=e345]: RAKE1783081178629
          - group:
            - generic: Rake ID *
      - generic [ref=e347]:
        - generic [ref=e348]:
          - text: Contract No
          - generic [ref=e349]: "*"
        - generic [ref=e350]:
          - combobox [expanded] [ref=e351] [cursor=pointer]
          - textbox
          - img
          - group:
            - generic: Contract No *
      - generic [ref=e353]:
        - generic [ref=e354]: Party
        - generic [ref=e355]:
          - combobox [disabled] [ref=e356]: APPDCL
          - textbox [disabled]: APPDCL
          - img
          - group:
            - generic: Party
      - generic [ref=e358]:
        - generic:
          - text: Type of Wagon
          - generic: "*"
        - generic [ref=e359]:
          - combobox [ref=e360] [cursor=pointer]
          - textbox
          - img
          - group:
            - generic: Type of Wagon *
      - generic [ref=e362]:
        - generic:
          - text: No. of Wagons
          - generic: "*"
        - generic [ref=e363]:
          - textbox [ref=e364]
          - group:
            - generic: No. of Wagons *
      - generic [ref=e366]:
        - generic: Sick Wagons
        - generic [ref=e367]:
          - textbox [ref=e368]
          - group:
            - generic: Sick Wagons
      - generic [ref=e370]:
        - generic: Washery Name
        - generic [ref=e371]:
          - textbox [ref=e372]
          - group:
            - generic: Washery Name
      - generic [ref=e374]:
        - generic:
          - text: Load Operation Type
          - generic: "*"
        - generic [ref=e375]:
          - combobox [ref=e376] [cursor=pointer]
          - textbox
          - img
          - group:
            - generic: Load Operation Type *
      - generic [ref=e378]:
        - generic:
          - text: From Location
          - generic: "*"
        - generic [ref=e379]:
          - combobox [ref=e380] [cursor=pointer]
          - textbox
          - img
          - group:
            - generic: From Location *
      - generic [ref=e382]:
        - generic:
          - text: To Location
          - generic: "*"
        - generic [ref=e383]:
          - combobox [ref=e384] [cursor=pointer]
          - textbox
          - img
          - group:
            - generic: To Location *
      - generic [ref=e386]:
        - generic:
          - text: Date of Loading
          - generic: "*"
        - generic [ref=e387]:
          - textbox [ref=e388]:
            - /placeholder: DD-MM-YYYY
          - button [ref=e390] [cursor=pointer]:
            - img [ref=e391]
          - group:
            - generic: Date of Loading *
        - paragraph [ref=e393]
    - generic [ref=e394]:
      - button [ref=e395] [cursor=pointer]:
        - img [ref=e397]
        - text: Save
      - button [ref=e399] [cursor=pointer]:
        - img [ref=e401]
        - text: Cancel
  - listbox "Contract No *" [ref=e405]:
    - option "CONTR/2025-26/340" [active] [ref=e406] [cursor=pointer]
    - option "CONTR/2025-26/333" [ref=e407] [cursor=pointer]
    - option "CONTR/2015-16/314" [ref=e408] [cursor=pointer]
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
  22  |     .click();
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
> 50  |     .click();
      |      ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
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
  123 |     .getByRole("button", {
  124 |       name: "Save",
  125 |     })
  126 |     .click();
  127 | }
  128 | 
```