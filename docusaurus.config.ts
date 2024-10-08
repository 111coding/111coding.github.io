import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "111CODING",
  tagline: "111CODING Tech Blog",
  favicon: "img/favicon.ico",

  staticDirectories: ["static"],
  // Set the production url of your site here
  url: "https://111coding.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "111coding", // Usually your GitHub org/user name.
  projectName: "endiliey.github.io", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko"],
  },

  presets: [
    [
      "classic",
      {
        gtag: {
          trackingID: "G-0N2H23GF38",
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },

          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: "datetime",
          changefreq: "daily",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes("/page/"));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content:
          "programming, blog, developer, software, solidity, spring, springboot, flutter, blockchain",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    headTags: [
      // Declare a <link> preconnect tag
      {
        tagName: "link",
        attributes: {
          rel: "preconnect",
          href: "https://111coding.github.io",
        },
      },
      // Declare some json-ld structured data
      {
        tagName: "script",
        attributes: {
          type: "application/ld+json",
        },
        innerHTML: JSON.stringify({
          "@context": "https://111coding.github.io/",
          "@type": "Organization",
          name: "111CODING Tech Blog",
          url: "https://111coding.github.io/",
          logo: "https://111coding.github.io/img/logo-192.png",
        }),
      },
    ],
    // Replace with your project's social card
    colorMode: {
      defaultMode: "dark",
    },
    image: "img/social-card.jpg",
    navbar: {
      title: "111CODING",
      logo: {
        alt: "111CODING",
        src: "img/logo-192.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "AboutMe",
        },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/blog/tags", label: "Tags", position: "left" },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/111coding",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "AboutMe",
              href: "/docs/AboutMe",
            },
          ],
        },
        {
          title: "Blog",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Tags",
              to: "/blog/tags",
            },
          ],
        },

        {
          title: "More",
          items: [
            {
              label: "LinkedIn",
              href: "http://linkedin.com/in/jiwon-lee-mark",
            },
            {
              label: "GitHub",
              href: "https://github.com/111coding",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 111CODING, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
