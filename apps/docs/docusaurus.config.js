// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const lightCodeTheme = require('prism-react-renderer/themes/github');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Writebot',
  tagline: 'OpenAI text generation abstraction.',
  url: 'https://writebot.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'samyosm', // Usually your GitHub org/username.
  projectName: 'writebot', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/samyosm/writebot/tree/main/apps/docs'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/samyosm/writebot/tree/main/apps/docs'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Writebot',
        logo: {
          alt: 'Writebot',
          src: 'img/logo.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial'
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/samyosm/writebot',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro'
              }
            ]
          },
          {
            title: 'Author',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/samy_osmium'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/samyosm/writebot'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Writebot.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
