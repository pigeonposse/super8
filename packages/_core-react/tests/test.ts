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
test( 'Open sidebar clicking button & check taht CodeMirror is loaded', async ( { page } ) => {

	const super8Sel    = '#ps-s8-styles-content'
	const super8BtnSel = '#ps-s8-styles-btn'
	const presetSel    = super8Sel + ' > div > div > button:last-child'
	const codeSel      = super8Sel + ' .codemirror-wrapper'

	await page.goto( '/' )
	await page.click( super8BtnSel )
	const psStylesContent = await page.$( super8Sel )
	expect( psStylesContent ).toBeTruthy()
	
	await page.waitForSelector( presetSel )
	await page.click( presetSel )
	await page.waitForTimeout( 1000 )

	const divs = await page.$$( codeSel )
	expect( divs.length ).toBeGreaterThanOrEqual( 1 )

} )
