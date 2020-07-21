module.exports = {
  title: 'MRC',
  tagline: 'Model Rail Control',
  url: 'https://modelrailcontrol.org',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'modelrailcontrol',         // Usually your GitHub org/user name.
  projectName: 'modelrailcontrol.github.io',     // Usually your repo name.

  // ------------------------------------------------------------------------------
  themeConfig: {
    navbar: {
//      title: 'My Site',
      logo: {
        alt: 'MRC-logo',
        src: 'img/mrc-logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Dokumentation',
          position: 'left',
        },
        {
          to: 'docs/clients/intro-overview',
          label: 'Enheter',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/modelrailcontrol',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  // ------------------------------------------------------------------------------
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Information',
          items: [
            {
              label: 'Dokumentation',
              to: 'docs/',
            },
            {
              label: 'Enheter',
              to: 'docs/clients/intro-overview/',
            },
          ],
        },
        {
          title: 'Gemenskap',
          items: [
            {
              label: 'Svenskt MJ-forum',
              href: 'https://www.svensktmjforum.se/forum/index.php?topic=21831.0',
             },
/*            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
  */
            ],
        },
        {
          title: 'Övrigt',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/modelrailcontrol',
            },
            {
              label: 'Docusaurus',
              href: 'https://v2.docusaurus.io/',
            },
          ],
        },
      ],
      copyright: `CC-BY-SA © ${new Date().getFullYear()} Model Rail Control`,
    },
  },

  // ------------------------------------------------------------------------------
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'intro-01-overview',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/modelrailcontrol/MRC-documentation/blob/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/modelrailcontrol/MRC-documentation/blog/tree/master/',
          feedOptions: {
            title: 'Model Rail Control',
            description: 'Senaste nytt kring MRC - Model Rail Control',
            type: 'all',
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
