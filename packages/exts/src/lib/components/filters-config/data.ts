/**
 * Filter config data.
 *
 * @description This file defines Filter config data.
 */

import {
	componentPositions, componentTypes, 
}                          from '@s-8/core'
import {
	optionsIds, type ComponentOptionsRecursive, optBtnStylesIds, 
} from '../../types'
import { browser } from '../../_shared/main'

export const defaultData = {
	[optionsIds.filtersSidebar.display] : {
		defaultValue : true,
	},
	[optionsIds.filtersSidebar.insidePlayer] : {
		defaultValue : false,
	},
	[optionsIds.filtersSidebar.popupPosition] : {
		defaultValue : componentPositions.filters.sidebar.right,
	},
	[optionsIds.filtersSidebar.buttonPosition] : {
		defaultValue : componentPositions.filters.btn.bottomLeft,
	},
	[optionsIds.filtersSidebar.styleTheme] : {
		defaultValue : optBtnStylesIds.theme,
	},
}

export const data: ComponentOptionsRecursive = [
	{
		type  : componentTypes.option.section,
		title : {
			value : browser.i18n.getMessage( 'opts_filters_popup' ),
			desc  : browser.i18n.getMessage( 'opts_filters_popup_description' ),
		},
		value : [
			{
				id   : optionsIds.filtersSidebar.popupPosition,
				type : componentTypes.option.radio,
				opts : [
					{ 
						name  : browser.i18n.getMessage( 'opts_filters_popup_position_left' ), 
						value : componentPositions.filters.sidebar.left, 
					},
					{ 
						name  : browser.i18n.getMessage( 'opts_filters_popup_position_right' ),
						value : componentPositions.filters.sidebar.right, 
					},
				],
				value : defaultData[optionsIds.filtersSidebar.popupPosition].defaultValue,
				title : {
					value : browser.i18n.getMessage( 'opts_filters_popup_position' ),
				},
			},
		],
	},
	{
		type  : componentTypes.option.section,
		title : {
			value : browser.i18n.getMessage( 'opts_filters_btn' ),
			desc  : browser.i18n.getMessage( 'opts_filters_btn_description' ),
		},
		value : [
			{
				id    : optionsIds.filtersSidebar.display,
				type  : componentTypes.option.checkbox,
				title : {
					value : browser.i18n.getMessage( 'opts_filters_btn_display' ),
					desc  : browser.i18n.getMessage( 'opts_filters_btn_display_description' ),
				},
				value : defaultData[optionsIds.filtersSidebar.display].defaultValue,
			},
			{
				id    : optionsIds.filtersSidebar.insidePlayer,
				type  : componentTypes.option.checkbox,
				title : {
					value : browser.i18n.getMessage( 'opts_filters_btn_insidePlaye' ) + ' (beta)',
					desc  : browser.i18n.getMessage( 'opts_filters_btn_insidePlayer_description' ),
				},
				disabled : browser.i18n.getMessage( 'opts_allowedSites_comingsoon' ),
				value    : defaultData[optionsIds.filtersSidebar.insidePlayer].defaultValue,
			},
			{
				id   : optionsIds.filtersSidebar.buttonPosition,
				type : componentTypes.option.select,
				opts : [
					{ 
						name  : browser.i18n.getMessage( 'opts_filters_btn_position_bottomLeft' ), 
						value : componentPositions.filters.btn.bottomLeft, 
					},
					{ 
						name  : browser.i18n.getMessage( 'opts_filters_btn_position_bottomRight' ), 
						value : componentPositions.filters.btn.bottomRight, 
					},
					{ 
						name  : browser.i18n.getMessage( 'opts_filters_btn_position_topLeft' ), 
						value : componentPositions.filters.btn.topLeft, 
					},
					{ 
						name  : browser.i18n.getMessage( 'opts_filters_btn_position_topRight' ), 
						value : componentPositions.filters.btn.topRight, 
					},
					// { 
					// 	name  : browser.i18n.getMessage( 'opts_filters_btn_position_none' ), 
					// 	value : componentPositions.filters.btn.none, 
					// },
				],
				value : defaultData[optionsIds.filtersSidebar.buttonPosition].defaultValue,
				title : {
					value : browser.i18n.getMessage( 'opts_filters_btn_position' ), 
					desc  : browser.i18n.getMessage( 'opts_filters_btn_position_description' ), 
				},
			},
			{
				id   : optionsIds.filtersSidebar.styleTheme,
				type : componentTypes.option.select,
				// disabled : browser.i18n.getMessage( 'opts_allowedSites_comingsoon' ),
				opts : [
					{ 
						name  : browser.i18n.getMessage( 'opts_filters_btn_theme_default' ), 
						value : optBtnStylesIds.theme, 
					},
					{ 
						name  : browser.i18n.getMessage( 'opts_filters_btn_theme_minimal' ), 
						value : optBtnStylesIds.minimal,
					},
					{ 
						name  : browser.i18n.getMessage( 'opts_filters_btn_theme_minimal_dark' ), 
						value : optBtnStylesIds.minimalDark, 
					},
				],
				value : defaultData[optionsIds.filtersSidebar.styleTheme].defaultValue,
				title : {
					value : browser.i18n.getMessage( 'opts_filters_btn_theme' ), 
					desc  : browser.i18n.getMessage( 'opts_filters_btn_theme_description' ), 
				},
			},
		],
	},
]
