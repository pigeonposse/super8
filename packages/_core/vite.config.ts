/**
 * Vite config.
 *
 * @description Vite config.
 */
import { sveltekit }    from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig( {
	plugins : [
		sveltekit(),
	],
	build : {
		chunkSizeWarningLimit : 1600,
	},
} )
