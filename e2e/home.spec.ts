import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads successfully in English', async ({ page }) => {
    await page.goto('/en');
    await expect(page).toHaveTitle(/Chaowalit/);
    // Hero section visible
    await expect(page.locator('#hero')).toBeVisible();
  });

  test('has all major sections', async ({ page }) => {
    await page.goto('/en');
    // Keep the homepage focused on identity, work, writing, and contact.
    const sections = ['#hero', '#about', '#projects', '#blog', '#contact'];
    for (const id of sections) {
      await expect(page.locator(id)).toBeVisible();
    }

    for (const removedSection of ['#atlas', '#business', '#testimonials', '#newsletter']) {
      await expect(page.locator(removedSection)).toHaveCount(0);
    }
  });

  test('skip-to-content link works', async ({ page }) => {
    await page.goto('/en');
    const skipLink = page.locator('a.sr-only:has-text("Skip to content")');
    await skipLink.focus();
    await expect(skipLink).toBeVisible();
  });

  test('navigation has aria-label', async ({ page }) => {
    await page.goto('/en');
    const nav = page.locator('nav[aria-label="Main navigation"]');
    await expect(nav).toBeVisible();
  });

  test('main content has correct id', async ({ page }) => {
    await page.goto('/en');
    await expect(page.locator('main#main-content')).toBeVisible();
  });
});
