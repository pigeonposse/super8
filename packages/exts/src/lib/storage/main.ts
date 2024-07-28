/**
 * Storage Management Utility.
 *
 * @description This module provides utility functions for managing storage, 
 *  including getting storage groups, clearing all storage, 
 *  and initializing default storage values.
 */
import { functs }           from '@s-8/core'
import { storageGroupsIds } from '../const'
import { storageApp }       from './super'
import { store }            from '../_shared/main'
import {
	type StorageAppOptionValues, 
	type StorageAppContentValues, 
	type StorageInit, 
} from '../types'

export const getGroup = async ( type = storageGroupsIds.content ) => {

	const res : StorageInit = {}

	for ( const [
		key, storage, 
	] of Object.entries( storageApp ) ) {

		if( storage.group == storageGroupsIds[type] ) res[key] =  await storage.get()
	
	}
	
	if ( type === storageGroupsIds.content ) return res as StorageAppContentValues
	return res as StorageAppOptionValues

}

export const clearAll = () => store.clearAll()
export const getAll = async () => await store.get( null )

export const init = async () => {

	// Only for testing
	// clearAll()
	
	const initGet = await getAll( )

	if( initGet && typeof initGet === 'object' && !functs.isObjectEmpty( initGet ) ) return

	const res: StorageInit = {}

	for ( const storage of Object.values( storageApp ) ) {

		res[storage.id] = storage.defaultValue
	
	}

	await store.set( res )
	
	// const g = await getAll( )
	// console.group( 'init' )
	// console.log( 'Storage to set:',res )
	// console.log( 'Storage set:',g )
	// console.groupEnd()

}

export const storage = {
	value : storageApp,
	init,
	clearAll,
	getAll,
	getGroup,

}

