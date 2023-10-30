/**
 * Todo.
 *
 * @description Todo.
 */
import { filterCustomIds } from '../../types'

export const locales = {
	reset : {
		title : 'Reset',
		desc  : 'Reset custom filters',
	},
	limit : {
		optionBlock  : 'Limit exceeded',
		limitAllowed : 'Number of options allowed:',
		nots         : {
			onLimit : 'You have set the limit of allowed options in the settings. Reset if you want to try new settings.',
		},
	},
	hide : {
		title : 'Hide',
		desc  : '',
	},
	show : {
		title : 'Show',
		desc  : '',
	},
	presets : {
		title    : 'Presets',
		desc     : '',
		official : {
			title : 'Official presets',
			desc  : '',
		},
		user : {
			title     : 'User presets',
			desc      : '',
			none      : 'Any custom preset is set.',
			btnRemove : 'Remove preset',
		},
	},
	more : {
		title : '+',
		desc  : 'Extra tools',
		copy  : {
			title : 'Custom values',
			desc  : '',
			btn   : {
				title   : 'Copy values',
				onClick : 'Copied succesfully',
			},
			nots : {
				success : 'Values copied successfully',
			},
		},
		addPresets : {
			title     : 'Create user preset',
			desc      : 'If you dont know how its work, check out our guide page',
			inputName : {
				title       : 'Name',
				desc        : 'Add name of your preset',
				placeholder : 'Add name of your preset',
			},
			inputObject : {
				title       : 'Custom values',
				desc        : 'Add object of custom values for your preset. Remember that the values that are omitted in your configuration will be added with the default values. For this reason, it is always better to add all fields to your configuration',
				placeholder : '// Write or copy custom presets',
			},
			btn : {
				title : 'Create user preset',
			},
			nots : {
				success     : 'Preset added successfully',
				errorName   : 'Is invalid text value',
				errorObject : 'Is invalid object value',
			},
		},
	},
	custom : {
		title  : 'Custom',
		desc   : '',
		border : {
			title  : 'Border',
			desc   : 'Change border style to video',
			values : {
				[filterCustomIds.borderWidth] : { 
					title : 'Size',
					desc  : '', 
				},
				[filterCustomIds.borderRadius] : { 
					title : 'Radius',
					desc  : '', 
				},
				[filterCustomIds.borderStyle] : { 
					title : 'Style',
					desc  : '', 
				},
				[filterCustomIds.borderColor] : { 
					title : 'Color',
					desc  : '', 
				},
			},
		},
		shadow : {
			title  : 'Shadow',
			desc   : 'Change shadow to video',
			values : {
				[filterCustomIds.shadowX] : { 
					title : 'Shift horizontal',
					desc  : '', 
				},
				[filterCustomIds.shadowY] : { 
					title : 'Shift Vertical',
					desc  : '', 
				},
				[filterCustomIds.shadowSpread] : { 
					title : 'Spread',
					desc  : '', 
				},
				[filterCustomIds.shadowBlur] : { 
					title : 'Blur',
					desc  : '', 
				},
				[filterCustomIds.shadowInset] : { 
					title : 'Inset',
					desc  : '', 
				},
				[filterCustomIds.shadowColor] : { 
					title : 'Color', 
					desc  : '', 
				},
			},
		},
		filter : {
			title  : 'Filters',
			desc   : 'Add filters to video',
			values : {
				[filterCustomIds.filterBlur] : { 
					title : 'Blur',
					desc  : '', 
				},
				[filterCustomIds.filterBrightness] : { 
					title : 'Brightness',
					desc  : '', 
				},
				[filterCustomIds.filterContrast] : { 
					title : 'Contrast',
					desc  : '', 
				},
				[filterCustomIds.filterGrayscale] : { 
					title : 'Grayscale',
					desc  : '', 
				},
				[filterCustomIds.filterHueRotate] : { 
					title : 'Hue Rotate', 
					desc  : '', 
				},
				[filterCustomIds.filterInvert] : { 
					title : 'Invert',
					desc  : '', 
				},
				[filterCustomIds.filterOpacity] : { 
					title : 'Opacity',
					desc  : '', 
				},
				[filterCustomIds.filterSaturation] : { 
					title : 'Saturate',
					desc  : '', 
				},
				[filterCustomIds.filterSepia] : { 
					title : 'Sepia',
					desc  : '', 
				},
			},
		},
		animation : {
			title : 'Animation',
			desc  : 'Add animations',
			nots  : {
				comingsoon : {
					title : 'Coming soon',
					desc  : 'This section will be available in later versions. Consider contributing to the project if you want it to be available as quickly as possible.',
				},
			},
		},
		addPreset : {
			title : 'Create user preset',
			desc  : 'Create user preset with the custom config that you set.',
		},
	},
}
