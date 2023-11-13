/**
 * DEFINE DEFAULT SHADOW FILTERS.
 *
 * @description Function to return default filters.
 */

import {
	filterCustomIds, filterCustomTypesIds, unitValues, type IFiltersCustom, 
} from '../../types'

export const customShadow: IFiltersCustom = [
	{
		id    : filterCustomIds.shadowX,
		type  : filterCustomTypesIds.range,
		title : {
			value : 'Shift horizontal',
		},
		value : 0,
		opts  : {
			step : 1,
			min  : -100,
			max  : 100,
			unit : unitValues.px,
		},
	},
	{
		id    : filterCustomIds.shadowY,
		type  : filterCustomTypesIds.range,
		title : {
			value : 'Shift vertical',
		},
		value : 0,
		opts  : {
			step : 1,
			min  : -100,
			max  : 100,
			unit : unitValues.px,
		},
	},
	{
		id    : filterCustomIds.shadowSpread,
		type  : filterCustomTypesIds.range,
		title : {
			value : 'Spread',
		},
		value : 0,
		opts  : {
			step : 1,
			min  : -100,
			max  : 100,
			unit : unitValues.px,
		},
	},
	{
		id    : filterCustomIds.shadowBlur,
		type  : filterCustomTypesIds.range,
		title : {
			value : 'Blur',
		},
		value : 0,
		opts  : {
			step : 1,
			min  : 0,
			max  : 300,
			unit : unitValues.px,
		},
	},
	{
		id    : filterCustomIds.shadowInset,
		type  : filterCustomTypesIds.checkbox,
		title : {
			value : 'Inset',
		},
		value : false,
	},
	{
		id    : filterCustomIds.shadowColor,
		type  : filterCustomTypesIds.colorPicker,
		title : {
			value : 'Color',
		},
		value : 'rgba(77, 78, 55, 1)', // Please in RGBA and without opacity for detect default value on change 
	},
]
