/**
 * Export File.
 *
 * @description Export all components and functions in package.
 */

// Style class
export { styleClass } from './style-class'

// CORE
export * from '@s-8/core'
// export { Spinner } from '@s-8/core'

// COMPONENTS
export { default as Content } from './components/content/main.svelte'
export { default as Seo } from './components/seo/main.svelte'
export { default as BtnApp } from './components/btn/main.svelte'
export { default as Footer } from './components/footer/main.svelte'
export { default as Header } from './components/header/main.svelte'
export { default as LangSelect } from './components/input/lang-select.svelte'
export { default as DarkMode } from './components/dark-mode/main.svelte'

// TYPES & CONSTS
export * from './types'
