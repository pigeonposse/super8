/**
 * Vite config.
 *
 * @description Vite config.
 */
import { sveltekit }    from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import mainPkg          from '../../package.json'
import pkg              from './package.json'

export default defineConfig( {
	plugins : [
		sveltekit(), 
	],
	build : {
		chunkSizeWarningLimit : 1600, 
	},
	define : {
		PKG      : pkg,
		MAIN_PKG : mainPkg,
	},
} )
