
/**
 * Update-version.mjs.
 *
 * @description Update cargo version.
 */ 

import {
	readFile, writeFile, 
} from 'fs/promises'
import path from 'path'

const updateCargoVersion = async () => {

	try {

		// Leer package.json
		const packageJsonPath = path.join( process.cwd(), 'package.json' )
		const packageJson     = JSON.parse( await readFile( packageJsonPath, 'utf-8' ) )
		const newVersion      = packageJson.version

		// Leer Cargo.toml
		const cargoTomlPath  = path.join( process.cwd(), 'src-tauri', 'Cargo.toml' )
		let cargoTomlContent = await readFile( cargoTomlPath, 'utf-8' )

		// Buscar y reemplazar la línea con la versión
		const versionRegex = /^version\s*=\s*"(.*)"/m
		if ( versionRegex.test( cargoTomlContent ) ) {

			cargoTomlContent = cargoTomlContent.replace( versionRegex, `version = "${newVersion}"` )
		
		} else {

			// Si no existe el campo, lo agregamos al final del archivo
			cargoTomlContent += `\n[package]\nversion = "${newVersion}"\n`
		
		}

		// Escribir el archivo actualizado
		await writeFile( cargoTomlPath, cargoTomlContent, 'utf-8' )

		console.log( `Version updated to ${newVersion} in Cargo.toml` )
	
	} catch ( error ) {

		console.error( 'Error updating Cargo.toml version:', error )
	
	}

}

updateCargoVersion()
