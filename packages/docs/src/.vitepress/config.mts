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

const isDev = process.env.NODE_ENV !== 'production'
const srcDir = isDev ? '../../../docs' : './__temp__/docs'
const repoUrl = json.repository.url.endsWith('/') ? json.repository.url : json.repository.url +'/' ;
function groupByType(data) {
	const groupedByType = {};
	// const extsMore = { text: "More browsers", items: [] }
	// const extsMore = { text: "More browsers", link: '' }
	for (const key in data) {
	  const item = data[key];
	  let { name, url, store } = item;
	  
	  name = name.replace('App', '').replace('extension', '').replace('Extension', '')
	  
	  const type = item.type;
  
	  if (!groupedByType[type]) {
		groupedByType[type] = [];
	  }
	  groupedByType[type].push({ text: name, link: url });

	//   if (type === "extension" && store !== true) {
	// 	// @ts-ignore
	// 	extsMore.items.push({ text: name, link: url })
	//   } else {
	// 	groupedByType[type].push({ text: name, link: url });
	//   }
	
	}

	// groupedByType['extension']?.push(extsMore)

	return groupedByType;
}
// @ts-ignore
const navDownload =groupByType(json.extra.downloadUrl)

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
    logo: '/logo.png', // use first "/" for child routes
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
        items: [
          { 
            text: 'Desktop apps', 
			// @ts-ignore
            items: navDownload.desktop
          },
          { 
            text: 'Mobile apps', 
			// @ts-ignore
            items: navDownload.mobile
          },
          { 
            text: 'Browser extensions', 
			// @ts-ignore
            items: navDownload.extension
          },
          { 
            text: 'Wordpress plugins', 
            items: navDownload["wp-plugin"]
          },
          { 
            text: 'Containers', 
            items: navDownload["container"]
          },
        //   { 
        //     text: 'WP plugin', 
        //     link: json.extra.store.wpPlugin.url 
        //   },
        //   { 
        //     text: 'WP plugin (premium)', 
        //     link: json.extra.store.wpPluginPremium.url
        //   },
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
