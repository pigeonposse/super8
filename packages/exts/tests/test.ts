/**
 * Test files.
 *
 * @description Test files.
 * @see https://playwright.dev/docs/api/class-test
 */
import {
	test, expect, 
} from './fixtures'

test( 'Test content, popup and option page', async ( { page, extensionId } ) => {

	const contentSel       = '#pp-s8-content'
	const contentScriotSel = '#pp-s8-extension'

	// TEST CONTENT
	await page.goto( 'https://www.youtube.com/watch?v=UQ5mbI44I1w' )
	// Exists script with id pp-s8-extension
	expect( await page.$( contentScriotSel ) ).not.toBeNull()
	// Exists div with id pp-s8-content
	expect( await page.$( contentSel ) ).not.toBeNull()

	// TEST POPUP
	await page.goto( `chrome-extension://${extensionId}/src/popup/main.html` )
	expect( await page.$( contentSel ) ).not.toBeNull()

	// TEST OPTION
	await page.goto( `chrome-extension://${extensionId}/src/options/main.html` )
	expect( await page.$( contentSel ) ).not.toBeNull()

} )
