/**
 * Test config.
 *
 * @description Test config file.
 * @see https://playwright.dev/docs/test-configuration
 */

import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
	webServer : {
		command : 'pnpm run build && pnpm run preview',
		port    : 4173,
	},
	testDir   : 'tests',
	testMatch : /(.+\.)?(test|spec)\.[jt]s/,
	timeout   : 120000,
}

export default config
