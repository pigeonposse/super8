/**
 * Test files.
 *
 * @description Test files.
 * @see https://playwright.dev/docs/api/class-test
 */

import {
	expect, test,
} from '@playwright/test'

const super8Sel = '#ps-s8-styles-content'
const presetSel = super8Sel + ' > div > div > button:last-child'
const codeSel   = super8Sel + ' .codemirror-wrapper'

test( 'Home is loaded', async ( { page } ) => {

	await page.goto( '/' )
	await page.waitForSelector( super8Sel )
	await page.waitForSelector( 'h1' )
	const psStylesContent = await page.$( super8Sel )
	const h1Element       = await page.$( 'h1' )
	expect( psStylesContent ).not.toBeNull()
	expect( h1Element ).not.toBeNull()

	await page.waitForSelector( presetSel )
	await page.click( presetSel )
	await page.waitForTimeout( 1000 )

	const divs = await page.$$( codeSel )
	console.log( divs.length )
	expect( divs.length ).toBeGreaterThanOrEqual( 1 )

} )
