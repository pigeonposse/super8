/**
 * Vitepress config.
 *
 * @description Vitepress config.
 * @see https://vitepress.dev/reference/site-config
 * @see https://vitepress.dev/reference/default-theme-config
 */

import { DefaultTheme, defineConfig } from 'vitepress'
import json from '../../../../package.json'
import MarkdownItTaskList from 'markdown-it-task-lists'
import { getReleasesUrl } from '../get-releases-url'

const isDev = process.env.NODE_ENV !== 'production'
const srcDir = isDev ? '../../../docs' : './__temp__/docs'
const repoUrl = json.repository.url.endsWith('/') ? json.repository.url : json.repository.url +'/' ;

export default defineConfig({
  lang: 'en',
  title: json.extra.productName,
  description: json.description,
  titleTemplate: ':title - Super8 Documentation',
  appearance:'force-dark',
  srcDir,
  cacheDir: '../__cache__',
  outDir: '../dist',
  cleanUrls: true,
  ignoreDeadLinks: true,
  markdown: {
    config: (md) => {
        md.use(MarkdownItTaskList)
    }
  },
  head: [[
    'link', 
    { 
      rel: 'icon', 
      href: '/favicon.png' // use first "/" for child routes
    }
  ]],
  themeConfig: {
    logo: '/logo-web.png', // use first "/" for child routes
    siteTitle: false,
    editLink: {
      pattern: repoUrl+ 'edit/main/docs/:path',
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
        link: '/' 
      },
      { 
        text: 'Download', 
        items: getReleasesUrl()
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
          { text: 'What is Super 8', link: '/' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: 'Guide',
        items: [
          { 
            text: 'Filters', 
            link: '/guide-filters' 
          },
          { 
            text: 'Presets', 
            link: '/guide-presets' 
          },
          { 
            text: 'Docker', 
            link: '/guide-docker' 
          },
          { 
            text: 'Extension', 
            link: '/guide-extension'
          },
          { 
            text: 'Wordpress plugin', 
            link: '/guide-wordpress'
          },
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
			  { text: 'Information', link: '/dev-info' },
              { text: 'Core components', link: '/dev-components-info' },
              { text: 'Todo', link: '/todo/v1' },
            ]
          },
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'History', link: '/history' },
          { text: 'License', link: repoUrl+ 'blob/main/LICENSE'},
          { text: 'More projects', link: json.extra.collective.web },
        ]
      }
    ],
    socialLinks: json.extra.socialLinks as DefaultTheme.SocialLink[],
    footer: {
      message: `Made with ♥️ by <a href="${json.extra.collective.url}" target="_blank">${json.extra.collective.name}</a>`,
      copyright: `Copyright © ${new Date().getFullYear()}`
    },
  },
  // vite: {
  //   build: {
  //       rollupOptions: {
  //           external: ["vue/server-renderer", "vue"]
  //       }
  //   }
  // }
})
