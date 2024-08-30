import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "EMN",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "no-NB",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Shantell Sans",
        body: "Shantell Sans",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f7e6de",
          lightgray: "#eabea9",
          gray: "#502700",
          darkgray: "#291400",
          dark: "#291400",
          secondary: "#fc5d00",
          tertiary: "#fcb105",
          highlight: "rgba(252, 177, 5, 0.15)",
          textHighlight: "#fcb10588",
        },
        darkMode: {
          light: "#331900",
          lightgray: "#502700",
          gray: "#f7e6de",
          darkgray: "#eabea9",
          dark: "#f0d1c2",
          secondary: "#fc5d00",
          tertiary: "#fcb105",
          highlight: "rgba(252, 177, 5, 0.15)",
          textHighlight: "#fcb10588",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
        externalLinkIcon: false,
        openLinksInNewTab: true,
      }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
