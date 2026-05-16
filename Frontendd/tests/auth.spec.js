import { test, expect } from '@playwright/test';

test('user can open login page', async ({ page }) => {
  await page.goto('/login');

  await expect(page).toHaveURL(/login/);
});