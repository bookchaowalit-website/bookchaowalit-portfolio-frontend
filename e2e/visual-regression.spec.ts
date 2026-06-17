import { test, expect } from '@playwright/test';

// Visual regression baseline screenshots
// Run with: npx playwright test --update-snapshots
// These capture key page states for visual comparison

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 812 },
];

for (const vp of viewports) {
  test.describe(`${vp.name} viewport`, () => {
    test.use({ viewport: { width: vp.width, height: vp.height } });

    test('homepage hero section', async ({ page }) => {
      await page.goto('/en');
      await page.waitForLoadState('networkidle');
      const hero = page.locator('#hero');
      await expect(hero).toBeVisible();
      await expect(hero).toHaveScreenshot(`hero-${vp.name}.png`, {
        maxDiffPixelRatio: 0.02,
      });
    });

    test('homepage full page', async ({ page }) => {
      await page.goto('/en');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot(`home-full-${vp.name}.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.01,
      });
    });

    test('projects page', async ({ page }) => {
      await page.goto('/en/projects');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot(`projects-${vp.name}.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.01,
      });
    });

    test('blog page', async ({ page }) => {
      await page.goto('/en/blog');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot(`blog-${vp.name}.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.01,
      });
    });

    test('contact page', async ({ page }) => {
      await page.goto('/en/contact');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot(`contact-${vp.name}.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.01,
      });
    });

    test('dark mode homepage', async ({ page }) => {
      await page.goto('/en');
      await page.waitForLoadState('networkidle');
      // Toggle dark mode via localStorage
      await page.evaluate(() => {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
      });
      await page.waitForTimeout(300);
      await expect(page).toHaveScreenshot(`home-dark-${vp.name}.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.01,
      });
    });
  });
}
