/**
 * Test files.
 *
 * @description Test files.
 * @see https://playwright.dev/docs/api/class-test
 */

import {
	expect, test,
} from '@playwright/test'

test( 'Home is loaded', async ( { page } ) => {

	await page.goto( '/' )
	await page.waitForSelector( '#ps-s8-styles-content' )
	await page.waitForSelector( 'h1' )
	const psStylesContent = await page.$( '#ps-s8-styles-content' )
	const h1Element       = await page.$( 'h1' )
	expect( psStylesContent ).not.toBeNull()
	expect( h1Element ).not.toBeNull()

} )
