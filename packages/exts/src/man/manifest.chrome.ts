/**
 * Todo.
 *
 * @description Todo.
 */

/* eslint-disable camelcase */

import{ manifest as man, icons, path, csp, imagesFolder, contentMatches } from './manifest'

const icon = {
	'16'  : icons[16],
	'32'  : icons[32],
	'48'  : icons[48],
	'128' : icons[128],
}
export const manifestChrome = {
	manifest_version : 3,
	icons            : icon,
	background       : {
		service_worker : path.backgroundMain,
		type           : 'module',
	},
	options_ui : {
		page        : path.optionsHTML,
		open_in_tab : true,
	},
	action : {
		default_title : man.name,
		default_popup : path.popupHTML,
		default_icon  : icon,
	},
	permissions : [ 
		'storage', 
		'contextMenus',
		'tabs',
		'activeTab',
	],
	web_accessible_resources : [
		{
			resources : [ imagesFolder + '*' ],
			matches   : contentMatches,
		},
	],
	content_security_policy : {
		extension_pages : csp,
	},
	...man,
}
