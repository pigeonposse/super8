/**
 *
 * CONSTANTS.
 *
 * @description File for set exts types.
 */

export const contentIds = {
	options : 'options',
	content : 'content',
	popup   : 'popup',
	bg      : 'background',
} as const

export const storageGroupsIds = {
	option  : 'option',
	content : 'content',
} as const
export const storageSetIds = {
	debounce : 'debounce',
	set      : 'set',
} as const
export const messagesIds = {
	log           : 'log',
	activeFilters : 'active-filters',
} as const

export const insertedAdjacentPosition = {
	beforebegin : 'beforebegin',
	afterbegin  : 'afterbegin',
	beforeend   : 'beforeend',
	afterend    : 'afterend',
}as const

export const optBtnStylesIds = {
	minimal     : 'opts-btn-styles-minimal',
	minimalDark : 'opts-btn-styles-minimal-dark',
	theme       : 'opts-btn-styles-theme',
} as const

export const storageIds = {
	options : 'options',
	active  : 'content-active',
	hide    : 'content-hide',
	values  : 'content-values',
	presets : 'content-presets',
} as const
export const optionsIds = {
	...contentIds,
	contentDiv     : 'pp-s8-content',
	filters        : 'pp-s8-extension',
	filtersSidebar : {
		display        : 'button-display',
		insidePlayer   : 'button-inside-player',
		popupPosition  : 'popup-position',
		buttonPosition : 'button-position',
		styleTheme     : 'button-style-theme',
	},
	allowSites : {
		youtube    : 'allow-youtube',
		vimeo      : 'allow-vimeo',
		twitch     : 'allow-twitch',
		filmin     : 'allow-filmin',
		netflix    : 'allow-netflix',
		disney     : 'allow-disney',
		primevideo : 'allow-primevideo',
	},
} as const

export const optionsTabs = {
	filtersSidebar : 1,
	allowSites     : 2,
	debug          : 3,
} as const
