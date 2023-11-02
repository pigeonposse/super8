/**
 * Vite config.
 *
 * @description Vite config.
 * @see https://vitejs.dev/config/
 */
import { defineConfig }      from 'vite'
import react                 from '@vitejs/plugin-react'
import { svelte }            from '@sveltejs/vite-plugin-svelte'
import dts                   from 'vite-plugin-dts'
import { resolve }           from 'path'
import type { PluginOption } from 'vite'

export default defineConfig( {
	plugins : [
		react(),
		svelte() as PluginOption,
		dts( { include: [ 'src/lib' ] } ) as PluginOption,
	],
	build : {
		outDir : 'dist/lib',
		lib    : {
			entry    : resolve( __dirname, 'src/lib/main.ts' ),
			formats  : [ 'es', 'cjs' ],
			name     : 'bundle',
			fileName : 'bundle',
		},
		rollupOptions : {
			external : [ 'react', 'react/jsx-runtime' ],
		},
	},
} )
