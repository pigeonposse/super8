/**
 * DEFINE DEFAULT CUSTOM FILTERS.
 *
 * @description Function to return default filters.
 */

import {
	filterCustomIds, filterCustomTypesIds, unitValues, type IFiltersCustom, 
} from '../../types'

export const customFilter: IFiltersCustom = [
	{
		id    : filterCustomIds.filterBrightness,
		type  : filterCustomTypesIds.range,
		title : {
			value : 'Brightness',
		},
		value : 100,
		opts  : {
			step : 1,
			min  : 0,
			max  : 300,
			unit : unitValues.x100,
		},
	},
	{
		id    : filterCustomIds.filterContrast,
		type  : filterCustomTypesIds.range,
		title : {
			value : 'Contrast',
		},
		value : 100,
		opts  : {
			step : 1,
			min  : 0,
			max  : 1000,
			unit : unitValues.x100,
		},
	},
	{
		id    : filterCustomIds.filterGrayscale,
		type  : filterCustomTypesIds.range,
		title : {
			value : 'Grayscale',
		},
		value : 0,
		opts  : {
			step : 1,
			min  : 0,
			max  : 100,
			unit : unitValues.x100,
		},
	},
	{
		id    : filterCustomIds.filterHueRotate,
		type  : filterCustomTypesIds.range,
		title : {
			value : 'Hue rotate',
		},
		value : 0,
		opts  : {
			step : 1,
			min  : 0,
			max  : 360,
			unit : unitValues.deg,
		},
	},
	{
		id    : filterCustomIds.filterInvert,
		type  : filterCustomTypesIds.range,
		title : {
			value : 'Invert',
		},
		value : 0,
		opts  : {
			step : 1,
			min  : 0,
			max  : 100,
			unit : unitValues.x100,
		},
	},
	{
		id    : filterCustomIds.filterOpacity,
		type  : filterCustomTypesIds.range,
		title : {
			value : 'Opacity',
		},
		value : 100,
		opts  : {
			step : 1,
			min  : 0,
			max  : 100,
			unit : unitValues.x100,
		},
	},
	{
		id    : filterCustomIds.filterSaturation,
		type  : filterCustomTypesIds.range,
		title : {
			value : 'Saturate',
		},
		value : 100,
		opts  : {
			step : 1,
			min  : 0,
			max  : 1000,
			unit : unitValues.x100,
		},
	},
	{
		id    : filterCustomIds.filterSepia,
		type  : filterCustomTypesIds.range,
		title : {
			value : 'Sepia',
		},
		value : 0,
		opts  : {
			step : 1,
			min  : 0,
			max  : 100,
			unit : unitValues.x100,
		},
	},
	{
		id    : filterCustomIds.filterBlur,
		type  : filterCustomTypesIds.range,
		title : {
			value : 'Blur',
			desc  : 'Lorem ipsum',
		},
		value : 0,
		opts  : {
			step : 1,
			min  : 0,
			max  : 100,
			unit : unitValues.px,
		},
	},
]
