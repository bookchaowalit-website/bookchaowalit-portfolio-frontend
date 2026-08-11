import { test, expect } from "@playwright/test";

/**
 * Keyboard-only checks for help dialog Escape / focus return.
 * Desktop project only — help trigger is md+ visible.
 */
test.describe("Help dialog keyboard", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("opens from toolbar, Escape closes, focus returns to trigger", async ({
    page,
  }) => {
    await page.goto("/en");

    const trigger = page.getByRole("button", {
      name: /keyboard shortcuts help/i,
    });
    await expect(trigger).toBeVisible();
    await trigger.click();

    const dialog = page.getByRole("dialog", {
      name: /keyboard shortcuts and help/i,
    });
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveAttribute("data-help-dialog", "true");

    // Escape must close (wait until detached/hidden — not mid-exit animation only)
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden({ timeout: 3000 });

    // Focus should return to the ? trigger for keyboard continuity
    await expect(trigger).toBeFocused({ timeout: 2000 });
  });

  test("close button also dismisses dialog", async ({ page }) => {
    await page.goto("/en");
    await page.getByRole("button", { name: /keyboard shortcuts help/i }).click();
    const dialog = page.getByRole("dialog", {
      name: /keyboard shortcuts and help/i,
    });
    await expect(dialog).toBeVisible();
    await page.getByRole("button", { name: /close help dialog/i }).click();
    await expect(dialog).toBeHidden({ timeout: 3000 });
  });
});
