/**
 * EXTENSION FUNCTION.
 *
 * @description Returns the extension object & if it is not an extension returns false.
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const isBrowser = object => {
	
	if( object && object.storage && object.storage.sync ) return true

	return false

}

export const isChromium = () => {

	// chrome object is also valid in firefox, 
	// therefore we make it verify that it is not in firefox to do a better validation
	
	try{

		return isBrowser( chrome ) && !isFirefox()
	
	}catch( e ){

		return false
	
	}

}

export const isFirefox = () => {

	try{

		return isBrowser( browser )
	
	}catch( e ){

		return false
	
	}

}
