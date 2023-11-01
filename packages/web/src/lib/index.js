/**
 * Export File.
 *
 * @description Export all components and functions in package.
 */

// SHARED
export * from './_shared/main'

// Style class
export * from './style-class'

// CORE
export * from '@s-8/core'

// COMPONENTS
export { default as Content } from './components/content/main.svelte'
export { default as Page } from './components/page.svelte'
export { default as Footer } from './components/footer/main.svelte'
export { default as Header } from './components/header/main.svelte'
export { default as LangSelect } from './components/langSelect.svelte'
export { default as DarkMode } from './components/dark-mode/main.svelte'

// TYPES & CONSTS
export * from './types'
