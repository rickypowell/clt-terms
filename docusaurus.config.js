// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const termsLabel = 'Loan Terms Glossary';
const docsRouteBasePath = '/terms';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'A Glossary of Car Loan Terms',
  tagline: 'Helping to understand the language of car loans',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: './terms',
          routeBasePath: docsRouteBasePath
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Car Loan Talk Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: termsLabel,
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site Map',
            items: [
              {
                label: termsLabel,
                to: docsRouteBasePath + '/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Car Loan Talk',
                href: 'https://carloantalk.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Car Loan Talk, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
