/**
 * Todo.
 *
 * @description Todo.
 */

// The styles are added from the manifest to avoid conflicts with some websites such as YouTube
import './style.css'

import Main                                                                        from './main.svelte'
import { insertedAdjacentPosition, optionsIds, renderComponentOnDOMContentLoaded } from '../lib'
import { site }                                                                    from '../lib/components/allowed-sites/functs'

try {

	const init =  async ()=> {

		const isAllowed = await site()

		if( isAllowed ) {

			console.log( 'pataka' )
			renderComponentOnDOMContentLoaded( {
				componentClass : Main,
				querySelelctor : 'body',
				insertAdjacent : {
					position  : insertedAdjacentPosition.afterend,
					elementID : optionsIds.contentDiv,
				},
			} )
		
		}
	
	}
	const run = async ()=> {
		
		document.addEventListener( 'readystatechange', () => {

			if ( document.readyState === 'complete' ) init()
			
		} )
	
	}

	run()

}catch( e ){

	console.error( 'Super8 error: ',e )

}
