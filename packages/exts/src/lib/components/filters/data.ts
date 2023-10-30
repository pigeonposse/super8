/**
 * Todo.
 *
 * @description Todo.
 */

import { componentPositions, componentTypes, type ComponentFilters } from '@super8/core'
import { browser }                                                   from '../../_shared/main'
import { optBtnStylesIds, type BtnStylesClasses }                    from '../../types'

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
  
