/**
 * TYPES.
 *
 * @description File for set core types.
 */

import i18n from 'sveltekit-i18n'
import lang from '../_locales/lang.json'

const langLoaderFunct = ( langKey: string ) => {

	return [
		{
			locale : langKey,
			key    : 'common',
			loader : async () => ( await import( `../_locales/${langKey}/common.json` ) ).default,
		},
		{
			locale : langKey,
			key    : 'home',
			routes : [ '', '/' ],
			loader : async () => ( await import( `../_locales/${langKey}/home.json` ) ).default,
		},
		{
			locale : langKey,
			key    : 'error',
			routes : [ 'error' ],
			loader : async () => ( await import( `../_locales/${langKey}/error.json` ) ).default,
		},
	]

}
const LangLoaders     = langLoaderFunct( 'en' ).concat(
	langLoaderFunct( 'es' ),
	langLoaderFunct( 'ca' ),
)

const config = ( {
	translations : {
		en : { lang },
		es : { lang },
		ca : { lang },
	},
	loaders : LangLoaders,
} )

export const defaultLocale = 'en'

export const { t, locale, locales, loading, addTranslations, loadTranslations, translations, setRoute, setLocale } = new i18n( config )

// Translations logs
loading.subscribe( async $loading => {

	if ( $loading ) {

		// console.log( 'Loading translations...' )

		await loading.toPromise()
		// console.log( 'Updated translations', translations.get() )
	
	}

} )
