/**
 * DEFINE DEFAULT FILTERS.
 *
 * @description Function to return default filters.
 */

import { customBorder }            from './custom-border'
import { customFilter }            from './custom-filter'
import { customShadow }            from './custom-shadow'
import type { IFiltersCustomOpts } from '../../types'

export const custom : IFiltersCustomOpts = {
	filter : {
		title : {
			value : 'Filters',
			desc  : 'Add filters to video',
		},
		value : customFilter,
	},
	border : {
		title : {
			value : 'Border',
			desc  : 'Change border style to video',
		},
		value : customBorder,
	},
	shadow : {
		title : {
			value : 'Shadow',
			desc  : 'Change shadow to video',
		},
		value : customShadow,
	},
}

export const allCustom = [
	...customBorder,
	...customShadow,
	...customFilter,
]
