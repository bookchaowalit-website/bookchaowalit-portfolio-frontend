import { test, expect } from '@playwright/test';

test.describe('Locale Switching', () => {
  test('defaults to English', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/\/en/);
  });

  test('Thai locale loads', async ({ page }) => {
    await page.goto('/th');
    await expect(page.locator('html')).toHaveAttribute('lang', 'th');
  });

  test('English locale has correct lang attribute', async ({ page }) => {
    await page.goto('/en');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('JSON-LD structured data is present', async ({ page }) => {
    await page.goto('/en');
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd).toBeAttached();
    const content = await jsonLd.textContent();
    expect(content).toContain('"Person"');
    expect(content).toContain('Chaowalit Greepoke');
  });
});

test.describe('Theme Toggle', () => {
  test('theme toggle button exists', async ({ page }) => {
    await page.goto('/en');
    const toggle = page.locator('button[aria-label*="dark mode" i], button[aria-label*="light mode" i]');
    await expect(toggle).toBeVisible();
  });

  test('toggling theme adds dark class', async ({ page }) => {
    await page.goto('/en');
    const toggle = page.locator('button[aria-label*="dark mode" i]');
    await toggle.click();
    await expect(page.locator('html')).toHaveClass(/dark/);
  });
});
