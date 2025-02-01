/**
 * Shared Extension Manifest.
 *
 * @description This is the shared manifest configuration for the Super 8 extensions.
 * @see https://json.schemastore.org/chrome-manifest
 */

/* eslint-disable camelcase */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pkgMain from '../../../../package.json'
import pkg     from '../../package.json'

const combineUrlsWithAsterisk = ( urlStarts: typeof allowSites ) => {

	const combinedUrls = [] as string[]

	for ( const site in urlStarts ) {

		const urlList = urlStarts[site] as string[]
		if( urlList && Array.isArray( urlList ) ) {

			const urls = urlList.map( url => ( url.endsWith( '*' ) ? url : url + '*' ) )
			combinedUrls.push( ...urls )
		
		}
	
	}
  
	return combinedUrls as string[]

}

export { pkgMain, pkg }

const { version } = pkg

export const isDev = process.env.NODE_ENV === 'development' ? true : false
export const csp = 'script-src \'self\' \'wasm-unsafe-eval\'; object-src \'self\''

// export const csp = isDev ?
// 	`script-src 'self' http://localhost:${pkg.extra.devServerPort}; object-src 'self'` :
// 	'script-src \'self\' \'wasm-unsafe-eval\'; object-src \'self\''

// Convert from Semver (example: 0.1.0-beta6)
const [
	major, minor, patch, 
] = version
	// can only contain digits, dots, or dash
	.replace( /[^\d.-]+/g, '' )
	// split into version parts
	.split( /[.-]/ )
	
export const imagesFolder = 'images/'

export const allowSites = {
	youtube : [
		'https://www.youtube.com/', 
	],
	vimeo : [
		'https://vimeo.com/', 
	],
	twitch : [
		'https://www.twitch.tv/', 
	],
	filmin : [
		'https://www.filmin.es/', 
	],
	disney : [
		'https://www.disneyplus.com/', 
	],
	netflix : [
		'https://www.netflix.com/', 
	],
	primevideo : [
		'https://www.primevideo.com/', 
	],
}

export const icons = {
	'16'  : `${imagesFolder}icon-16.png`,
	'32'  : `${imagesFolder}icon-32.png`,
	'48'  : `${imagesFolder}icon-48.png`,
	'96'  : `${imagesFolder}icon-96.png`,
	'128' : `${imagesFolder}icon-128.png`,
}

export const images = {
	icons,
	background : `${imagesFolder}background.png`,
	logo       : `${imagesFolder}logo-web.png`,
}
export const contentMatches = combineUrlsWithAsterisk( allowSites )

export const path = {
	backgroundMain : 'src/background/main.ts',
	contentMain    : 'src/content/main.ts',
	optionsHTML    : 'src/options/main.html',
	optionsMain    : 'src/options/main.ts',
	popupHTML      : 'src/popup/main.html',
	popupMain      : 'src/popup/main.ts',
}
export const manifest = {
	name            : '__MSG_name__',
	description     : '__MSG_description__',
	version         : `${major}.${minor}.${patch}`,
	version_name    : version,
	author          : pkg.author.name,
	homepage_url    : pkgMain.homepage,
	default_locale  : 'en',
	content_scripts : [
		{
			js : [
				path.contentMain, 
			],
			matches : contentMatches,
			run_at  : 'document_end',
		},
	],
}

