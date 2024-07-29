
/**
 * Update pkg apps versions.
 *
 * @description Update pkg version.
 */ 

import {
	readFile, writeFile, 
} from 'fs/promises'
import {
	joinPath, pkg, 
} from '../core/main.mjs'

export const updateAppsVersion = async ( ) =>{

	try {

		const pkgPath = pkg.dir

		const jsonAppPath    = joinPath( pkgPath, 'packages', 'app', 'package.json' )
		const jsonPath       = joinPath( pkgPath, 'package.json' )
		const fileAppContent = await readFile( jsonAppPath, 'utf8' )
		const newVersion     = JSON.parse( fileAppContent ).version
		const fileContent    = await readFile( jsonPath, 'utf8' )
		const data           = JSON.parse( fileContent )

		for ( const key in data.extra.downloadUrl ) {

			const item = data.extra.downloadUrl[key]

			if ( item.type === 'desktop' && item['update-version'] ) {

				item.url = item.url.replace( /(Super8[_-])[\d.]+([_-])/g, `$1${newVersion}$2` )
		
			}
	
		}

		await writeFile( jsonPath, JSON.stringify( data, null, '\t' ) + '\n', 'utf8' )
		console.log( `Version updated to ${newVersion} in 'extra.downloadUrl' from packages.json` )
	
	} catch ( error ) {

		console.error( 'Error updating Apps versions:', error )

	}

}
