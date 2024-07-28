/**
 * Storage Management Super.
 *
 * @description This module provides utility functions for managing storage 
 *  and defines storage properties and behaviors.
 */

import { store } from '../_shared/main'

import { defaultData as allowedSitesData } from '../../lib/components/allowed-sites/data'
import { defaultData as filtersStyleData } from '../../lib/components/filters-config/data'
import { functs }                          from '@s-8/core'
import {
	storageIds,
	storageSetIds, 
	storageGroupsIds,
} from '../const'
import {
	type StorageAppValues, 
	type StorageAppOptionValues, 
	type StorageSetType, 
	type StorageInit, 
} from '../types'

const getOptsDefaultValue = () => {

	const res: StorageInit = {}
    
	for ( const [
		key, value, 
	] of Object.entries( allowedSitesData ) ) {

		res[key] = value.defaultValue
            
	}
	
	for ( const [
		_key, _value, 
	] of Object.entries( filtersStyleData ) ) {
                
		res[_key] = _value.defaultValue
            
	}

	return res as StorageAppOptionValues[typeof storageIds.options]

}

const storageAppShared = {
	id           : '',
	defaultValue : undefined,
	group        : storageGroupsIds.content,
	validate( value: unknown ) {

		if( value ) return true 
		return false
	
	},
	async set ( value: unknown, type: StorageSetType = storageSetIds.set ) {

		if ( this.validate( value ) ) {
	
			if( type === storageSetIds.set )
				store.setKey( this.id, value )
			else
				store.setKeyWithDebounce( this.id, value )
		
		}

		// console.group( 'Set funct', this.id )
		// console.log( 'value', value )
		// console.log( 'type', type )
		// console.log( 'validate', this.validate( value ), this.validate )
		// console.groupEnd()

	},
	async get(){

		const storeRes = await store.get<typeof this.defaultValue>( this.id )
		return this.validate( storeRes ) ? storeRes : undefined

	},
	async init(){

		const existStore = await this.get()
		if( !existStore ) this.set( this.defaultValue )
	
	},
}

export const storageApp: StorageAppValues = {
	[storageIds.active] : {
		...storageAppShared,
		id           : storageIds.active,
		defaultValue : false,
		validate( v:unknown ) {

			if( typeof v === 'boolean' ) return true
			return false
		
		},
	},
	[storageIds.hide] : {
		...storageAppShared,
		id           : storageIds.hide,
		defaultValue : false,
		validate( v:unknown ) {

			if( typeof v === 'boolean' ) return true
			return false
		
		},
	},
	[storageIds.presets] : {
		...storageAppShared,
		id           : storageIds.presets,
		defaultValue : {
			value      : '',
			customList : [],
		},
		validate( v:unknown ) {

			if( v && typeof v === 'object' && 'value' in v && 'customList' in v ) return true
			return false
		
		},
	},
	[storageIds.options] : {
		...storageAppShared,
		id           : storageIds.options,
		group        : storageGroupsIds.option,
		defaultValue : getOptsDefaultValue(),
		async set( value: unknown, type = storageSetIds.set ) {

			const store   = await this.get( )
			const setFunc = storageAppShared.set.bind( this )
			
			await setFunc( functs.mergeDeep( store,value ), type )
	
		},
		validate( v:unknown ) {

			if( v && typeof v === 'object' && !Array.isArray( v ) ) {

				const defautlKeys = Object.keys( this.defaultValue ) 
				for ( const value of Object.keys( v ) ) {

					if( !defautlKeys.includes( value ) ) return false
				
				}

				return true
			
			}

			return false
		
		},
	},
	[storageIds.values] : {
		...storageAppShared,
		id           : storageIds.values,
		defaultValue : undefined,
		validate( v: unknown ) {

			if( v && Array.isArray( v ) && v.length > 0 ) return true
			return false
        
		},
	},
}

