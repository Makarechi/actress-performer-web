import { expect, test } from "@playwright/test";

const homePages = [
  { path: "/en/", video: "/video/backdrops/english.mp4" },
  { path: "/sk/", video: "/video/backdrops/slovak.mp4" }
];

for (const homePage of homePages) {
  test(`commercial home hero video is present: ${homePage.path}`, async ({ page }) => {
    await page.goto(homePage.path);

    const video = page.locator(".commercial-hero.has-video .hero-video-backdrop video");

    await expect(video).toBeVisible();
    expect(await video.locator("source").getAttribute("src")).toContain(homePage.video);

    await page.waitForFunction(() => {
      const heroVideo = document.querySelector(".commercial-hero.has-video .hero-video-backdrop video");

      return (
        heroVideo instanceof HTMLVideoElement &&
        heroVideo.readyState >= HTMLMediaElement.HAVE_METADATA &&
        heroVideo.videoWidth > 0 &&
        heroVideo.videoHeight > 0
      );
    });

    const mediaState = await video.evaluate((element: HTMLVideoElement) => ({
      currentSrc: element.currentSrc,
      muted: element.muted,
      playsInline: element.playsInline
    }));

    expect(mediaState.currentSrc).toContain(homePage.video);
    expect(mediaState.muted).toBe(true);
    expect(mediaState.playsInline).toBe(true);
  });
}
