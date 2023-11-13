/**
 * TODO.
 *
 * @description TODO.
 */
import {
	addTranslations, setLocale, setRoute, 
} from '$lib/i18n'
import { styleClass }         from '$lib'
import type { LayoutRouteId } from './$types.js'

// const defaultRoute = 	{
// 	route : '/',
// 	name  : 'Home',
// 	title : 'Sidebar Filters',
// }
const errortRoute = {
	route : '/',
	name  : 'Error page',
	title : 'Error Page',
}

const routes = [
	// defaultRoute,
	{
		route : MAIN_PKG.extra.docsUrl,
		name  : 'Documentation',
		title : 'Documentation',
	},
]

const getRouteObject = ( routeString: LayoutRouteId ) => {

	const matchingRoute = routes.find( route => route.route === routeString )
	return matchingRoute || errortRoute

}

export const load = async ( { data, route } ) => {

	const { i18n, translations } = data
	const { lang }               = i18n
	const i18nRoute              = i18n.route

	addTranslations( translations )

	await setRoute( i18nRoute )
	await setLocale( lang )

	return {
		...i18n,
		...getRouteObject( route.id ),
		routes,
		classes : styleClass,
	}

}
