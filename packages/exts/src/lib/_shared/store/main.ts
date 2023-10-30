/**
 * Todo.
 *
 * @description Todo.
 */

import { browser }  from '../browser/main'
import { debounce } from '../debounce'

const get = async <Response>( key: string | null ): Promise<Response> => {

	return new Promise( ( resolve, reject ) => {

		browser.storage.sync.get( key )
			.then( result => {

				if( key === null )
					resolve( result as Response ) 
				else
					resolve( result[key] ) 
				
				return

			} ).catch( error => {

				console.error( 'Error getting data from storage:', error )
				reject( error )
			
			} )
	
	} )

}

const writeToStorage = <Type>( key: string, data: Type ) => {

	browser.storage.sync.set( { [key]: data } )

}

const setKey             = writeToStorage
const setKeyWithDebounce = debounce( writeToStorage, 500 )
const set                = browser.storage.sync.set
const setWithDebounce    = debounce( set, 500 )
export const store = {
	clearAll : browser.storage.sync.clear,
	get,
	set,
	setWithDebounce,
	setKey,
	setKeyWithDebounce,
}
