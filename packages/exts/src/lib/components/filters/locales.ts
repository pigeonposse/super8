/**
 * Todo.
 *
 * @description Todo.
 */

import { filterCustomIds } from '@s-8/core'
import { browser }         from '../../_shared/main'

export const locales = {
	limit : {
		optionBlock  : 'Limit exceeded',
		limitAllowed : 'Number of options allowed:',
		nots         : {
			onLimit : 'You have set the limit of allowed options in the settings. Reset if you want to try new settings.',
		},
	},
	reset : {
		title : browser.i18n.getMessage( 'filters_reset' ),
		desc  : browser.i18n.getMessage( 'filters_reset_desc' ),
	},
	hide : {
		title : browser.i18n.getMessage( 'filters_hide' ),
		desc  : browser.i18n.getMessage( 'filters_hide_desc' ),
	},
	show : {
		title : browser.i18n.getMessage( 'filters_show' ),
		desc  : browser.i18n.getMessage( 'filters_show_desc' ),
	},
	presets : {
		title    : browser.i18n.getMessage( 'filters_presets' ),
		desc     : browser.i18n.getMessage( 'filters_presets_desc' ),
		official : {
			title : browser.i18n.getMessage( 'filters_presets_official' ),
			desc  : browser.i18n.getMessage( 'filters_presets_official_desc' ),
		},
		user : {
			title     : browser.i18n.getMessage( 'filters_presets_user' ),
			desc      : browser.i18n.getMessage( 'filters_presets_user_desc' ),
			none      : browser.i18n.getMessage( 'filters_presets_user_none' ),
			btnRemove : browser.i18n.getMessage( 'filters_presets_user_btnRemove' ),
		},
	},
	more : {
		title : browser.i18n.getMessage( 'filters_more' ),
		desc  : browser.i18n.getMessage( 'filters_more_desc' ),
		copy  : {
			title : browser.i18n.getMessage( 'filters_more_copy' ),
			desc  : browser.i18n.getMessage( 'filters_more_copy_desc' ),
			btn   : {
				title   : browser.i18n.getMessage( 'filters_more_copy_btn' ),
				onClick : browser.i18n.getMessage( 'filters_more_copy_btn_onClick' ),
			},
			nots : {
				success : browser.i18n.getMessage( 'filters_more_copy_nots_success' ),
			},
		},
		addPresets : {
			title     : browser.i18n.getMessage( 'filters_more_addPresets' ),
			desc      : browser.i18n.getMessage( 'filters_more_addPresets_desc' ),
			inputName : {
				title       : browser.i18n.getMessage( 'filters_more_addPresets_inputName' ),
				desc        : browser.i18n.getMessage( 'filters_more_addPresets_inputName_desc' ),
				placeholder : browser.i18n.getMessage( 'filters_more_addPresets_inputName_placeholder' ),
			},
			inputObject : {
				title       : browser.i18n.getMessage( 'filters_more_addPresets_inputObject' ),
				desc        : browser.i18n.getMessage( 'filters_more_addPresets_inputObject_desc' ),
				placeholder : browser.i18n.getMessage( 'filters_more_addPresets_inputObject_placeholder' ),
			},
			btn : {
				title : browser.i18n.getMessage( 'filters_more_addPresets_btn' ),
			},
			nots : {
				success     : browser.i18n.getMessage( 'filters_more_addPresets_nots_success' ),
				errorName   : browser.i18n.getMessage( 'filters_more_addPresets_nots_errorName' ),
				errorObject : browser.i18n.getMessage( 'filters_more_addPresets_nots_errorObject' ),
			},
		},
	},
	custom : {
		title  : browser.i18n.getMessage( 'filters_custom' ),
		desc   : browser.i18n.getMessage( 'filters_custom_desc' ),
		border : {
			title  : browser.i18n.getMessage( 'filters_custom_border' ),
			desc   : browser.i18n.getMessage( 'filters_custom_border_desc' ),
			values : {
				[filterCustomIds.borderWidth] : {
					title : browser.i18n.getMessage( 'filters_custom_values_borderWidth' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_borderWidth_desc' ),
				},
				[filterCustomIds.borderRadius] : {
					title : browser.i18n.getMessage( 'filters_custom_values_borderRadius' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_borderRadius_desc' ),
				},
				[filterCustomIds.borderStyle] : {
					title : browser.i18n.getMessage( 'filters_custom_values_borderStyle' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_borderStyle_desc' ),
				},
				[filterCustomIds.borderColor] : {
					title : browser.i18n.getMessage( 'filters_custom_values_borderColor' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_borderColor_desc' ),
				},
			},
		},
		shadow : {
			title  : browser.i18n.getMessage( 'filters_custom_values_shadow' ),
			desc   : browser.i18n.getMessage( 'filters_custom_values_shadow_desc' ),
			values : {
				[filterCustomIds.shadowX] : {
					title : browser.i18n.getMessage( 'filters_custom_values_shadowX' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_shadowX_desc' ),
				},
				[filterCustomIds.shadowY] : {
					title : browser.i18n.getMessage( 'filters_custom_values_shadowY' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_shadowY_desc' ),
				},
				[filterCustomIds.shadowSpread] : {
					title : browser.i18n.getMessage( 'filters_custom_values_shadowSpread' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_shadowSpread_desc' ),
				},
				[filterCustomIds.shadowBlur] : {
					title : browser.i18n.getMessage( 'filters_custom_values_shadowBlur' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_shadowBlur_desc' ),
				},
				[filterCustomIds.shadowInset] : {
					title : browser.i18n.getMessage( 'filters_custom_values_shadowInset' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_shadowInset_desc' ),
				},
				[filterCustomIds.shadowColor] : {
					title : browser.i18n.getMessage( 'filters_custom_values_shadowColor' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_shadowColor_desc' ),
				},
			},
		},
		filter : {
			title  : browser.i18n.getMessage( 'filters_custom_values_filter' ),
			desc   : browser.i18n.getMessage( 'filters_custom_values_filter_desc' ),
			values : {
				[filterCustomIds.filterBlur] : {
					title : browser.i18n.getMessage( 'filters_custom_values_filterBlur' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_filterBlur_desc' ),
				},
				[filterCustomIds.filterBrightness] : {
					title : browser.i18n.getMessage( 'filters_custom_values_filterBrightness' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_filterBrightness_desc' ),
				},
				[filterCustomIds.filterContrast] : {
					title : browser.i18n.getMessage( 'filters_custom_values_filterContrast' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_filterContrast_desc' ),
				},
				[filterCustomIds.filterGrayscale] : {
					title : browser.i18n.getMessage( 'filters_custom_values_filterGrayscale' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_filterGrayscale_desc' ),
				},
				[filterCustomIds.filterHueRotate] : {
					title : browser.i18n.getMessage( 'filters_custom_values_filterHueRotate' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_filterHueRotate_desc' ),
				},
				[filterCustomIds.filterInvert] : {
					title : browser.i18n.getMessage( 'filters_custom_values_filterInvert' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_filterInvert_desc' ),
				},
				[filterCustomIds.filterOpacity] : {
					title : browser.i18n.getMessage( 'filters_custom_values_filterOpacity' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_filterOpacity_desc' ),
				},
				[filterCustomIds.filterSaturation] : {
					title : browser.i18n.getMessage( 'filters_custom_values_filterSaturation' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_filterSaturation_desc' ),
				},
				[filterCustomIds.filterSepia] : {
					title : browser.i18n.getMessage( 'filters_custom_values_filterSepia' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_filterSepia_desc' ),
				},
			},
		},
		animation : {
			title : browser.i18n.getMessage( 'filters_custom_values_animation' ),
			desc  : browser.i18n.getMessage( 'filters_custom_values_animation_desc' ),
			nots  : {
				comingsoon : {
					title : browser.i18n.getMessage( 'filters_custom_values_animation_nots_comingsoon' ),
					desc  : browser.i18n.getMessage( 'filters_custom_values_animation_nots_comingsoon_desc' ),
				},
			},
		},
		addPreset : {
			title : browser.i18n.getMessage( 'filters_custom_values_addPreset' ),
			desc  : browser.i18n.getMessage( 'filters_custom_values_addPreset_desc' ),
		},
	},
}
