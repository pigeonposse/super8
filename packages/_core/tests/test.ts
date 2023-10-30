/**
 * Test files.
 *
 * @description Test files.
 * @see https://playwright.dev/docs/api/class-test
 */

import { expect, test } from '@playwright/test'

test( 'index page has expected h1', async ( { page } ) => {

	await page.goto( '/' )
	expect( await page.textContent( 'h1' ) ).toBe( 'Sidebar Filters' )

} )
