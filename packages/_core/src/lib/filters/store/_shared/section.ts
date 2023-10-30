/**
 * Todo.
 *
 * @description Todo.
 */

import { get, writable } from 'svelte/store'

export const sectionFunct = ( keys: string[], openDefault?: string ) => {

	if( !Array.isArray( keys ) ) throw 'Value must be an array'

	const defaultValue = ( keys => {

		const res: { [key: string]: boolean } = {}
		
		keys.forEach( key => {

			res[String( key )] = false
		
		} )
        
		return res
	
	} )( keys )
   
	const value = writable( defaultValue )
    
	const open = ( id: keyof typeof defaultValue ) => {

		if( !id || typeof id !== 'string' || !Object.keys( defaultValue ).includes( id ) ) return 
		
		const currValues = get( value )
		
		for ( const prop in currValues ) {
			
			currValues[prop as keyof typeof currValues] = prop === id
		
		}

		value.set( currValues )
	
	}

	const closeAll = ( ) => {

		const currValues = get( value )

		for ( const prop of Object.keys( currValues ) ) {

			currValues[prop as keyof typeof currValues] = false
		
		}
		
		value.set( currValues )
	
	}	

	const reset = () => value.set( defaultValue )
	
	if( openDefault ) open( openDefault )
	
	return {
		...value,
		open,
		reset,
		closeAll,
	}

}
