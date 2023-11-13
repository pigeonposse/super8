#!/usr/bin/env ts-node

/**
 * Zip Distribution Files.
 *
 * @description This script is used to create zip files for distribution. 
 *  It checks the existence of the distribution code and zips it for both Chrome and Firefox.
 * @see https://www.npmjs.com/package/zip-a-folder
 */

import { zip }           from 'zip-a-folder'
import { createRequire } from 'node:module'
import {
	existsSync, 
	mkdirSync, 
} from 'node:fs'

const require = createRequire( import.meta.url )
const pkg     = require( './package.json' )
const pkgMain = require( '../../package.json' )

try {

	const browsers   = {
		chrome  : 'chrome',
		firefox : 'firefox',
	}
	const path       = {
		dist        : 'dist',
		distZip     : 'dist/comp',
		distChrome  : `dist/${browsers.chrome}`,
		distFirefox : `dist/${browsers.firefox}`,
	}
	const getNameZip = n => `${path.distZip}/${n}-${pkgMain.extra.productName.toLowerCase()}-${pkg.version}.zip`

	if ( !existsSync( path.dist ) ) throw '❌ You need build a distribution code'
	if ( !existsSync( path.distZip ) ) mkdirSync( path.distZip )
	if ( existsSync( path.distChrome ) )
		zip( path.distChrome, getNameZip( browsers.chrome ) )
	if ( existsSync( path.distFirefox ) )
		zip( path.distFirefox, getNameZip( browsers.firefox ) )

}catch( e ){

	console.error( '❌ ' + e )

}

