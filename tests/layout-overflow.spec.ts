import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { expect, type Page, test } from "@playwright/test";

type OverflowIssue = {
  className: string;
  clientWidth: number;
  scrollWidth: number;
  selector: string;
  tagName: string;
  text: string;
};

const screenshotDir = "qa/screenshots/playwright";

const pages = [
  { name: "home-en", path: "/en/" },
  { name: "casting-en", path: "/en/casting/" },
  { name: "services-en", path: "/en/services/" },
  { name: "camera-confidence-en", path: "/en/services/camera-confidence/" },
  { name: "contact-en", path: "/en/contact/" },
  { name: "home-sk", path: "/sk/" }
];

const viewports = [
  { name: "desktop", width: 1366, height: 900 },
  { name: "mobile", width: 390, height: 844 }
];

test.beforeAll(() => {
  mkdirSync(screenshotDir, { recursive: true });
});

for (const pageInfo of pages) {
  for (const viewport of viewports) {
    test(`no clipped chips or text overflow: ${pageInfo.name} ${viewport.name}`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(pageInfo.path);

      const screenshotPath = join(screenshotDir, `${pageInfo.name}-${viewport.name}.png`);
      await page.screenshot({ fullPage: false, path: screenshotPath });
      await testInfo.attach(`${pageInfo.name}-${viewport.name}`, {
        contentType: "image/png",
        path: screenshotPath
      });

      await expectNoDocumentOverflow(page);
      expect(await collectChipOverflowIssues(page)).toEqual([]);
      expect(await collectTextOverflowIssues(page)).toEqual([]);

      const dialogAnalysis = await collectDialogAnalysisOverflowIssues(page);
      if (dialogAnalysis.present) {
        expect(dialogAnalysis.issues).toEqual([]);
      } else {
        testInfo.annotations.push({
          description: 'Target block "Разбор диалога" is not present on this route yet.',
          type: "note"
        });
      }
    });
  }
}

async function expectNoDocumentOverflow(page: Page) {
  const documentMetrics = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));

  expect(documentMetrics.scrollWidth).toBeLessThanOrEqual(documentMetrics.clientWidth + 1);
}

async function collectChipOverflowIssues(page: Page) {
  return collectOverflowIssues(page, "chips");
}

async function collectTextOverflowIssues(page: Page) {
  return collectOverflowIssues(page, "text");
}

async function collectDialogAnalysisOverflowIssues(page: Page): Promise<{ issues: OverflowIssue[]; present: boolean }> {
  return page.evaluate(() => {
    function collectOverflowIssues(elements: Element[]): OverflowIssue[] {
      return elements
        .filter((element) => isVisible(element as HTMLElement))
        .filter((element) => {
          const htmlElement = element as HTMLElement;
          const style = getComputedStyle(htmlElement);
          const allowsOwnScroll = style.overflowX === "auto" || style.overflowX === "scroll";

          return !allowsOwnScroll && htmlElement.scrollWidth > htmlElement.clientWidth + 1;
        })
        .map((element) => describeOverflowIssue(element as HTMLElement));
    }

    function describeElement(element: HTMLElement) {
      if (element.id) {
        return `#${element.id}`;
      }

      const className = element.className.toString().trim().split(/\s+/).filter(Boolean).slice(0, 3).join(".");
      return className ? `${element.tagName.toLowerCase()}.${className}` : element.tagName.toLowerCase();
    }

    function describeOverflowIssue(element: HTMLElement) {
      return {
        className: element.className.toString(),
        clientWidth: element.clientWidth,
        scrollWidth: element.scrollWidth,
        selector: describeElement(element),
        tagName: element.tagName.toLowerCase(),
        text: (element.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 140)
      };
    }

    function isVisible(element: HTMLElement) {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);

      return rect.width > 0 && rect.height > 0 && style.display !== "none" && style.visibility !== "hidden";
    }

    const roots = Array.from(document.querySelectorAll("article, section, div"))
      .filter((element) => element.textContent?.includes("Разбор диалога"))
      .sort((left, right) => (left.textContent?.length ?? 0) - (right.textContent?.length ?? 0));

    const root = roots[0];
    if (!root) {
      return { issues: [], present: false };
    }

    return {
      issues: collectOverflowIssues(Array.from(root.querySelectorAll("*"))),
      present: true
    };
  });
}

function collectOverflowIssues(page: Page, mode: "chips" | "text") {
  return page.evaluate((collectionMode) => {
    function collectOverflowIssues(elements: Element[]): OverflowIssue[] {
      return elements
        .filter((element) => isVisible(element as HTMLElement))
        .filter((element) => {
          const htmlElement = element as HTMLElement;
          const style = getComputedStyle(htmlElement);
          const allowsOwnScroll = style.overflowX === "auto" || style.overflowX === "scroll";

          return !allowsOwnScroll && htmlElement.scrollWidth > htmlElement.clientWidth + 1;
        })
        .map((element) => describeOverflowIssue(element as HTMLElement));
    }

    function describeElement(element: HTMLElement) {
      if (element.id) {
        return `#${element.id}`;
      }

      const className = element.className.toString().trim().split(/\s+/).filter(Boolean).slice(0, 3).join(".");
      return className ? `${element.tagName.toLowerCase()}.${className}` : element.tagName.toLowerCase();
    }

    function describeOverflowIssue(element: HTMLElement) {
      return {
        className: element.className.toString(),
        clientWidth: element.clientWidth,
        scrollWidth: element.scrollWidth,
        selector: describeElement(element),
        tagName: element.tagName.toLowerCase(),
        text: (element.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 140)
      };
    }

    function isVisible(element: HTMLElement) {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);

      return rect.width > 0 && rect.height > 0 && style.display !== "none" && style.visibility !== "hidden";
    }

    if (collectionMode === "chips") {
      const selectors = [
        ".button",
        ".card-kicker",
        ".contact-topic",
        ".eyebrow",
        ".hero-proof",
        ".masterclass-status",
        ".quick-strip span",
        "[class*='badge']",
        "[class*='chip']",
        "[class*='pill']",
        "[class*='tag']"
      ].join(",");

      return collectOverflowIssues(Array.from(document.querySelectorAll(selectors)));
    }

    const textTags = new Set(["A", "BUTTON", "DD", "DT", "H1", "H2", "H3", "H4", "LABEL", "LI", "P", "SPAN", "STRONG"]);
    const candidates = Array.from(document.querySelectorAll("*")).filter((element) => {
      const htmlElement = element as HTMLElement;
      const hasOwnText = Array.from(htmlElement.childNodes).some(
        (node) => node.nodeType === Node.TEXT_NODE && Boolean(node.textContent?.trim())
      );

      return textTags.has(htmlElement.tagName) || hasOwnText;
    });

    return collectOverflowIssues(candidates);
  }, mode);
}
