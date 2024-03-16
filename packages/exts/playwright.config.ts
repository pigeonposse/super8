/**
 * Test config.
 *
 * @description Test config file.
 * @see https://playwright.dev/docs/test-configuration
 */

import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
	testDir   : 'tests',
	testMatch : /(.+\.)?(test|spec)\.[jt]s/,
}

export default config
