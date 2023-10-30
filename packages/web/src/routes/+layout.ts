/**
 * TODO.
 *
 * @description TODO.
 */
import { addTranslations, setLocale, setRoute } from '$lib/i18n'
import { styleClass, type ComponentFilters }    from '$lib'
import type { LayoutRouteId }                   from './$types.js'

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

export const load = async ( { data, route } ) => {

	const { i18n, translations } = data
	const { lang }               = i18n
	const i18nRoute              = i18n.route

	addTranslations( translations )

	await setRoute( i18nRoute )
	await setLocale( lang )

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
		// optionsLimit : 5,
	}

	return {
		...i18n,
		...getRouteObject( route.id ),
		routes,
		classes : styleClass,
		iframe  : {
			src : 'https://www.youtube.com/embed/wdTo_Kihcyw?si=ft5lmO6GP3GXi6e_',
		},
		filterID,
		filterOpts,
	}

}
