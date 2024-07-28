/* eslint-disable jsdoc/require-file-overview */
/**
 * Render Component Utility Functions.
 *
 * @description This module contains utility functions for rendering Svelte components onto the DOM. 
 *  It provides the ability to render a component on a specified target element or 
 *  create a new target element using `insertAdjacentElement`. Additionally, 
 *  it includes a function to wait for the DOMContentLoaded event before rendering the component.
 */

import { type RenderComponentParams } from '../types'
import { insertedAdjacentPosition }   from '../const'
/**
 * Render a Svelte component on a specified target element.
 *
 * @description                              This function renders a Svelte component on the specified target element or, 
 *                                           if provided, inserts a new target element in the DOM using `insertAdjacentElement`.
 * @param       {RenderComponentParams} args - The parameters for rendering the component.
 */
export const renderComponent = async ( { 
	componentClass, 
	querySelelctor = '#app',
	insertAdjacent = {
		position  : insertedAdjacentPosition.afterend,
		elementID : '',
	},
}: RenderComponentParams ) => {

	const initTarget = document.querySelector( querySelelctor )
	if ( !initTarget ) throw 'querySelelctor does not exist: ' + querySelelctor
    
	let target = initTarget

	if( insertAdjacent && 'elementID' in insertAdjacent && insertAdjacent.elementID !== '' ){

		const id = insertAdjacent.elementID
   
		if( !insertAdjacent.position ) insertAdjacent.position = insertedAdjacentPosition.afterend
		
		let targetCreated = document.getElementById( id )
		
		if ( !targetCreated ) {
			
			targetCreated    = document.createElement( 'div' )
			targetCreated.id = id

			initTarget.insertAdjacentElement( insertAdjacent.position, targetCreated )
            
		}
		target = targetCreated
	
	}
			
	new componentClass( {
		target, 
	} )

}

/**
 * Render a Svelte component on DOMContentLoaded.
 *
 * @description                              This function renders a Svelte component on the specified target element or, 
 *                                           if provided, inserts a new target element in the DOM using `insertAdjacentElement`. It waits for the DOMContentLoaded event before rendering the component.
 * @param       {RenderComponentParams} args - The parameters for rendering the component.
 */
export const renderComponentOnDOMContentLoaded = async ( args: RenderComponentParams ) => {

	const render = () => renderComponent( args )

	document.readyState === 'loading' ? 
		document.addEventListener( 'DOMContentLoaded', render ) : 
		render()

}
