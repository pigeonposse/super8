/**
 * Vitepress config.
 *
 * @description Vitepress config.
 * @see https://vitepress.dev/reference/site-config
 * @see https://vitepress.dev/reference/default-theme-config
 */

import { DefaultTheme, defineConfig } from 'vitepress'
import json from '../../../../package.json'
import {join} from 'node:path'
import MarkdownItTaskList from 'markdown-it-task-lists'

export default defineConfig({
  lang: 'en-US',
  title: json.extra.productName,
  titleTemplate: ':title - Super8 Documentation',
  appearance:'force-dark',
  description: json.description,
  srcDir: '../../../docs',
  // base: '/docs/',
  cleanUrls: true,
  markdown: {
    config: (md) => {
        md.use(MarkdownItTaskList)
    }
  },
  head: [[
    'link', 
    { 
      rel: 'icon', 
      href: '/images/favicon.png' // use first "/" for child routes
    }
  ]],
  themeConfig: {
    logo: '/images/logo.png', // use first "/" for child routes
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
              { text: 'Todo', link: '/todo/v1.md' },
            ]
          },
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'History', link: '/history' },
          { text: 'License', link: join(json.repository.url, 'blob/main/LICENSE' ) },
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
