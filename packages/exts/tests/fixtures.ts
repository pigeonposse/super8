/**
 * Test Chrome extension file.
 *
 * @description Test Chrome extension file.
 * @see https://playwright.dev/docs/chrome-extensions#testing
 */

import {
	test as base, chromium, type BrowserContext, 
} from '@playwright/test'
import path from 'path'

export const test = base.extend<{
  context: BrowserContext;
  extensionId: string;
}>( {
	// eslint-disable-next-line no-empty-pattern
	context : async ( { }, use ) => {

		const pathToExtension = path.resolve( 'dist', 'chrome' )
		const context         = await chromium.launchPersistentContext( '', {
			headless : false,
			args     : [
				// '--headless=new',
				`--disable-extensions-except=${pathToExtension}`,
				`--load-extension=${pathToExtension}`,
			],
		} )
		await use( context )
		await context.close()
	
	},
	extensionId : async ( { context }, use ) => {

		/*
    // for manifest v2:
    let [background] = context.backgroundPages()
    if (!background)
      background = await context.waitForEvent('backgroundpage')
    */

		// for manifest v3:
		let [
			background,
		] = context.serviceWorkers()
		if ( !background )
			background = await context.waitForEvent( 'serviceworker' )

		const extensionId = background.url().split( '/' )[2]
		await use( extensionId )
	
	},
} )
export const expect = test.expect
