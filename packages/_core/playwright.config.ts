/**
 * Playwright config.
 *
 * @description Playwright config.
 * @see https://playwright.dev/docs/api/class-test
 */
import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
	webServer : {
		command : 'pnpm run preview',
		port    : 4173,
	},
	testDir   : 'tests',
	testMatch : /(.+\.)?(test|spec)\.[jt]s/,
}

export default config
