import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('desktop nav links are present', async ({ page }) => {
    await page.goto('/en');
    const nav = page.locator('nav[aria-label="Main navigation"]');
    await expect(nav.locator('a:has-text("Home")')).toBeVisible();
    await expect(nav.locator('a:has-text("Projects")')).toBeVisible();
    await expect(nav.locator('a:has-text("Blog")')).toBeVisible();
    await expect(nav.locator('a:has-text("Contact")')).toBeVisible();
  });

  test('navigates to Projects page', async ({ page }) => {
    await page.goto('/en');
    await page.locator('nav a:has-text("Projects")').click();
    await expect(page).toHaveURL(/\/en\/projects/);
  });

  test('navigates to Blog page', async ({ page }) => {
    await page.goto('/en');
    await page.locator('nav a:has-text("Blog")').click();
    await expect(page).toHaveURL(/\/en\/blog/);
  });

  test('mobile menu toggles', async ({ page }) => {
    await page.goto('/en');
    const menuBtn = page.locator('button[aria-label*="menu" i]');
    // Mobile menu button should exist
    await expect(menuBtn).toBeVisible();
    await menuBtn.click();
    // Mobile nav should appear
    await expect(page.locator('#mobile-navigation')).toBeVisible();
  });

  test('footer has aria-label', async ({ page }) => {
    await page.goto('/en');
    const footerNav = page.locator('footer nav[aria-label="Footer navigation"]');
    await expect(footerNav).toBeVisible();
  });
});
