// @ts-check
<<<<<<< HEAD
// eslint-disable-next-line @typescript-eslint/no-var-requires
const lightCodeTheme = require('prism-react-renderer/themes/github');
// eslint-disable-next-line @typescript-eslint/no-var-requires
=======
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
>>>>>>> 878cc89 (initialized Docusaurus)
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
<<<<<<< HEAD
  title: 'Writebot',
  tagline: 'OpenAI text generation abstraction.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/writebot/',
=======
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
>>>>>>> 878cc89 (initialized Docusaurus)
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
<<<<<<< HEAD
  organizationName: 'samyosm', // Usually your GitHub org/username.
  projectName: 'writebot', // Usually your repo name.
=======
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
>>>>>>> 878cc89 (initialized Docusaurus)

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
<<<<<<< HEAD
    locales: ['en']
=======
    locales: ['en'],
>>>>>>> 878cc89 (initialized Docusaurus)
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
<<<<<<< HEAD
            'https://github.com/samyosm/writebot/tree/main/apps/docs'
=======
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
>>>>>>> 878cc89 (initialized Docusaurus)
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
<<<<<<< HEAD
            'https://github.com/samyosm/writebot/tree/main/apps/docs'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
=======
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
>>>>>>> 878cc89 (initialized Docusaurus)
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
<<<<<<< HEAD
        title: 'Writebot',
/*        logo: {
          alt: 'Writebot',
          src: 'img/logo.svg'
        },*/
=======
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
>>>>>>> 878cc89 (initialized Docusaurus)
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
<<<<<<< HEAD
            label: 'Tutorial'
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/samyosm/writebot',
            label: 'GitHub',
            position: 'right'
          }
        ]
=======
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
>>>>>>> 878cc89 (initialized Docusaurus)
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
<<<<<<< HEAD
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
=======
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
>>>>>>> 878cc89 (initialized Docusaurus)
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
<<<<<<< HEAD
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
=======
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
>>>>>>> 878cc89 (initialized Docusaurus)
};

module.exports = config;
