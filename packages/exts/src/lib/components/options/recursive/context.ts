/**
 * Options recursive context file.
 *
 * @description This file define Options recursive context file.
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { type ComponentOption }   from '@s-8/core'
import {
	get, writable, type Writable, 
} from 'svelte/store'
import type {  OptionsStore } from '../../../types'

const storeDefault                  = {} as OptionsStore
const defaultID                     = 'options'
const id                            = writable( defaultID )
const store: Writable<OptionsStore> = writable( storeDefault )

const updateValue = ( id: string, value: ComponentOption['value'] ) => {

	const optsStore = get( store ) 
	optsStore[id]   = value

	store.set( optsStore )

}

const updateValues = ( args: OptionsStore ) => {

	const optsStore = get( store )
	for ( const key in args ) {

		optsStore[key] = args[key]
	
	}
	store.set( optsStore )

}

export const context = {
	default : storeDefault,
	...store,
	id,
	updateValue,
	updateValues,
}
