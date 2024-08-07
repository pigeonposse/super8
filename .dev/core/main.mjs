/**
 * Core for .Utils folder.
 *
 * @description Functions for .Utils folder.
 */
import {
	execSync, spawn, 
} from 'child_process'
import { fileURLToPath } from 'url'
import fs                from 'fs'
import path              from 'path'
import figlet            from 'figlet'

export const exec = async cmd => {

	console.log( `🐢 CMD: ${cmd}` )
 
	await new Promise( ( resolve, reject ) => {

		const childProcess = spawn( cmd, {
			shell : true,
			stdio : 'inherit',
		} )

		// Manejar eventos del proceso hijo
		childProcess.on( 'close', code => {

			if ( code === 0 ) {

				// El proceso hijo terminó con éxito
				resolve()
				
			} else {

				// El proceso hijo falló
				const error = new Error( `Command failed with code ${code}` )
				console.error( error )
				reject( error )
				
			}
			
		} )
		
	} )

}

export const pkgFunct = fileName => {

	const json = projectPath => JSON.parse( fs.readFileSync( projectPath ) )

	let projectPath = path.join(
		path.dirname( fileURLToPath( import.meta.url ) ),
		'..', '..', 
	)

	// when is used in the compilated files of 'dist' folder
	if ( projectPath.includes( 'dist' ) || projectPath.includes( 'build' ) ) projectPath = path.join( projectPath, '..' )

	const pkgPath = path.join( projectPath, fileName + '.json' )
	const pkgData = json( pkgPath )

	return {
		path : pkgPath,
		dir  : projectPath,
		data : pkgData,
	}

}

export const pkg = pkgFunct( 'package' )

export const writeSync = ( projectPath, txt ) => {

	const filePath = path.join( pkg.dir, projectPath )

	console.log()

	console.group( `🐢 writeFileSync: ${filePath}` )
		
	fs.writeFileSync( filePath, txt )

	console.log( '✅ File overwritten!' )

	console.groupEnd()

}
export const generateASCII = ( projectName = '', collectiveName = 'PIGEON\nPOSSE', font = 'ANSI Shadow' ) => {

	return figlet.textSync( `${collectiveName}\n-------\n${projectName}` , {
		font,
		horizontalLayout : 'default',
		verticalLayout   : 'default',
		whitespaceBreak  : true,
	} )

}
export const joinPath = path.join
export const joinUrl = ( ...parts ) => {

	parts = parts.map( part => part.replace( /^\/+|\/+$/g, '' ) )
	return parts.join( '/' )

}
export const constructorLinks = ( links, type = 'link' ) => {
	
	let res = ''
	links.forEach( ( link, index ) => {

		res += type === 'img' ? imgUrl( link ) : `[${link.name}](${link.url})`
		if ( index !== links.length - 1 ) res += '\n'

	} )
	return res

}

export const addTextBetweenAMark = async ( projectPath, startMarker, endMarker, textToAdd ) => {

	try {

		const filePath    = path.join( pkg.dir, projectPath )
		const fileContent = await fs.promises.readFile( filePath, 'utf-8' )
		const startIndex  = fileContent.indexOf( startMarker )
		const endIndex    = fileContent.indexOf( endMarker )

		// Check if both start and end markers exist
		if ( startIndex !== -1 && endIndex !== -1 ) {

			// Start and end markers found, adding text between them
			console.log( 'Markers found, adding text...' )
			const newTextContent = `${fileContent.substring( 0, startIndex + startMarker.length )}\n${textToAdd}\n${fileContent.substring( endIndex )}`
            
			console.log()
			console.group( `🐢 Writing: ${filePath}` )
			// Write the modified content back to the file
			await fs.promises.writeFile( filePath, newTextContent )
			console.log( '✅ File overwritten!' )
			console.groupEnd()
		
		} else {

			// Start or end markers not found
			console.log( 'Markers not found in the file.' )
		
		}
	
	} catch ( error ) {

		// Error handling
		console.error( 'Error:', error )
	
	}

}

