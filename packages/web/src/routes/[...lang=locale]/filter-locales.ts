/**
 * Todo.
 *
 * @description Todo.
 */

import { filterCustomIds } from '@s-8/core'

export const locales =  ( i18n: ( v: string ) => string ) => {
 
	return {
		limit : {
			optionBlock  : 'Limit exceeded',
			limitAllowed : 'Number of options allowed:',
			nots         : {
				onLimit : 'You have set the limit of allowed options in the settings. Reset if you want to try new settings.',
			},
		},
		reset : {
			title : i18n( 'home.filters_reset.message' ),
			desc  : i18n( 'home.filters_reset_desc.message' ),
		},
		hide : {
			title : i18n( 'home.filters_hide.message' ),
			desc  : i18n( 'home.filters_hide_desc.message' ),
		},
		show : {
			title : i18n( 'home.filters_show.message' ),
			desc  : i18n( 'home.filters_show_desc.message' ),
		},
		presets : {
			title    : i18n( 'home.filters_presets.message' ),
			desc     : i18n( 'home.filters_presets_desc.message' ),
			official : {
				title : i18n( 'home.filters_presets_official.message' ),
				desc  : i18n( 'home.filters_presets_official_desc.message' ),
			},
			user : {
				title     : i18n( 'home.filters_presets_user.message' ),
				desc      : i18n( 'home.filters_presets_user_desc.message' ),
				none      : i18n( 'home.filters_presets_user_none.message' ),
				btnRemove : i18n( 'home.filters_presets_user_btnRemove.message' ),
			},
		},
		more : {
			title : i18n( 'home.filters_more.message' ),
			desc  : i18n( 'home.filters_more_desc.message' ),
			copy  : {
				title : i18n( 'home.filters_more_copy.message' ),
				desc  : i18n( 'home.filters_more_copy_desc.message' ),
				btn   : {
					title   : i18n( 'home.filters_more_copy_btn.message' ),
					onClick : i18n( 'home.filters_more_copy_btn_onClick.message' ),
				},
				nots : {
					success : i18n( 'home.filters_more_copy_nots_success.message' ),
				},
			},
			addPresets : {
				title     : i18n( 'home.filters_more_addPresets.message' ),
				desc      : i18n( 'home.filters_more_addPresets_desc.message' ),
				inputName : {
					title       : i18n( 'home.filters_more_addPresets_inputName.message' ),
					desc        : i18n( 'home.filters_more_addPresets_inputName_desc.message' ),
					placeholder : i18n( 'home.filters_more_addPresets_inputName_placeholder.message' ),
				},
				inputObject : {
					title       : i18n( 'home.filters_more_addPresets_inputObject.message' ),
					desc        : i18n( 'home.filters_more_addPresets_inputObject_desc.message' ),
					placeholder : i18n( 'home.filters_more_addPresets_inputObject_placeholder.message' ),
				},
				btn : {
					title : i18n( 'home.filters_more_addPresets_btn.message' ),
				},
				nots : {
					success     : i18n( 'home.filters_more_addPresets_nots_success.message' ),
					errorName   : i18n( 'home.filters_more_addPresets_nots_errorName.message' ),
					errorObject : i18n( 'home.filters_more_addPresets_nots_errorObject.message' ),
				},
			},
		},
		custom : {
			title  : i18n( 'home.filters_custom.message' ),
			desc   : i18n( 'home.filters_custom_desc.message' ),
			border : {
				title  : i18n( 'home.filters_custom_border.message' ),
				desc   : i18n( 'home.filters_custom_border_desc.message' ),
				values : {
					[filterCustomIds.borderWidth] : {
						title : i18n( 'home.filters_custom_values_borderWidth.message' ),
						desc  : i18n( 'home.filters_custom_values_borderWidth_desc.message' ),
					},
					[filterCustomIds.borderRadius] : {
						title : i18n( 'home.filters_custom_values_borderRadius.message' ),
						desc  : i18n( 'home.filters_custom_values_borderRadius_desc.message' ),
					},
					[filterCustomIds.borderStyle] : {
						title : i18n( 'home.filters_custom_values_borderStyle.message' ),
						desc  : i18n( 'home.filters_custom_values_borderStyle_desc.message' ),
					},
					[filterCustomIds.borderColor] : {
						title : i18n( 'home.filters_custom_values_borderColor.message' ),
						desc  : i18n( 'home.filters_custom_values_borderColor_desc.message' ),
					},
				},
			},
			shadow : {
				title  : i18n( 'home.filters_custom_values_shadow.message' ),
				desc   : i18n( 'home.filters_custom_values_shadow_desc.message' ),
				values : {
					[filterCustomIds.shadowX] : {
						title : i18n( 'home.filters_custom_values_shadowX.message' ),
						desc  : i18n( 'home.filters_custom_values_shadowX_desc.message' ),
					},
					[filterCustomIds.shadowY] : {
						title : i18n( 'home.filters_custom_values_shadowY.message' ),
						desc  : i18n( 'home.filters_custom_values_shadowY_desc.message' ),
					},
					[filterCustomIds.shadowSpread] : {
						title : i18n( 'home.filters_custom_values_shadowSpread.message' ),
						desc  : i18n( 'home.filters_custom_values_shadowSpread_desc.message' ),
					},
					[filterCustomIds.shadowBlur] : {
						title : i18n( 'home.filters_custom_values_shadowBlur.message' ),
						desc  : i18n( 'home.filters_custom_values_shadowBlur_desc.message' ),
					},
					[filterCustomIds.shadowInset] : {
						title : i18n( 'home.filters_custom_values_shadowInset.message' ),
						desc  : i18n( 'home.filters_custom_values_shadowInset_desc.message' ),
					},
					[filterCustomIds.shadowColor] : {
						title : i18n( 'home.filters_custom_values_shadowColor.message' ),
						desc  : i18n( 'home.filters_custom_values_shadowColor_desc.message' ),
					},
				},
			},
			filter : {
				title  : i18n( 'home.filters_custom_values_filter.message' ),
				desc   : i18n( 'home.filters_custom_values_filter_desc.message' ),
				values : {
					[filterCustomIds.filterBlur] : {
						title : i18n( 'home.filters_custom_values_filterBlur.message' ),
						desc  : i18n( 'home.filters_custom_values_filterBlur_desc.message' ),
					},
					[filterCustomIds.filterBrightness] : {
						title : i18n( 'home.filters_custom_values_filterBrightness.message' ),
						desc  : i18n( 'home.filters_custom_values_filterBrightness_desc.message' ),
					},
					[filterCustomIds.filterContrast] : {
						title : i18n( 'home.filters_custom_values_filterContrast.message' ),
						desc  : i18n( 'home.filters_custom_values_filterContrast_desc.message' ),
					},
					[filterCustomIds.filterGrayscale] : {
						title : i18n( 'home.filters_custom_values_filterGrayscale.message' ),
						desc  : i18n( 'home.filters_custom_values_filterGrayscale_desc.message' ),
					},
					[filterCustomIds.filterHueRotate] : {
						title : i18n( 'home.filters_custom_values_filterHueRotate.message' ),
						desc  : i18n( 'home.filters_custom_values_filterHueRotate_desc.message' ),
					},
					[filterCustomIds.filterInvert] : {
						title : i18n( 'home.filters_custom_values_filterInvert.message' ),
						desc  : i18n( 'home.filters_custom_values_filterInvert_desc.message' ),
					},
					[filterCustomIds.filterOpacity] : {
						title : i18n( 'home.filters_custom_values_filterOpacity.message' ),
						desc  : i18n( 'home.filters_custom_values_filterOpacity_desc.message' ),
					},
					[filterCustomIds.filterSaturation] : {
						title : i18n( 'home.filters_custom_values_filterSaturation.message' ),
						desc  : i18n( 'home.filters_custom_values_filterSaturation_desc.message' ),
					},
					[filterCustomIds.filterSepia] : {
						title : i18n( 'home.filters_custom_values_filterSepia.message' ),
						desc  : i18n( 'home.filters_custom_values_filterSepia_desc.message' ),
					},
				},
			},
			animation : {
				title : i18n( 'home.filters_custom_values_animation.message' ),
				desc  : i18n( 'home.filters_custom_values_animation_desc.message' ),
				nots  : {
					comingsoon : {
						title : i18n( 'home.filters_custom_values_animation_nots_comingsoon.message' ),
						desc  : i18n( 'home.filters_custom_values_animation_nots_comingsoon_desc.message' ),
					},
				},
			},
			addPreset : {
				title : i18n( 'home.filters_custom_values_addPreset.message' ),
				desc  : i18n( 'home.filters_custom_values_addPreset_desc.message' ),
			},
		},
	}

}
