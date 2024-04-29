import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log("uname: ", process.env.uname);
  console.log("password: ", process.env.password);
});

test('CI  Condition', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const ci = process.env.CI;
  if (ci === '1') {
    console.log("CI value is true:", ci);
  } else {
    console.log("CI value is false:", ci);
  }
});
