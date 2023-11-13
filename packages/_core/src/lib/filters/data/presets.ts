/**
 * DEFINE DEFAULTS PRESETS.
 *
 * @description Function to return defaults PRESETS.
 */

import {
	filterCustomIds, type IFiltersPresets, 
} from '../../types'

export const presets: IFiltersPresets = [
	{
		id   : 'sepia',
		name : 'Sepia',
		opts : {
			color : '#BAAE92',
		},
		value : [
			{
				id    : filterCustomIds.filterBrightness,
				value : 90,
			},
			{
				id    : filterCustomIds.filterContrast,
				value : 70,
			},
			{
				id    : filterCustomIds.filterSaturation,
				value : 90,
			},
			{
				id    : filterCustomIds.filterSepia,
				value : 100,
			},
		],
	},
	{
		id   : 'mullholland',
		name : 'Mullholland',
		opts : {
			color : '#D63032',
		},
		value : [
			{
				id    : filterCustomIds.filterContrast,
				value : 70,
			},
			{
				id    : filterCustomIds.filterHueRotate,
				value : 350,
			},
			{
				id    : filterCustomIds.filterSaturation,
				value : 300,
			},
		], 
	},
	{
		id   : 'neon',
		name : 'Neon',
		opts : {
			color : '#802B7C',
		},
		value : [
			{
				id    : filterCustomIds.filterContrast,
				value : 200,
			},
			{
				id    : filterCustomIds.filterHueRotate,
				value : 300,
			},
			{
				id    : filterCustomIds.filterSaturation,
				value : 90,
			},
		], 
	},
	{
		id   : 'sunset',
		name : 'Sunset',
		opts : {
			color : '#F1AA47',
		},
		value : [
			{
				id    : filterCustomIds.filterBrightness,
				value : 100,
			},
			{
				id    : filterCustomIds.filterContrast,
				value : 60,
			},
			{
				id    : filterCustomIds.filterSaturation,
				value : 200,
			},
		], 
	},
	{
		id   : 'road',
		name : 'Road',
		opts : {
			color : '#DF542F',
		},
		value : [
			{
				id    : filterCustomIds.filterContrast,
				value : 90,
			},
			{
				id    : filterCustomIds.filterHueRotate,
				value : 25,
			},
		],  
	},
	{
		id   : 'tokio',
		name : 'Tokio',
		opts : {
			color : '#286AA6',
		},
		value : [
			{
				id    : filterCustomIds.filterBrightness,
				value : 100,
			},
			{
				id    : filterCustomIds.filterContrast,
				value : 140,
			},
			{
				id    : filterCustomIds.filterSaturation,
				value : 100,
			},
		], 
	},
	{
		id   : 'sense',
		name : 'Sense',
		opts : {
			color : '#283278',
		},
		value : [
			{
				id    : filterCustomIds.filterBrightness,
				value : 80,
			},
			{
				id    : filterCustomIds.filterContrast,
				value : 60,
			},
			{
				id    : filterCustomIds.filterSaturation,
				value : 200,
			},
		], 
	},
	{
		id   : 'boat',
		name : 'Boat',
		opts : {
			color : '#4D4D4C',
		},
		value : [
			{
				id    : filterCustomIds.filterContrast,
				value : 90,
			},
			{
				id    : filterCustomIds.filterGrayscale,
				value : 100,
			},
		], 
	},
	{
		id   : 'vintage',
		name : 'Vintage',
		opts : {
			color : '#51341D',
		},
		value : [
			{
				id    : filterCustomIds.filterBrightness,
				value : 80,
			},
			{
				id    : filterCustomIds.filterHueRotate,
				value : 323,
			},
			{
				id    : filterCustomIds.filterSepia,
				value : 40,
			},
		],
	},
	{
		id   : 'arctic',
		name : 'Arctic',
		opts : {
			color : '#35A0CD',
		},
		value : [
			{
				id    : filterCustomIds.filterBrightness,
				value : 90,
			},
			{
				id    : filterCustomIds.filterContrast,
				value : 120,
			},
			{
				id    : filterCustomIds.filterHueRotate,
				value : 33,
			},
		],
	},
	{
		id   : 'tech',
		name : 'Tech',
		opts : {
			color : '#009849',
		},
		value : [
			{
				id    : filterCustomIds.filterBrightness,
				value : 90,
			},
			{
				id    : filterCustomIds.filterContrast,
				value : 100,
			},
			{
				id    : filterCustomIds.filterHueRotate,
				value : 30,
			},
		],
	},
	{
		id   : 'raw',
		name : 'Raw',
		opts : {
			color : '#B4B5B4',
		},
		value : [
			{
				id    : filterCustomIds.filterContrast,
				value : 150,
			},
			{
				id    : filterCustomIds.filterGrayscale,
				value : 100,
			},
		],
	},
]

