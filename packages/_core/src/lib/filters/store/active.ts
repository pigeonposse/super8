/**
 * Filters active store.
 *
 * @description Define all Filters active store functions in this file.
 */

import { writable } from 'svelte/store'

const activeFunct = () => {

	const value = writable( false )
	
	return {
		...value,
	}

}

export const active = activeFunct()
