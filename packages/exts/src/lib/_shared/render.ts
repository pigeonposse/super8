/**
 * Todo.
 *
 * @description Todo.
 */

import { insertedAdjacentPosition, type RenderComponentParams } from '../types'

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
			
	new componentClass( { target } )

}

export const renderComponentOnDOMContentLoaded = async ( args: RenderComponentParams ) => {

	const render = () => renderComponent( args )

	document.readyState === 'loading' ? 
		document.addEventListener( 'DOMContentLoaded', render ) : 
		render()

}
