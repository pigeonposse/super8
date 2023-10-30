
/**
 * Debounce.
 *
 * @description Prevents a function from being fired too often by determining
 *  a difference in time from the last time in which it was fired.
 */

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export const debounce = ( cb, delay = 250 ) =>{

	let timeout

	return ( ...args ) => {

		clearTimeout( timeout )
		timeout = setTimeout( () => {

			cb( ...args )
		
		}, delay )
	
	}

}
