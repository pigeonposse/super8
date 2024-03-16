/**
 * Todo.
 *
 * @description Todo.
 */

import {
	get, writable, 
} from 'svelte/store'

export const store = {
	get,
	isNavigation : writable( false ),

}
