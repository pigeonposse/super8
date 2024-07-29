
/**
 * Update cargo version.
 *
 * @description Update cargo version.
 */ 

import {
	readFile, writeFile, 
} from 'fs/promises'
import {
	joinPath, pkg, 
} from '../core/main.mjs'

const workspacePath = pkg.dir
const pkgAppPath    = joinPath( workspacePath, 'packages', 'app' )

export const updateCargoVersion = async () => {

	try {

		const packageJsonPath = joinPath( pkgAppPath, 'package.json' )
		const packageJson     = JSON.parse( await readFile( packageJsonPath, 'utf-8' ) )
		const newVersion      = packageJson.version

		const cargoTomlPath  = joinPath( pkgAppPath, 'src-tauri', 'Cargo.toml' )
		let cargoTomlContent = await readFile( cargoTomlPath, 'utf-8' )

		const versionRegex = /^version\s*=\s*"(.*)"/m
		if ( versionRegex.test( cargoTomlContent ) ) 
			cargoTomlContent = cargoTomlContent.replace( versionRegex, `version = "${newVersion}"` )
		else 
			cargoTomlContent += `\n[package]\nversion = "${newVersion}"\n`

		await writeFile( cargoTomlPath, cargoTomlContent, 'utf-8' )

		console.log( `Version updated to ${newVersion} in Cargo.toml` )
	
	} catch ( error ) {

		console.error( 'Error updating Cargo.toml version:', error )
	
	}

}
