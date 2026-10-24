
import { test, expect } from '@playwright/test';

test('Test 1 - Verify page title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('Test 2 - Verify Get Started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(
    page.getByRole('link', { name: 'Get started' })
  ).toBeVisible();
});

test('Test 3 - Verify documentation page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL(/.*intro/);
});
