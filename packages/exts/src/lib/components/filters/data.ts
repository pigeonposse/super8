/**
 * Default Filter data.
 *
 * @description This file defines default filter options and button styles for the application.
 */
import { type BtnStylesClasses } from '../../types'
import { optBtnStylesIds }       from '../../const'
import {
	componentPositions,
	componentTypes, 
	type ComponentFilters,
} from '@s-8/core'
import { browser } from '../../_shared/main'

const filterOpts: Partial<ComponentFilters> = {
	btn : {
		title     : browser.i18n.getMessage( 'filters_btn' ),
		position  : componentPositions.filters.btn.bottomLeft,
		color     : componentTypes.btn.primary,
		indicator : {
			type : componentTypes.indicator.main,
		},
	},
	position    : componentPositions.filters.sidebar.right,
	toSelectors : [ 
		'video',
	],
}

const btnClasses: BtnStylesClasses = {
	[optBtnStylesIds.theme]       : componentTypes.btn.primary,
	[optBtnStylesIds.minimal]     : componentTypes.btn.neutral,
	[optBtnStylesIds.minimalDark] : componentTypes.btn.gray,
}

export const defaults = {
	btnClasses,
	filterOpts,
}
  
