/**
 * Mozilla Extension Manifest.
 *
 * @description This is the manifest configuration for the Super 8 Mozilla extension.
 */

/* eslint-disable camelcase */

import{
	manifest as man, icons,path, csp, imagesFolder, 
} from './manifest'

const popupIcons = {
	'16'  : icons[16],
	'32'  : icons[32],
	'48'  : icons[48],
	'128' : icons[128],
}
const icon       = {
	'48' : icons[48],
	'96' : icons[96],
}

const manifestFirefoxConf = {
	manifest_version : 2,
	icons            : icon,
	background       : {
		scripts : [
			path.backgroundMain,
		],
		persistent : true,
	},
	options_ui : {
		page        : path.optionsHTML,
		open_in_tab : true,
	},
	browser_action : {
		default_title : man.name,
		default_popup : path.popupHTML,
		default_icon  : popupIcons,
	},
	permissions : [
		'storage',
		'activeTab',
		'menus',
		'contextMenus',
	],
	web_accessible_resources : [
		imagesFolder + '*', 
	],
	content_security_policy   : csp,
	browser_specific_settings : {
		gecko : {
			id : '{63bba7f4-510b-4478-b401-a2726a9703ba}', 
		},
	},
	...man,
}

export const manifestFirefox = manifestFirefoxConf
