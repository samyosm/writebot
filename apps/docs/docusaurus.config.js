// @ts-check
<<<<<<< HEAD
<<<<<<< HEAD
// eslint-disable-next-line @typescript-eslint/no-var-requires
const lightCodeTheme = require('prism-react-renderer/themes/github');
// eslint-disable-next-line @typescript-eslint/no-var-requires
=======
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
>>>>>>> 878cc89 (initialized Docusaurus)
=======
// eslint-disable-next-line @typescript-eslint/no-var-requires
const lightCodeTheme = require('prism-react-renderer/themes/github');
// eslint-disable-next-line @typescript-eslint/no-var-requires
>>>>>>> 82b2c6f (Added docs)
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
<<<<<<< HEAD
<<<<<<< HEAD
  title: 'Writebot',
  tagline: 'OpenAI text generation abstraction.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/writebot/',
=======
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
=======
  title: 'Writebot',
  tagline: 'OpenAI text generation abstraction.',
>>>>>>> 82b2c6f (Added docs)
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
>>>>>>> 878cc89 (initialized Docusaurus)
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
<<<<<<< HEAD
<<<<<<< HEAD
  organizationName: 'samyosm', // Usually your GitHub org/username.
  projectName: 'writebot', // Usually your repo name.
=======
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
>>>>>>> 878cc89 (initialized Docusaurus)
=======
  organizationName: 'samyosm', // Usually your GitHub org/username.
  projectName: 'writebot', // Usually your repo name.
>>>>>>> 82b2c6f (Added docs)

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
<<<<<<< HEAD
<<<<<<< HEAD
    locales: ['en']
=======
    locales: ['en'],
>>>>>>> 878cc89 (initialized Docusaurus)
=======
    locales: ['en']
>>>>>>> 82b2c6f (Added docs)
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
<<<<<<< HEAD
            'https://github.com/samyosm/writebot/tree/main/apps/docs'
=======
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
>>>>>>> 878cc89 (initialized Docusaurus)
=======
            'https://github.com/samyosm/writebot/tree/main/apps/docs'
>>>>>>> 82b2c6f (Added docs)
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
<<<<<<< HEAD
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
=======
            'https://github.com/samyosm/writebot/tree/main/apps/docs'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
>>>>>>> 82b2c6f (Added docs)
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 82b2c6f (Added docs)
        title: 'Writebot',
/*        logo: {
          alt: 'Writebot',
          src: 'img/logo.svg'
        },*/
<<<<<<< HEAD
=======
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
>>>>>>> 878cc89 (initialized Docusaurus)
=======
>>>>>>> 82b2c6f (Added docs)
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
<<<<<<< HEAD
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
=======
            label: 'Tutorial'
>>>>>>> 82b2c6f (Added docs)
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/samyosm/writebot',
            label: 'GitHub',
<<<<<<< HEAD
            position: 'right',
          },
        ],
>>>>>>> 878cc89 (initialized Docusaurus)
=======
            position: 'right'
          }
        ]
>>>>>>> 82b2c6f (Added docs)
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
=======
                to: '/docs/intro'
              }
            ]
>>>>>>> 82b2c6f (Added docs)
          },
          {
            title: 'Author',
            items: [
              {
                label: 'Twitter',
<<<<<<< HEAD
                href: 'https://twitter.com/docusaurus',
              },
            ],
>>>>>>> 878cc89 (initialized Docusaurus)
=======
                href: 'https://twitter.com/samy_osmium'
              }
            ]
>>>>>>> 82b2c6f (Added docs)
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
<<<<<<< HEAD
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
=======
                to: '/blog'
>>>>>>> 82b2c6f (Added docs)
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
<<<<<<< HEAD
        darkTheme: darkCodeTheme,
      },
    }),
>>>>>>> 878cc89 (initialized Docusaurus)
=======
        darkTheme: darkCodeTheme
      }
    })
>>>>>>> 82b2c6f (Added docs)
};

module.exports = config;
