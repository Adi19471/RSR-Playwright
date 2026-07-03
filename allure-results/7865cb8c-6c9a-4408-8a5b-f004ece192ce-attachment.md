# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fake-api.spec.ts >> API  tets GET
- Location: tests\fake-api.spec.ts:3:5

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Matcher error: received value must be a number or bigint

Received has value: undefined
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("API  tets GET", async ({ request }) => {
  4  |   const response = await request.get(
  5  |     "https://jsonplaceholder.typicode.com/users",
  6  |   );
  7  |   expect(response.status()).toBe(200);
  8  | 
  9  |   const body = await response.json();
  10 |  
> 11 |   expect(body.lenght).toBeGreaterThan(0);
     |                       ^ Error: expect(received).toBeGreaterThan(expected)
  12 |   expect(body[0].name).toBeDefined();
  13 |   
  14 | 
  15 | });
  16 | 
```