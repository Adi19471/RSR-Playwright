# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fake-api.spec.ts >> API  tets GET
- Location: tests\fake-api.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | 
  3  | 
  4  | test("API  tets GET",async({request}) =>{
  5  | 
  6  |     const response = await request.get("https://reqres.in/api/users?page=2");
> 7  |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  8  | 
  9  |     const body = await response.json();
  10 |     console.log(body)
  11 |     expect(body.lenght).toBeGreaterThan(0);
  12 | 
  13 | })
  14 | 
```