import { defineConfig } from "astro/config";

const repoName = "actress-performer-web";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  site: isGitHubPages ? `https://makarechi.github.io/${repoName}` : "https://taisijaboyko.com",
  base: isGitHubPages ? `/${repoName}` : undefined,
  output: "static"
});
