import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('desktop nav links are present', async ({ page }) => {
    await page.goto('/en');
    const nav = page.locator('nav[aria-label="Main navigation"]');
    // Labels come from next-intl `nav.*` keys (portfolio, not "Projects").
    await expect(nav.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Portfolio' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Blog' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('navigates to Projects page', async ({ page }) => {
    await page.goto('/en');
    await page
      .locator('nav[aria-label="Main navigation"]')
      .getByRole('link', { name: 'Portfolio' })
      .click();
    await expect(page).toHaveURL(/\/en\/projects/);
  });

  test('navigates to Blog page', async ({ page }) => {
    await page.goto('/en');
    await page
      .locator('nav[aria-label="Main navigation"]')
      .getByRole('link', { name: 'Blog' })
      .click();
    await expect(page).toHaveURL(/\/en\/blog/);
  });

  test('footer has aria-label', async ({ page }) => {
    await page.goto('/en');
    const footerNav = page.locator('footer nav[aria-label="Footer navigation"]');
    await expect(footerNav).toBeVisible();
  });
});

test.describe('Navigation (mobile)', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('mobile menu toggles', async ({ page }) => {
    await page.goto('/en');
    const menuBtn = page.getByRole('button', { name: /navigation menu|open menu|close menu/i });
    await expect(menuBtn).toBeVisible();
    await menuBtn.click();
    await expect(page.locator('#mobile-navigation')).toBeVisible();
    await menuBtn.click();
    await expect(page.locator('#mobile-navigation')).toBeHidden();
  });
});