export const renameAndCopyFiles = async ( oldFileName, tempFileName, newFileName ) => {

	try {

		await fs.promises.rename( oldFileName, tempFileName )
		await fs.promises.copyFile( tempFileName, newFileName )
	
	} catch ( error ) {

		console.error( error )
	
	}

}

export const createSymlink = async ( sourceDir, targetDir ) =>{

	try {

		await fs.promises.access( targetDir )
	
	} catch ( error ) {

		if ( error.code === 'ENOENT' ) {

			// El directorio destino no existe, lo creamos
			await fs.promises.mkdir( targetDir, {
				recursive : true, 
			} )
		
		} else {

			throw `❌🔗 ${error}`
		
		}
	
	}

	const sourceStat = await fs.promises.lstat( sourceDir )
	// const targetStat = await fs.promises.lstat( targetDir )
	const isWin = process.platform === 'win32'

	if ( sourceStat.isDirectory() ) {

		if ( isWin ) {

			// En Windows, debemos crear un enlace de tipo 'junction'
			await fs.promises.symlink( sourceDir, path.join( targetDir, path.basename( sourceDir ) ), 'junction' )
		
		} else {

			// En Linux y macOS, podemos crear enlaces simbólicos directos a directorios
			await fs.promises.symlink( sourceDir, path.join( targetDir, path.basename( sourceDir ) ), 'dir' )
		
		}
	
	} else if ( sourceStat.isFile() ) {

		// Si la fuente es un archivo, creamos un enlace simbólico a ese archivo
		await fs.promises.symlink( sourceDir, path.join( targetDir, path.basename( sourceDir ) ) )
	
	}

	console.log( `🔗 symlink: "${sourceDir}" to "${targetDir}".` )

}

export const copyDir = async ( src, dest ) => {

	try {

		// Read the source directory
		const entries = await fs.promises.readdir( src, {
			withFileTypes : true, 
		} )

		// Create the destination directory if it doesn't exist
		await fs.promises.mkdir( dest, {
			recursive : true, 
		} )

		// Loop through the entries in the source directory
		for ( const entry of entries ) {

			const srcPath  = path.join( src, entry.name )
			const destPath = path.join( dest, entry.name )

			if ( entry.isDirectory() ) {

				// Recursively copy the subdirectory
				await copyDir( srcPath, destPath )
			
			} else {

				// Copy the file
				await fs.promises.copyFile( srcPath, destPath )
			
			}
		
		}

		console.log( `📁 Directory copied from ${src} to ${dest}` )
	
	} catch ( error ) {

		throw `📁 Error copying directory: ${error.message}`
	
	}

}

export const getCurrentDateTime = () => {

	const currentDate = new Date()
	const year        = currentDate.getUTCFullYear()
	const month       = ( '0' + ( currentDate.getUTCMonth() + 1 ) ).slice( -2 )
	const day         = ( '0' + currentDate.getUTCDate() ).slice( -2 )
	const hours       = ( '0' + currentDate.getUTCHours() ).slice( -2 )
	const minutes     = ( '0' + currentDate.getUTCMinutes() ).slice( -2 )
	const seconds     = ( '0' + currentDate.getUTCSeconds() ).slice( -2 )
	
	return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`

}

export const imgUrl = ( { name, color = 'black', url, logo = false, type = false } ) => {
	
	if( !type ) type = `badge/${encodeURIComponent( name )}-${color}?`
	else type = `${type}?color=${color}&`
	
	const img = `https://img.shields.io/${type}style=for-the-badge${logo ? '&logo=' + encodeURIComponent( logo.toLowerCase() ) : ''}&logoColor=white`

	return `[![${name}](${img})](${url})`

}
export const isGitHubAuthenticated = () =>{

	try {

		const output = execSync( 'gh auth status', {
			encoding : 'utf-8', 
		} )
		return output.includes( 'Active account: true' )
	
	} catch ( error ) {

		return false
	
	}

}
