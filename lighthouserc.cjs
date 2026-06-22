module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      settings: {
        chromeFlags: "--headless=new --no-sandbox --disable-dev-shm-usage",
        preset: "desktop"
      },
      staticDistDir: "./dist",
      staticServerPort: 4174,
      url: [
        "http://127.0.0.1:4174/en/",
        "http://127.0.0.1:4174/en/casting/",
        "http://127.0.0.1:4174/en/services/",
        "http://127.0.0.1:4174/en/services/camera-confidence/",
        "http://127.0.0.1:4174/en/contact/"
      ]
    },
    assert: {
      assertions: {
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.85 }],
        "categories:performance": ["warn", { minScore: 0.55 }],
        "categories:seo": ["error", { minScore: 0.9 }]
      }
    },
    upload: {
      outputDir: "./qa/lighthouse",
      target: "filesystem"
    }
  }
};
