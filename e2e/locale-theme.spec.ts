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
    await expect(jsonLd.first()).toBeAttached();
    // Multiple JSON-LD blocks may exist; assert any graph mentions Person.
    const contents = await jsonLd.allTextContents();
    const joined = contents.join('\n');
    expect(joined).toMatch(/"@type"\s*:\s*"Person"/);
    expect(joined).toContain('Chaowalit Greepoke');
  });
});


test.describe('Theme Toggle', () => {
  test('theme toggle button exists', async ({ page }) => {
    await page.goto('/en');
    const toggle = page.getByRole('button', { name: /switch to (dark|light) mode/i });
    await expect(toggle).toBeVisible();
  });

  test('toggling theme adds dark class', async ({ page }) => {
    await page.goto('/en');
    // Ensure we start from light if possible, then switch to dark.
    const toDark = page.getByRole('button', { name: /switch to dark mode/i });
    const toLight = page.getByRole('button', { name: /switch to light mode/i });
    if (await toLight.isVisible().catch(() => false)) {
      await toLight.click();
    }
    await expect(toDark).toBeVisible();
    await toDark.click();
    await expect(page.locator('html')).toHaveClass(/dark/);
  });
});
