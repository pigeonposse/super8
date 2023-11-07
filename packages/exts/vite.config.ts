/**
 * Vite config.
 *
 * @description Vite config.
 * @see https://vitejs.dev/config/
 * @see https://github.com/sveltejs/vite-plugin-svelte
 * @see https://vite-plugin-web-extension.aklinker1.io/config/plugin-options.html
 * @see https://peter.sh/experiments/chromium-command-line-switches/
 * @see https://extensionworkshop.com/documentation/develop/web-ext-command-reference/
 */

/* eslint-disable @typescript-eslint/ban-ts-comment */

import { svelte }                               from '@sveltejs/vite-plugin-svelte'
import type { PluginOption }                    from 'vite'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import webExtension                             from 'vite-plugin-web-extension'
import { join }                                 from 'node:path'
import{ manifestChrome }                        from './src/man/manifest.chrome'
import{ manifestFirefox }                       from './src/man/manifest.firefox'
import pkg                                      from './package.json'
import { include }                              from './tsconfig.node.json'
import { isDev }                                from './src/man/manifest'

const target     = process.env.TARGET || 'chrome'
const distPath   = 'dist'
const distTarget = join( distPath, target )
const manifest   = target === 'firefox' ? manifestFirefox : manifestChrome
const webExt     = { 
	browser        : target,
	manifest       : () => manifest, 
	watchFilePaths : [ 
		...include, 
		'src/**/*.html',
	],
	// disableAutoLaunch : true, // web extension set manually
	webExtConfig : {
		...pkg.webExt.run,
	},
}

export default defineConfig( {
	plugins : [ 
		splitVendorChunkPlugin(),
		svelte(), 
		webExtension( webExt ) as PluginOption,
	],
	assetsInclude : [ '**/*.png' ],
	build         : {
		terserOptions : {
			mangle : false,
			format : {
				// eslint-disable-next-line camelcase
				ascii_only : true,
				comments   : false,
			},
		},
		minify                : 'terser',
		outDir                : `${distTarget}`,
		cssMinify             : isDev ? false : 'lightningcss',
		chunkSizeWarningLimit : 1600,
	},

} )
