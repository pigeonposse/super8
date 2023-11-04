/**
 * Todo.
 *
 * @description Todo.
 */

import { filterCustomIds } from '$lib'
import { t }               from '$lib/i18n'
import { derived }         from 'svelte/store'

export const locales =  derived( t, $t => {
 
	return {
		filters : {
			limit : {
				optionBlock  : 'Limit exceeded',
				limitAllowed : 'Number of options allowed:',
				nots         : {
					onLimit : 'You have set the limit of allowed options in the settings. Reset if you want to try new settings.',
				},
			},
			reset : {
				title : $t( 'home.filters_reset.message' ),
				desc  : $t( 'home.filters_reset_desc.message' ),
			},
			hide : {
				title : $t( 'home.filters_hide.message' ),
				desc  : $t( 'home.filters_hide_desc.message' ),
			},
			show : {
				title : $t( 'home.filters_show.message' ),
				desc  : $t( 'home.filters_show_desc.message' ),
			},
			presets : {
				title    : $t( 'home.filters_presets.message' ),
				desc     : $t( 'home.filters_presets_desc.message' ),
				official : {
					title : $t( 'home.filters_presets_official.message' ),
					desc  : $t( 'home.filters_presets_official_desc.message' ),
				},
				user : {
					title     : $t( 'home.filters_presets_user.message' ),
					desc      : $t( 'home.filters_presets_user_desc.message' ),
					none      : $t( 'home.filters_presets_user_none.message' ),
					btnRemove : $t( 'home.filters_presets_user_btnRemove.message' ),
				},
			},
			more : {
				title : $t( 'home.filters_more.message' ),
				desc  : $t( 'home.filters_more_desc.message' ),
				copy  : {
					title : $t( 'home.filters_more_copy.message' ),
					desc  : $t( 'home.filters_more_copy_desc.message' ),
					btn   : {
						title   : $t( 'home.filters_more_copy_btn.message' ),
						onClick : $t( 'home.filters_more_copy_btn_onClick.message' ),
					},
					nots : {
						success : $t( 'home.filters_more_copy_nots_success.message' ),
					},
				},
				addPresets : {
					title     : $t( 'home.filters_more_addPresets.message' ),
					desc      : $t( 'home.filters_more_addPresets_desc.message' ),
					inputName : {
						title       : $t( 'home.filters_more_addPresets_inputName.message' ),
						desc        : $t( 'home.filters_more_addPresets_inputName_desc.message' ),
						placeholder : $t( 'home.filters_more_addPresets_inputName_placeholder.message' ),
					},
					inputObject : {
						title       : $t( 'home.filters_more_addPresets_inputObject.message' ),
						desc        : $t( 'home.filters_more_addPresets_inputObject_desc.message' ),
						placeholder : $t( 'home.filters_more_addPresets_inputObject_placeholder.message' ),
					},
					btn : {
						title : $t( 'home.filters_more_addPresets_btn.message' ),
					},
					nots : {
						success     : $t( 'home.filters_more_addPresets_nots_success.message' ),
						errorName   : $t( 'home.filters_more_addPresets_nots_errorName.message' ),
						errorObject : $t( 'home.filters_more_addPresets_nots_errorObject.message' ),
					},
				},
			},
			custom : {
				title  : $t( 'home.filters_custom.message' ),
				desc   : $t( 'home.filters_custom_desc.message' ),
				border : {
					title  : $t( 'home.filters_custom_border.message' ),
					// desc   : $t( 'home.filters_custom_border_desc.message' ),
					desc   : '',
					values : {
						[filterCustomIds.borderWidth] : {
							title : $t( 'home.filters_custom_values_borderWidth.message' ),
							desc  : $t( 'home.filters_custom_values_borderWidth_desc.message' ),
						},
						[filterCustomIds.borderRadius] : {
							title : $t( 'home.filters_custom_values_borderRadius.message' ),
							desc  : $t( 'home.filters_custom_values_borderRadius_desc.message' ),
						},
						[filterCustomIds.borderStyle] : {
							title : $t( 'home.filters_custom_values_borderStyle.message' ),
							desc  : $t( 'home.filters_custom_values_borderStyle_desc.message' ),
						},
						[filterCustomIds.borderColor] : {
							title : $t( 'home.filters_custom_values_borderColor.message' ),
							desc  : $t( 'home.filters_custom_values_borderColor_desc.message' ),
						},
					},
				},
				shadow : {
					title  : $t( 'home.filters_custom_values_shadow.message' ),
					// desc   : $t( 'home.filters_custom_values_shadow_desc.message' ),
					desc   : '',
					values : {
						[filterCustomIds.shadowX] : {
							title : $t( 'home.filters_custom_values_shadowX.message' ),
							desc  : $t( 'home.filters_custom_values_shadowX_desc.message' ),
						},
						[filterCustomIds.shadowY] : {
							title : $t( 'home.filters_custom_values_shadowY.message' ),
							desc  : $t( 'home.filters_custom_values_shadowY_desc.message' ),
						},
						[filterCustomIds.shadowSpread] : {
							title : $t( 'home.filters_custom_values_shadowSpread.message' ),
							desc  : $t( 'home.filters_custom_values_shadowSpread_desc.message' ),
						},
						[filterCustomIds.shadowBlur] : {
							title : $t( 'home.filters_custom_values_shadowBlur.message' ),
							desc  : $t( 'home.filters_custom_values_shadowBlur_desc.message' ),
						},
						[filterCustomIds.shadowInset] : {
							title : $t( 'home.filters_custom_values_shadowInset.message' ),
							desc  : $t( 'home.filters_custom_values_shadowInset_desc.message' ),
						},
						[filterCustomIds.shadowColor] : {
							title : $t( 'home.filters_custom_values_shadowColor.message' ),
							desc  : $t( 'home.filters_custom_values_shadowColor_desc.message' ),
						},
					},
				},
				filter : {
					title  : $t( 'home.filters_custom_values_filter.message' ),
					// desc   : $t( 'home.filters_custom_values_filter_desc.message' ),
					desc   : '',
					values : {
						[filterCustomIds.filterBlur] : {
							title : $t( 'home.filters_custom_values_filterBlur.message' ),
							desc  : $t( 'home.filters_custom_values_filterBlur_desc.message' ),
						},
						[filterCustomIds.filterBrightness] : {
							title : $t( 'home.filters_custom_values_filterBrightness.message' ),
							desc  : $t( 'home.filters_custom_values_filterBrightness_desc.message' ),
						},
						[filterCustomIds.filterContrast] : {
							title : $t( 'home.filters_custom_values_filterContrast.message' ),
							desc  : $t( 'home.filters_custom_values_filterContrast_desc.message' ),
						},
						[filterCustomIds.filterGrayscale] : {
							title : $t( 'home.filters_custom_values_filterGrayscale.message' ),
							desc  : $t( 'home.filters_custom_values_filterGrayscale_desc.message' ),
						},
						[filterCustomIds.filterHueRotate] : {
							title : $t( 'home.filters_custom_values_filterHueRotate.message' ),
							desc  : $t( 'home.filters_custom_values_filterHueRotate_desc.message' ),
						},
						[filterCustomIds.filterInvert] : {
							title : $t( 'home.filters_custom_values_filterInvert.message' ),
							desc  : $t( 'home.filters_custom_values_filterInvert_desc.message' ),
						},
						[filterCustomIds.filterOpacity] : {
							title : $t( 'home.filters_custom_values_filterOpacity.message' ),
							desc  : $t( 'home.filters_custom_values_filterOpacity_desc.message' ),
						},
						[filterCustomIds.filterSaturation] : {
							title : $t( 'home.filters_custom_values_filterSaturation.message' ),
							desc  : $t( 'home.filters_custom_values_filterSaturation_desc.message' ),
						},
						[filterCustomIds.filterSepia] : {
							title : $t( 'home.filters_custom_values_filterSepia.message' ),
							desc  : $t( 'home.filters_custom_values_filterSepia_desc.message' ),
						},
					},
				},
				animation : {
					title : $t( 'home.filters_custom_values_animation.message' ),
					// desc  : $t( 'home.filters_custom_values_animation_desc.message' ),
					desc  : '',
					nots  : {
						comingsoon : {
							title : $t( 'home.filters_custom_values_animation_nots_comingsoon.message' ),
							desc  : $t( 'home.filters_custom_values_animation_nots_comingsoon_desc.message' ),
						},
					},
				},
				addPreset : {
					title : $t( 'home.filters_custom_values_addPreset.message' ),
					desc  : $t( 'home.filters_custom_values_addPreset_desc.message' ),
				},
			},
		},
		copyBtn : {
			value  : $t( 'home.copyBtn.message' ),
			copied : $t( 'home.copyBtn_copied.message' ),
		},
		iframe : {
			title       : $t( 'home.iframe_title.message' ),
			error       : $t( 'home.iframe_error.message' ),
			add         : $t( 'home.iframe_add.message' ),
			placeholder : $t( 'home.iframe_input_placeholder.message' ),
		},
		title       : $t( 'home.title.message' ),
		description : $t( 'home.description.message' ),
		ad          : {
			placeholder : $t( 'home.ad_placeholder.message' ),
		},
	}

} )
