/**
 * Message Store for Storing and Managing Debug Messages.
 *
 * @description This file provides a Svelte store for storing and managing messages in the application.
 */

import {
	writable, 
	type Writable, 
} from 'svelte/store'
import type { MessageLog } from '../../types'

const messageFunction = () => {

	const store: Writable<[] | MessageLog['data'][]> = writable( [] )
	
	const add = ( v: MessageLog['data'] ) => {

		store.update( store => [
			...store, v, 
		] )
	
	}
    
	return {
		...store,
		add,
	}

}

export const messageStore = messageFunction()

