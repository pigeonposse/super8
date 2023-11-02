/**
 * Vite config.
 *
 * @description Vite config.
 * @see https://vitejs.dev/config/
 */

import { defineConfig }      from 'vite'
import react                 from '@vitejs/plugin-react'
import { svelte }            from '@sveltejs/vite-plugin-svelte'
import type { PluginOption } from 'vite'

export default defineConfig( {
	plugins : [
		react(),
		svelte( ) as PluginOption,
	],
	build : {
		outDir : 'dist/app',
	},
} )
