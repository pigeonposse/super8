/**
 * Todo.
 *
 * @description Todo.
 */

import { componentTypes }                                                                          from '@s-8/core'
import { optionsIds, type AllowedSites, type ComponentOptionsRecursive, insertedAdjacentPosition } from '../../types'
import { browser }                                                                                 from '../../_shared/browser/main'

export const defaultData: AllowedSites = {
	[optionsIds.allowSites.youtube] : {
		urlStarts      : [ 'https://www.youtube.com/' ],
		// CHECKED
		videoSelector  : [ 'video' ],
		defaultValue   : true,
		selectorForBtn : [ {
			position : insertedAdjacentPosition.afterbegin,
			query    : '.ytp-right-controls',
		} ],
	},
	[optionsIds.allowSites.vimeo] : {
		urlStarts      : [ 'https://vimeo.com/' ],
		// CHECKED but in home page multiple videos are with filters, maybe is not ok for user (?)
		videoSelector  : [ 'video' ],
		defaultValue   : true,
		selectorForBtn : [ {
			position : insertedAdjacentPosition.afterend,
			query    : 'video',
		} ],
	},
	[optionsIds.allowSites.twitch] : {
		urlStarts      : [ 'https://www.twitch.tv/' ],
		// CHECKED
		videoSelector  : [ 'video' ],
		defaultValue   : false,
		selectorForBtn : [ {
			position : insertedAdjacentPosition.afterbegin,
			query    : '.player-controls__right-control-group',
		} ],
	},
	[optionsIds.allowSites.filmin] : {
		urlStarts      : [ 'https://www.filmin.es/' ],
		// HALF CHECKED 
		videoSelector  : [ 'video' ],
		defaultValue   : false,
		selectorForBtn : [ {
			position : insertedAdjacentPosition.afterend,
			query    : 'video',
		} ],
	},
	[optionsIds.allowSites.disney] : {
		urlStarts      : [ 'https://www.disneyplus.com/' ],
		// HALF CHECKED because the element video exist but is not tested
		videoSelector  : [ 'video' ],
		defaultValue   : false,
		selectorForBtn : [ {
			position : insertedAdjacentPosition.afterend,
			query    : 'video',
		} ],
	},
	[optionsIds.allowSites.netflix] : {
		urlStarts      : [ 'https://www.netflix.com/' ],
		videoSelector  : [ 'video' ],
		defaultValue   : false,
		selectorForBtn : [ {
			position : insertedAdjacentPosition.afterend,
			query    : 'video',
		} ],
	},
	[optionsIds.allowSites.primevideo] : {
		urlStarts      : [ 'https://www.primevideo.com/' ],
		videoSelector  : [ 'video' ],
		defaultValue   : false,
		selectorForBtn : [ {
			position : insertedAdjacentPosition.afterend,
			query    : 'video',
		} ],
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
				},
				value : defaultData[optionsIds.allowSites.youtube].defaultValue,
			},
			{
				id    : optionsIds.allowSites.vimeo,
				type  : componentTypes.option.checkbox,
				title : {
					value : browser.i18n.getMessage( 'opts_allowedSites_vimeo' ),
				},
				value : defaultData[optionsIds.allowSites.vimeo].defaultValue,
			},
			{
				id    : optionsIds.allowSites.twitch,
				type  : componentTypes.option.checkbox,
				title : {
					value : browser.i18n.getMessage( 'opts_allowedSites_twitch' ),
				},
				value : defaultData[optionsIds.allowSites.twitch].defaultValue,
			},
			{
				id    : optionsIds.allowSites.disney,
				// disabled : browser.i18n.getMessage( 'opts_allowedSites_comingsoon' ),
				type  : componentTypes.option.checkbox,
				title : {
					value : browser.i18n.getMessage( 'opts_allowedSites_disney' ),
				},
				value : defaultData[optionsIds.allowSites.disney].defaultValue,
			},
			{
				id       : optionsIds.allowSites.netflix,
				disabled : browser.i18n.getMessage( 'opts_allowedSites_comingsoon' ),
				type     : componentTypes.option.checkbox,
				title    : {
					value : browser.i18n.getMessage( 'opts_allowedSites_netflix' ),
				},
				value : defaultData[optionsIds.allowSites.netflix].defaultValue,
			},
			{
				id       : optionsIds.allowSites.primevideo,
				disabled : browser.i18n.getMessage( 'opts_allowedSites_comingsoon' ),
				type     : componentTypes.option.checkbox,
				title    : {
					value : browser.i18n.getMessage( 'opts_allowedSites_primevideo' ),
				},
				value : defaultData[optionsIds.allowSites.primevideo].defaultValue,
			},
			{
				id    : optionsIds.allowSites.filmin,
				// disabled : browser.i18n.getMessage( 'opts_allowedSites_comingsoon' ),
				type  : componentTypes.option.checkbox,
				title : {
					value : browser.i18n.getMessage( 'opts_allowedSites_filmin' ),
				},
				value : defaultData[optionsIds.allowSites.filmin].defaultValue,
			},
		],
	},
]
