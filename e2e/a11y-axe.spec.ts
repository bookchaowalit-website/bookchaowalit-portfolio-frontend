import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const ROUTES = ["/en", "/en/about", "/en/projects", "/th"];

test.describe("axe accessibility smoke", () => {
  for (const route of ROUTES) {
    test(`${route} has no critical/serious axe violations`, async ({ page }) => {
      await page.goto(route, { waitUntil: "domcontentloaded" });
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      const blocking = results.violations.filter((v) =>
        ["critical", "serious"].includes(String(v.impact)),
      );

      if (blocking.length > 0) {
        const summary = blocking
          .map(
            (v) =>
              `${v.id} (${v.impact}): ${v.help} — nodes=${v.nodes.length}`,
          )
          .join("\n");
        expect(blocking, summary).toEqual([]);
      }
    });
  }
});
