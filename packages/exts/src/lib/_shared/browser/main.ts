/**
 * Todo.
 *
 * @description Todo.
 */

import {
	contextMenus, i18n, menus, runtime, storage, tabs, 
} from 'webextension-polyfill'
import * as is from './is'
export const browser = {
	i18n         : i18n,
	storage      : storage,
	runtime      : runtime,
	contextMenus : contextMenus,
	menus        : menus,
	tabs         : tabs,
	...is,
}
