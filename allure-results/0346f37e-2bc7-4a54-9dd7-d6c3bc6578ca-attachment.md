# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin\admin-master-creation.spec.ts >> Machinery: new machinery type persists in the grid
- Location: tests\admin\admin-master-creation.spec.ts:120:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('grid')
Expected substring: "AT1783081036466"
Received string:    "ActionsCode​Group​Description​Status​No rows"
Timeout: 10000ms

Call log:
  - Expect "toContainText" with timeout 10000ms
  - waiting for getByRole('grid')
    23 × locator resolved to <div role="grid" tabindex="-1" aria-colcount="5" aria-rowcount="1" aria-multiselectable="false" class="MuiDataGrid-main css-1rcz4kn">…</div>
       - unexpected value "ActionsCode​Group​Description​Status​No rows"

```

```yaml
- grid:
  - row "Actions Code Group Description Status":
    - columnheader "Actions"
    - columnheader "Code":
      - text: Code
      - textbox
    - columnheader "Group":
      - text: Group
      - textbox
    - columnheader "Description":
      - text: Description
      - textbox
    - columnheader "Status":
      - text: Status
      - textbox
  - text: No rows
  - rowgroup
```

# Test source

```ts
  36  |   await expect(page.getByRole("grid")).toContainText(code);
  37  | });
  38  | 
  39  | test("Tanker Type: new tanker type persists in the grid", async ({ page }) => {
  40  |   const code = `AT${Date.now()}`;
  41  |   await openAdminScreens(page);
  42  |   await openMasterScreen(page, "Tanker Type");
  43  |   await openNewRecordForm(page);
  44  |   await createAdminRecord(page, [{ label: "Tanker Type", value: code }]);
  45  |   await searchAdminGrid(page, code);
  46  |   await expect(page.getByRole("grid")).toContainText(code);
  47  | });
  48  | 
  49  | test("Locations: new location persists in the grid", async ({ page }) => {
  50  |   const code = `AT${Date.now()}`;
  51  |   await openAdminScreens(page);
  52  |   await openMasterScreen(page, "Locations");
  53  |   await openNewRecordForm(page);
  54  |   await createAdminRecord(page, [
  55  |     { label: "Location Code", value: code },
  56  |     { label: "Location Abbr", value: code.slice(-8) },
  57  |     { label: "Location Name", value: `AUTOTEST-${code}` },
  58  |     { label: "Location Type", kind: "combobox" },
  59  |     { label: "Country", kind: "combobox" },
  60  |   ]);
  61  |   await searchAdminGrid(page, code);
  62  |   await expect(page.getByRole("grid")).toContainText(code);
  63  | });
  64  | 
  65  | test("Sub location: new sub-location persists in the grid", async ({ page }) => {
  66  |   const code = `AT${Date.now()}`;
  67  |   await openAdminScreens(page);
  68  |   await openMasterScreen(page, "Sub location");
  69  |   await openNewRecordForm(page);
  70  |   await createAdminRecord(page, [
  71  |     { label: "Code", value: code },
  72  |     { label: "Description", value: `AUTOTEST-${code}` },
  73  |     { label: "Location", kind: "combobox" },
  74  |   ]);
  75  |   await searchAdminGrid(page, code);
  76  |   await expect(page.getByRole("grid")).toContainText(code);
  77  | });
  78  | 
  79  | test("Subsidiary: new subsidiary persists in the grid", async ({ page }) => {
  80  |   const code = `AT${Date.now()}`;
  81  |   await openAdminScreens(page);
  82  |   await openMasterScreen(page, "Subsidiary");
  83  |   await openNewRecordForm(page);
  84  |   await createAdminRecord(page, [
  85  |     { label: "Name", value: `AUTOTEST-${code}` },
  86  |     { label: "Code", value: code },
  87  |     { label: "Description", value: `AUTOTEST-${code}` },
  88  |   ]);
  89  |   await searchAdminGrid(page, code);
  90  |   await expect(page.getByRole("grid")).toContainText(code);
  91  | });
  92  | 
  93  | test("Berth: new berth persists in the grid", async ({ page }) => {
  94  |   const code = `AT${Date.now()}`;
  95  |   await openAdminScreens(page);
  96  |   await openMasterScreen(page, "Berth");
  97  |   await openNewRecordForm(page);
  98  |   await createAdminRecord(page, [
  99  |     { label: "Berth Number", value: code },
  100 |     { label: "Measurement Type", kind: "combobox" },
  101 |     { label: "Description", value: `AUTOTEST-${code}` },
  102 |   ]);
  103 |   await searchAdminGrid(page, code);
  104 |   await expect(page.getByRole("grid")).toContainText(code);
  105 | });
  106 | 
  107 | test("Equipment: new equipment type persists in the grid", async ({ page }) => {
  108 |   const code = `AT${Date.now()}`;
  109 |   await openAdminScreens(page);
  110 |   await openMasterScreen(page, "Equipment");
  111 |   await openNewRecordForm(page);
  112 |   await createAdminRecord(page, [
  113 |     { label: "Code", value: code },
  114 |     { label: "Description", value: `AUTOTEST-${code}` },
  115 |   ]);
  116 |   await searchAdminGrid(page, code);
  117 |   await expect(page.getByRole("grid")).toContainText(code);
  118 | });
  119 | 
  120 | test("Machinery: new machinery type persists in the grid", async ({ page }) => {
  121 |   // Known bug (found 2026-07-03): the "New" form shows a "Created successfully"
  122 |   // toast, but the record never actually persists (confirmed via fresh reload +
  123 |   // search: count stays unchanged, new code not found). Kept as an expected
  124 |   // failure so this alerts loudly the moment the backend actually fixes it.
  125 |   test.fail();
  126 |   const code = `AT${Date.now()}`;
  127 |   await openAdminScreens(page);
  128 |   await openMasterScreen(page, "Machinery");
  129 |   await openNewRecordForm(page);
  130 |   await createAdminRecord(page, [
  131 |     { label: "Code", value: code },
  132 |     { label: "Group", kind: "combobox" },
  133 |     { label: "Description", value: `AUTOTEST-${code}` },
  134 |   ]);
  135 |   await searchAdminGrid(page, code);
> 136 |   await expect(page.getByRole("grid")).toContainText(code);
      |                                        ^ Error: expect(locator).toContainText(expected) failed
  137 | });
  138 | 
```