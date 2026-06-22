import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const pages = [
  { name: "home", path: "/en/" },
  { name: "casting", path: "/en/casting/" },
  { name: "services", path: "/en/services/" },
  { name: "camera confidence", path: "/en/services/camera-confidence/" },
  { name: "contact", path: "/en/contact/" }
];

for (const pageInfo of pages) {
  test(`axe accessibility scan: ${pageInfo.name}`, async ({ page }) => {
    await page.goto(pageInfo.path);

    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();

    const violations = results.violations.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      help: violation.help,
      nodes: violation.nodes.map((node) => node.target)
    }));

    expect(violations).toEqual([]);
  });
}
