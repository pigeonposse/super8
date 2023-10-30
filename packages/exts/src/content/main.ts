/**
 * Todo.
 *
 * @description Todo.
 */
import '../styles.css'

import Main                                                                        from './main.svelte'
import { insertedAdjacentPosition, optionsIds, renderComponentOnDOMContentLoaded } from '../lib'
import { site }                                                                    from '../lib/components/allowed-sites/functs'

try {

	const run = async ()=> {

		const isAllowed = await site()
		if( isAllowed )
			renderComponentOnDOMContentLoaded( {
				componentClass : Main,
				querySelelctor : 'body',
				insertAdjacent : {
					position  : insertedAdjacentPosition.afterend,
					elementID : optionsIds.contentDiv,
				},
			} )
	
	}
	
	run()

}catch( e ){

	console.error( e )

}

