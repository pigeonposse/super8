/**
 * Options Data for Allowed Sites.
 *
 * @description This module defines default data for 'allowed sites' options and 
 *  the component structure for the options page.
 */

import { componentTypes }          from '@s-8/core'
import {
	type AllowedSites, 
	type ComponentOptionsRecursive,
} from '../../types'
import {
	optionsIds, 
	insertedAdjacentPosition, 
} from '../../const'
import { browser }    from '../../_shared/browser/main'
import { allowSites } from '../../../man/manifest'

export const defaultData: AllowedSites = {
	[optionsIds.allowSites.youtube] : {
		urlStarts     : allowSites.youtube,
		// CHECKED
		videoSelector : [
			'video', 
		],
		defaultValue   : true,
		selectorForBtn : [
			{
				position : insertedAdjacentPosition.afterbegin,
				query    : '.ytp-right-controls',
			}, 
		],
	},
	[optionsIds.allowSites.vimeo] : {
		urlStarts     : allowSites.vimeo,
		// CHECKED but in home page multiple videos are with filters, maybe is not ok for user (?)
		videoSelector : [
			'video', 
		],
		defaultValue   : true,
		selectorForBtn : [
			{
				position : insertedAdjacentPosition.afterend,
				query    : 'video',
			}, 
		],
	},
	[optionsIds.allowSites.twitch] : {
		urlStarts     : allowSites.twitch,
		// CHECKED
		videoSelector : [
			'video', 
		],
		defaultValue   : false,
		selectorForBtn : [
			{
				position : insertedAdjacentPosition.afterbegin,
				query    : '.player-controls__right-control-group',
			}, 
		],
	},
	[optionsIds.allowSites.filmin] : {
		urlStarts     : allowSites.filmin,
		// HALF CHECKED 
		videoSelector : [
			'video', 
		],
		defaultValue   : false,
		selectorForBtn : [
			{
				position : insertedAdjacentPosition.afterend,
				query    : 'video',
			}, 
		],
	},
	[optionsIds.allowSites.disney] : {
		urlStarts     : allowSites.disney,
		// HALF CHECKED because the element video exist but is not tested
		videoSelector : [
			'video', 
		],
		defaultValue   : false,
		selectorForBtn : [
			{
				position : insertedAdjacentPosition.afterend,
				query    : 'video',
			}, 
		],
	},
	[optionsIds.allowSites.netflix] : {
		urlStarts     : allowSites.netflix,
		videoSelector : [
			'video', 
		],
		defaultValue   : false,
		selectorForBtn : [
			{
				position : insertedAdjacentPosition.afterend,
				query    : 'video',
			}, 
		],
	},
	[optionsIds.allowSites.primevideo] : {
		urlStarts     : allowSites.primevideo,
		videoSelector : [
			'video', 
		],
		defaultValue   : false,
		selectorForBtn : [
			{
				position : insertedAdjacentPosition.afterend,
				query    : 'video',
			}, 
		],
	},
}

export const data: ComponentOptionsRecursive = [
	{
		type  : componentTypes.option.section,
		title : {
			value : browser.i18n.getMessage( 'opts_allowedSites' ),
		},
		value : [
			{
				id    : optionsIds.allowSites.youtube,
				type  : componentTypes.option.checkbox,
				title : {
					value : browser.i18n.getMessage( 'opts_allowedSites_youtube' ),
					link  : 'https://youtube.com',
				},
				value : defaultData[optionsIds.allowSites.youtube].defaultValue,
			},
			{
				id    : optionsIds.allowSites.vimeo,
				type  : componentTypes.option.checkbox,
				title : {
					value : browser.i18n.getMessage( 'opts_allowedSites_vimeo' ),
					link  : 'https://vimeo.com',
				},
				value : defaultData[optionsIds.allowSites.vimeo].defaultValue,
			},
			{
				id    : optionsIds.allowSites.twitch,
				type  : componentTypes.option.checkbox,
				title : {
					value : browser.i18n.getMessage( 'opts_allowedSites_twitch' ),
					link  : 'https://twitch.tv',
				},
				value : defaultData[optionsIds.allowSites.twitch].defaultValue,
			},
			{
				id    : optionsIds.allowSites.disney,
				// disabled : browser.i18n.getMessage( 'opts_allowedSites_comingsoon' ),
				type  : componentTypes.option.checkbox,
				title : {
					value : browser.i18n.getMessage( 'opts_allowedSites_disney' ),
					link  : 'https://disneyplus.com',
				},
				value : defaultData[optionsIds.allowSites.disney].defaultValue,
			},
			{
				id       : optionsIds.allowSites.netflix,
				disabled : browser.i18n.getMessage( 'opts_allowedSites_comingsoon' ),
				type     : componentTypes.option.checkbox,
				title    : {
					value : browser.i18n.getMessage( 'opts_allowedSites_netflix' ),
					link  : 'https://netflix.com',
				},
				value : defaultData[optionsIds.allowSites.netflix].defaultValue,
			},
			{
				id       : optionsIds.allowSites.primevideo,
				disabled : browser.i18n.getMessage( 'opts_allowedSites_comingsoon' ),
				type     : componentTypes.option.checkbox,
				title    : {
					value : browser.i18n.getMessage( 'opts_allowedSites_primevideo' ),
					link  : 'https://primevideo.com',
				},
				value : defaultData[optionsIds.allowSites.primevideo].defaultValue,
			},
			{
				id    : optionsIds.allowSites.filmin,
				// disabled : browser.i18n.getMessage( 'opts_allowedSites_comingsoon' ),
				type  : componentTypes.option.checkbox,
				title : {
					value : browser.i18n.getMessage( 'opts_allowedSites_filmin' ),
					link  : 'https://filmin.es',
				},
				value : defaultData[optionsIds.allowSites.filmin].defaultValue,
			},
		],
	},
]
