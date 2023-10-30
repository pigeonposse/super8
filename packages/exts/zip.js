#!/usr/bin/env ts-node
/**
 * Zip config.
 *
 * @description Zip config.
 * @see https://www.npmjs.com/package/zip-a-folder
 */

import { zip }                   from 'zip-a-folder'
import { existsSync, mkdirSync } from 'node:fs'
import { createRequire }         from 'node:module'

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
	const getNameZip = n => `${path.distZip}/${n}-${pkgMain.name}-${pkg.version}.zip`

	if ( !existsSync( path.dist ) ) throw '❌ You need build a distribution code'
	if ( !existsSync( path.distZip ) ) mkdirSync( path.distZip )
	if ( existsSync( path.distChrome ) )
		zip( path.distChrome, getNameZip( browsers.chrome ) )
	if ( existsSync( path.distFirefox ) )
		zip( path.distFirefox, getNameZip( browsers.firefox ) )

}catch( e ){

	console.error( '❌ ' + e )

}

