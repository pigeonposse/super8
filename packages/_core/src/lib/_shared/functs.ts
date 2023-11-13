/**
 * Genreal shared functions.
 *
 * @description File for set shared functions.
 */

import { color } from './color/main'

export const generateRamdomID = () => {

	const timestamp = Date.now().toString( 36 )
	const uniqueId  = Math.random().toString( 36 ).substr( 2, 8 )
	return `${timestamp}_${uniqueId}`

}

export const isJsonString = ( str: string ) => {

	try {

		const obj = JSON.parse( str )
		return typeof obj === 'object' && obj !== null

	} catch ( e ) {

		return false

	}

}
export const objectToJson = ( v: object | object[] ) => JSON.stringify( v, null, 2 )
export const jsonToObj = ( v: string ) => JSON.parse( v )

export const deepCopy = <T>( obj: T ): T => {

	if ( obj === null || typeof obj !== 'object' ) {

		return obj
	
	}

	let copy

	// Handle Array
	if ( Array.isArray( obj ) ) {

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		copy = [] as any
		for ( let i = 0; i < obj.length; i++ ) {

			copy[i] = deepCopy( obj[i] )
		
		}
		return copy
	
	}

	// Handle Object
	copy = {} as T
	for ( const key in obj ) {

		if ( typeof obj === 'object' && Object.prototype.hasOwnProperty.call( obj, key ) ) {

			copy[key] = deepCopy( obj[key] )
		
		}
	
	}
	return copy

}

export const addStyleToHead = ( id: string ,styleString: string ) => {

	let styleElement = document.getElementById( id )

	if ( styleElement ) {

		styleElement.innerHTML = styleString
	
	} else {

		styleElement           = document.createElement( 'style' )
		styleElement.id        = id
		styleElement.innerHTML = styleString
		document.head.appendChild( styleElement )

	}
	// console.log( styleElement )

}  

export const copyText = async ( text: string ) => {

	if ( 'clipboard' in navigator ) {

		await navigator.clipboard.writeText( text )
	
	} else {

		/**
		 * This is the fallback deprecated way of copying text to the clipboard. Only runs if it can't find the clipboard API.
		 */
		const element = document.createElement( 'input' )

		element.type     = 'text'
		element.disabled = true

		element.style.setProperty( 'position', 'fixed' )
		element.style.setProperty( 'z-index', '-100' )
		element.style.setProperty( 'pointer-events', 'none' )
		element.style.setProperty( 'opacity', '0' )

		element.value = text

		document.body.appendChild( element )

		element.click()
		element.select()
		document.execCommand( 'copy' )

		document.body.removeChild( element )
	
	}

}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const isObject = item => {

	return ( item && typeof item === 'object' && !Array.isArray( item ) )

}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const isObjectAndArray = item => {

	return ( item && typeof item === 'object' )

}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const mergeDeep = ( target, ...sources ) => {

	if ( !sources.length ) return target
	const source = sources.shift()
  
	if ( isObject( target ) && isObject( source ) ) {

		for ( const key in source ) {

			if ( isObject( source[key] ) ) {

				if ( !target[key] ) Object.assign( target, {
					[key] : {}, 
				} )
				mergeDeep( target[key], source[key] )

			} else {

				Object.assign( target, {
					[key] : source[key], 
				} )

			}

		}

	}
  
	return mergeDeep( target, ...sources )

}

type MergeDeepByIdItem = {
	id: string;
	[key: string]: unknown
}
export const mergeDeepById = ( arr1: MergeDeepByIdItem[], arr2: MergeDeepByIdItem[] ): MergeDeepByIdItem[] => {

	const merged: Record<string, MergeDeepByIdItem> = {}
  
	// Merge arr1 into the merged object
	for ( const item of arr1 ) {

		if ( !merged[item.id] ) {

			merged[item.id] = {
				...item, 
			}

		} else {

			merged[item.id] = mergeDeep( merged[item.id], item )

		}

	}

	// Merge arr2 into the merged object
	for ( const item of arr2 ) {

		if ( !merged[item.id] ) {

			merged[item.id] = {
				...item, 
			}

		} else {

			merged[item.id] = mergeDeep( merged[item.id], item )

		}

	}
  
	// Convert the merged object back to an array
	const mergedArray = Object.values( merged )
  
	return mergedArray

}
  
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const clickOutside = node => {
  
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const handleClick = event => {

		if ( node && !node.contains( event.target ) && !event.defaultPrevented ) {

			node.dispatchEvent(
				new CustomEvent( 'click_outside', node ),
			)

		}

	}

	document.addEventListener( 'click', handleClick, true )

	return {
		destroy() {

			document.removeEventListener( 'click', handleClick, true )

		},
	}

}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const deepEqual = ( object1, object2 ) => {

	const objKeys1 = Object.keys( object1 )
	const objKeys2 = Object.keys( object2 )
  
	if ( objKeys1.length !== objKeys2.length ) return false
  
	for ( const key of objKeys1 ) {

		const value1 = object1[key]
		const value2 = object2[key]

		const isObjects = isObjectAndArray( value1 ) && isObjectAndArray( value2 )

		if ( ( isObjects && !deepEqual( value1, value2 ) ) ||
			( !isObjects && value1 !== value2 )
		) {

			return false

		}

	}
	return true

}

const isObjectEmpty = ( obj: object ) => {

	for ( const key in obj ) {

		if ( key in obj ) return false
	
	}
	return true 

}
   
export const functs = {
	color,
	deepEqual,
	clickOutside,
	mergeDeep,
	mergeDeepById,
	isObjectEmpty,
	copyText,
	generateRamdomID,
	isJsonString,
	isObjectAndArray,
	jsonToObj,
	objectToJson,
	deepCopy,
	addStyleToHead,
}
