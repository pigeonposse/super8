/**
 * Svelte config.
 *
 * @description Svelte config.
 * @see https://kit.svelte.dev/docs/configuration
 * @see https://github.com/sveltejs/vite-plugin-svelte
 */
import adapter                          from '@sveltejs/adapter-static'
import { default as adapterCloudflare } from '@sveltejs/adapter-cloudflare'
import { vitePreprocess }               from '@sveltejs/kit/vite'

const cloudflare = process.env.ADAPTER === 'cloudflare'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess : vitePreprocess(),

	kit : {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter : cloudflare ?
			adapterCloudflare()
			: adapter( {
				pages    : 'build',
				assets   : 'build',
				fallback : 'index.html',
			} ),
	},
}

export default config