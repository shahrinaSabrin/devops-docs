// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DevOps Docs',
  tagline: 'Master DevOps step by step',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-org.github.io', // replace with your domain
  baseUrl: '/',
  organizationName: 'your-org', // change to your GitHub username or org
  projectName: 'devops-docs', // change to your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // docs available at root URL like Next.js
          editUrl: 'https://github.com/your-org/devops-docs/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false, // disable blog like Next.js docs
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/devops-banner.png', // optional Open Graph image
    navbar: {
      title: 'DevOps',
      logo: {
        alt: 'DevOps Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/your-org/devops-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [

      ],
      copyright: `Copyright © ${new Date().getFullYear()} DevOps Docs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['docker', 'yaml', 'bash'],
    },
  },
};

export default config;
