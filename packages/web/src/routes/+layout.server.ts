/**
 * TODO.
 *
 * @description TODO.
 */

import {
	loadTranslations, translations, 
} from '$lib/i18n'

export const load = async ( { url, locals } ) => {

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const { lang }     = locals
	const { pathname } = url

	const route = pathname.replace( new RegExp( `^/${lang}` ), '' )

	await loadTranslations( lang, route )

	return {
		i18n : {
			route, lang, 
		}, translations : translations.get(), 
	}

}
