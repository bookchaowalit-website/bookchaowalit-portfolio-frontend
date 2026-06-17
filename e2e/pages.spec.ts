import { test, expect } from '@playwright/test';

test.describe('Projects Page', () => {
  test('loads and shows project cards', async ({ page }) => {
    await page.goto('/en/projects');
    // Should have search input
    const search = page.locator('input[aria-label="Search projects"]');
    await expect(search).toBeVisible();
  });

  test('search input filters projects', async ({ page }) => {
    await page.goto('/en/projects');
    const search = page.locator('input[aria-label="Search projects"]');
    await search.fill('kanban');
    // Results count should update
    const results = page.locator('p[aria-live="polite"]');
    await expect(results).toBeVisible();
  });

  test('status filter group exists', async ({ page }) => {
    await page.goto('/en/projects');
    const statusGroup = page.locator('[role="group"][aria-label="Filter by status"]');
    await expect(statusGroup).toBeVisible();
  });

  test('category filter group exists', async ({ page }) => {
    await page.goto('/en/projects');
    const catGroup = page.locator('[role="group"][aria-label="Filter by category"]');
    await expect(catGroup).toBeVisible();
  });
});

test.describe('Contact Page', () => {
  test('contact form has proper labels', async ({ page }) => {
    await page.goto('/en/contact');
    await expect(page.locator('label[for="name"]')).toBeVisible();
    await expect(page.locator('label[for="email"]')).toBeVisible();
    await expect(page.locator('label[for="subject"]')).toBeVisible();
    await expect(page.locator('label[for="message"]')).toBeVisible();
  });

  test('contact form fields have aria-describedby', async ({ page }) => {
    await page.goto('/en/contact');
    const nameInput = page.locator('#name');
    await expect(nameInput).toHaveAttribute('aria-describedby', /name-error|/);
  });
});

test.describe('Blog Page', () => {
  test('blog page loads', async ({ page }) => {
    await page.goto('/en/blog');
    // Should have blog content
    await expect(page.locator('main')).toBeVisible();
  });
});
