/**
 * TODO.
 *
 * @description TODO.
 */

import { styleClass }      from '$lib'
import { error }           from '@sveltejs/kit'
import type { LayoutLoad } from './$types'

const routes = [
	// defaultRoute,
	{
		route : MAIN_PKG.extra.docsUrl,
		name  : 'Documentation',
		title : 'Documentation',
	},
]

// eslint-disable-next-line jsdoc/require-description
/** @type {import('./$types').LayoutLoad} */
export const load = ( async ( { url } ) => {

	const Core = ( await import( '../_core/main' ) ).Core
	const core = new Core()

	try{

		core.init()	
		
		const { pathname }    = url
		const { route, lang } =  await core.i18n.layoutFunct( pathname )

		return {
			routes,
			route, 
			lang,
			t               : core.i18n.t,
			currLocaleRoute : core.i18n.currLocaleRoute,
			locale          : core.i18n.locale,
			locales         : core.i18n.locales,
			pkg             : core.pkg,
			mainPkg         : core.mainPkg,
			classes         : styleClass,
			isTauri         : core.window.isTauri(),
		}
	
	}catch( e ){

		console.log( e )
		const msg = typeof e === 'object' && e !== null &&
			'message' in e && typeof e.message === 'string' 
			? e.message : ''
		
		error( 505, msg )
	
	}

} ) satisfies LayoutLoad

export const prerender = 'auto' // must be true for i18n
export const ssr = false
