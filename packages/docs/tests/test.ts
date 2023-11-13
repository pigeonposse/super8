/**
 * Test files.
 *
 * @description Test files.
 * @see https://playwright.dev/docs/api/class-test
 */

import {
	expect, test, 
} from '@playwright/test'

test( 'index page has expected h1', async ( { page } ) => {

	await page.goto( '/' )
	const h1Text = await page.textContent( 'h1' )
	if( !h1Text ) throw new Error( 'Element <h1> not found on the page' )
	expect( h1Text.startsWith( 'Welcome to Super 8 Documentation' ) ).toBe( true )

} )
