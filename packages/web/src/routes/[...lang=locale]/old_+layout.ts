/**
 * TODO.
 *
 * @description TODO.
 */
import type { ComponentFilters }           from '$lib'
import { defaultLocale, loadTranslations } from '$lib/i18n.js'
import type { LayoutRouteId }              from '../$types.js'

const defaultRoute = 	{
	route : '/',
	name  : 'Home',
	title : 'Sidebar Filters',
}
const errortRoute  = {
	route : '/',
	name  : 'Error page',
	title : 'Error Page',
}

const routes = [
	defaultRoute,
	{
		route : '/docs',
		name  : 'Documentation',
		title : 'Documentation',
	},
]

const getRouteObject = ( routeString: LayoutRouteId ) => {

	const matchingRoute = routes.find( route => route.route === routeString )
	return matchingRoute || errortRoute

}

// eslint-disable-next-line arrow-parens
export const load = async ( { url, route } ) => {

	const { pathname } = url

	const filterID                                    = 'pp-super8-custom'
	const filterOpts: Omit<ComponentFilters, 'type' > = {
		active : true,
		id     : 'ps-s8-styles',
		btn    : { 
			title : 'Super8',
		},
		// content:{
		//   allowedItems: [
		//     allowedFilterTabs.custom,
		//     allowedFilterTabs.preset
		//   ],
		// },
		content     : undefined,
		locales     : undefined,
		toSelectors : [ 
			'#' + filterID,
		],
		document : undefined,
	}

	const pageContent    = 'm-8 flex items-center justify-center'
	const pageContentRow = pageContent + ' flex-row'
	const pageContentCol = pageContent + ' flex-col'
	const fontColor      = 'text-gray-800 dark:text-gray-50'

	await loadTranslations( defaultLocale, pathname ) // keep this just before the `return`

	return {
		...getRouteObject( route.id ),
		routes,
		iframe : {
			src : 'https://www.youtube.com/embed/XnmgbZdcRl4?si=95o6RDvy4QSMUp46&amp;start=5617',
		},
		filterID,
		filterOpts,
		classes : {
			pageContentRow,
			pageContentCol,
			fontColor,
		},
	}

}
