/**
 * Todo.
 *
 * @description Todo.
 */

import { writable } from 'svelte/store'

const activeFunct = () => {

	const value = writable( false )
	
	return {
		...value,
	}

}

export const active = activeFunct()
