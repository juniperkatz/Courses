// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dr. Juniper Katz Courses',
  tagline: '',
  url: 'https://courses.trustedlogin.com/',
  baseUrl: '/',
  deploymentBranch: 'main',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  favicon: 'img/favicon.png',
  organizationName: 'juniper',
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          editUrl: 'https://github.com/juniperkatz/Courses/edit/main/',
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Juniper Katz Courses'
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://www.juniperkatz.com',
              },
              {
                label: 'Email',
                href: 'mailto:juniperkatz@umass.edu',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/juniperkatz/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Juniper Katz`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['ruby', 'r']
      },
    }),
};

module.exports = config;
