/**
 * DEFINE DEFAULT BORDER FILTERS.
 *
 * @description Function to return default filters.
 */

import {
	filterCustomIds, filterCustomTypesIds, unitValues, type IFiltersCustom, 
} from '../../types'

export const customBorder: IFiltersCustom = [
	{
		id    : filterCustomIds.borderWidth,
		type  : filterCustomTypesIds.range,
		title : {
			value : 'Size',
		},
		value : 0,
		opts  : {
			step : 1,
			min  : 0,
			max  : 100,
			unit : unitValues.px,
		},
	},
	{
		id    : filterCustomIds.borderRadius,
		type  : filterCustomTypesIds.range,
		title : {
			value : 'Radius',
		},
		value : 0,
		opts  : {
			step : 1,
			min  : 0,
			max  : 200,
			unit : {
				opts : [
					{
						value : unitValues.x100,
					},
					{
						value : unitValues.px,
					},
				],
				value : unitValues.x100,
			},
		},
	},
	{
		id    : filterCustomIds.borderStyle,
		type  : filterCustomTypesIds.select,
		title : {
			value : 'Style',
		},
		value : 'solid',
		opts  : [
			{
				value : 'solid',
				name  : 'Solid',
			},
			{
				value : 'dashed',
				name  : 'Dashed',
			},
			{
				value : 'groove',
				name  : 'Groove',
			},
			{
				value : 'dotted',
				name  : 'Dotted',
			},
			{
				value : 'double',
				name  : 'Double',
			},
		],
	},
	{
		id    : filterCustomIds.borderColor,
		type  : filterCustomTypesIds.colorPicker,
		title : {
			value : 'Color',
		},
		value : 'rgba(255, 255, 255, 1)', // Please in RGBA for detect default value on change 
	},
]
