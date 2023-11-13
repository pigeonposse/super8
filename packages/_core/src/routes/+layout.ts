/**
 * TODO.
 *
 * @description TODO.
 */
import {
	componentTypes, type ComponentFilters, 
} from '$lib'
import type { LayoutRouteId } from './$types.js'

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
		route : '/filters',
		name  : 'Filters',
		title : 'Static Filters',
	},
	{
		route : '/options',
		name  : 'Options',
		title : 'Option types',
	},
	{
		route : '/more',
		name  : '+ Components',
		title : '+ Components',
	},
]

const getRouteObject = ( routeString: LayoutRouteId ) => {

	const matchingRoute = routes.find( route => route.route === routeString )
	return matchingRoute || errortRoute

}

// eslint-disable-next-line arrow-parens
export const load = async ( args ) => {

	const filterOpts: Omit<ComponentFilters, 'type' > = {
		active : true,
		id     : 'ps-s8-styless',
		btn    : { 
			title     : 'Super 8',
			indicator : {
				type : componentTypes.indicator.main,
			},
		},
		// content:{
		//   allowedItems: [
		//     allowedFilterTabs.custom,
		//     allowedFilterTabs.preset
		//   ],
		// },
		content     : undefined,
		position    : 'right',
		locales     : undefined,
		toSelectors : [ 
			'iframe',
		],
		document : undefined,
	}

	const pageContent    = 'm-8 flex items-center justify-center'
	const pageContentRow = pageContent + ' flex-row'
	const pageContentCol = pageContent + ' flex-col'
	const fontColor      = 'text-gray-800 dark:text-gray-50'

	return {
		...getRouteObject( args.route.id ),
		routes,
		iframe : {
			loading : 'lazy' as const,
			src     : 'https://www.youtube.com/embed/XnmgbZdcRl4?si=95o6RDvy4QSMUp46&amp;start=5617',
			allow   : 'autoplay',
			title   : 'YouTube video player',
		},
		filterOpts,
		classes : {
			pageContentRow,
			pageContentCol,
			fontColor,
		},
	}

}
