import { DefaultTheme, defineConfig } from 'vitepress'
import json from '../../../../package.json'
import {join} from 'node:path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: json.extra.productName,
  titleTemplate: ':title - Documentation',
  description: json.description,
  srcDir: '../../../docs',
  base: '/docs/',
  // cleanUrls: true,
  // assetsDir: './_assets',
  head: [[
    'link', 
    { 
      rel: 'icon', 
      href: 'images/favicon.png' 
    }
  ]],
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: 'images/logo.png',
    siteTitle: false,
    editLink: {
      pattern: join(json.repository.url,'edit/main/docs/:path')
    },
    outline: 'deep',
    search: {
      provider: 'local'
    },
    nav: [
      { 
        text: 'Web', 
        target: '_self',
        link: json.homepage 
      },
      { 
        text: 'Documentation', 
        link: '/index' 
      },
      { 
        text: 'Download', 
        items: [
          { 
            text: 'Chrome extension', 
            link: json.extra.store.chrome.url
          },
          { 
            text: 'Firefox extension', 
            link: json.extra.store.mozilla.url 
          },
          { 
            text: 'WP plugin', 
            link: json.extra.store.wpPlugin.url 
          },
          { 
            text: 'WP plugin (premium)', 
            link: json.extra.store.wpPluginPremium.url
          },
        ]
      },
      { 
        text: 'Donate', 
        link: json.funding.url 
      },
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Super 8', link: '/index' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'Filters', link: '/guide-filters' },
          { text: 'Presets', link: '/guide-presets' },
        ]
      },
      {
        text: 'Contribute',
        items: [
          { text: 'Report issues', link: json.bugs.url },
          {
            text: 'Development',
            items: [
              { text: 'Getting Started', link: '/dev-getting-started' },
              { text: 'Core components', link: '/dev-components-info' },
              { text: 'Todo', link: join(json.repository.url, 'todo' )},
            ]
          },
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'History', link: '/history' },
          { text: 'License', link: join(json.repository.url, 'LICENSE' ) },
          { text: 'More projects', link: json.extra.collective.web },
        ]
      }
    ],
    socialLinks: json.extra.socialLinks as DefaultTheme.SocialLink[],
    footer: {
      message: `Made with ♥️ by <a href="${json.extra.collective.url}" target="_blank">${json.extra.collective.name}</a>`,
      copyright: `Copyright © ${new Date().getFullYear()}`
    }
  }
})
