/**
 * Svelte config.
 *
 * @description Svelte config.
 * @see https://kit.svelte.dev/docs/configuration
 * @see https://github.com/sveltejs/vite-plugin-svelte
 */
import adapter            from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess : vitePreprocess(),

	kit : {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter : adapter(),
	},
}
