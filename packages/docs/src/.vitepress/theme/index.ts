/**
 * Vitepress Theme config.
 *
 * @description Vitepress Theme config.
 * @see https://vitepress.dev/guide/custom-theme
 * @see https://vitepress.dev/guide/extending-default-theme#layout-slots
 */

// import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'

export default {
  extends: Theme,
  // Layout: () => {
  //   return h(Theme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  // enhanceApp({ app, router, siteData }) {
  //   // ...
  // }
}
