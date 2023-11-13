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
	expect( await page.textContent( 'h1' ) ).toBe( 'Test super8 in react' )

} )
test( 'Open sidebar clicking button', async ( { page } ) => {

	await page.goto( '/' )
	await page.click( '#ps-s8-styles-btn' )
	const psStylesContent = await page.$( '#ps-s8-styles-content' )
	expect( psStylesContent ).toBeTruthy()

} )
