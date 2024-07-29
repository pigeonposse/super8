/**
 * Fetch links.
 *
 * @description Fetch links.
 */

import { downloadLinks }    from './download-links'
import type { DownloadNav } from './types'

// TODO
// import type { DownloadNav } from './types'
type Assets = object & {browser_download_url: string}
export const fetchData = async () => {

	const url = 'https://api.github.com/repos/pigeonposse/super8/releases'
	// Realiza la solicitud a la API de GitHub
	const response = await fetch( url, {
		headers : {
			'Accept' : 'application/vnd.github.v3+json', 
		},
	} )
		
	if ( !response.ok ) throw new Error( `Error ${response.status}: ${response.statusText}` )
	
	const data = await response.json()

	const assets = data[0].assets
		.filter( ( asset: Assets ) => 'browser_download_url' in asset )
		.map( ( asset: Assets ) => asset.browser_download_url )

	return assets as string[]

}

const dataUrl = [
	{
		suffix : 'universal.app.tar.gz', 
	},
	{
		suffix : 'x64.app.tar.gz', 
	},
	{
		suffix : 'aarch64.app.tar.gz', 
	},
	{
		suffix : 'x64-setup.exe', 
	},
	{
		suffix : 'x64-setup.nsis.zip', 
	},
	{
		suffix : 'amd64.AppImage.tar.gz', 
	},
	{
		suffix : 'amd64.deb', 
	},
	{
		suffix : 'x86_64.rpm', 
	},
]

export const getFetchData = async (): Promise<DownloadNav> => {

	const links = downloadLinks( MAIN_PKG['extra']['downloadUrl'] )

	try {

		const response = await fetchData()
		
		if( !links.desktop || !response ) {

			links.desktop = undefined
			return links
		
		}
		const res: typeof links['desktop'] = []
		
		for ( let index = 0; index < dataUrl.length; index++ ) {

			const element  = dataUrl[index]
			const existUrl = response.find( d => d.endsWith( element.suffix ) )
			
			if( existUrl ) {

				const existData = links.desktop.find( d => d.href.endsWith( element.suffix ) )
				if( existData ){

					res.push( {
						...existData,
						href : existUrl,
					} )
				
				}
			
			}
		
		}
		if( res ) links.desktop = res
		// console.log( {
		// 	res, response, desktop : links.desktop,
		// } )
		return links
	
	} catch ( error ) {

		links.desktop = undefined
		return links
	
	}

}
getFetchData()
