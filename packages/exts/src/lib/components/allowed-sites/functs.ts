/**
 * Todo.
 *
 * @description Todo.
 */

import { defaultData }                   from './data'
import { storageIds, type OptionsStore } from '../../types'
import { storage }                       from '../../storage/main'

export const getAllUrlPatterns = () => {

	const res = []

	for ( const value of Object.values( defaultData ) ) {

		if ( Array.isArray( value.urlStarts ) ) {

			const urlPatterns = value.urlStarts.map( v => v + '*' )
			res.push( ...urlPatterns )
		
		}
	
	}

	return res

}

export const site = async ( url: string | undefined = undefined, back = false ) => {
	
	const store   = await storage.value[storageIds.options].get( ) as OptionsStore | undefined 
	const currUrl = !url && !back ? window.location.href : url && back ? url : false
	
	if( !currUrl ) return
	
	const isAllowedFunct = () => {
	
		const isAllowedOptionChecked = ( key: keyof typeof defaultData ) => {
	
			if( store !== undefined && key in store && store[key] === true ) return true
			return false
		
		}
	
		for ( const [ key, value ] of Object.entries( defaultData ) ) {
	
			if( isAllowedOptionChecked( key as keyof typeof defaultData ) ) {
	
				for ( const urlStarts of value.urlStarts ) {
	
					if( currUrl.startsWith( urlStarts ) ) return true
				
				}
			
			}
		
		}
	
		return false
	
	}

	const getContentUrl = () => {
	
		for ( const value of Object.values( defaultData ) ) {
	
			for ( const urlValue of value.urlStarts ) {
	
				if( currUrl.startsWith( urlValue ) ) return value
			
			}
		
		}
		return undefined
	
	}

	const isAllowed = isAllowedFunct()
	const data      = getContentUrl()
	
	if( isAllowed && store && data ){

		return {
			isAllowed,
			data,
			store : store,
		}

	}
	
	return

}
