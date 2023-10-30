/**
 * Todo.
 *
 * @description Todo.
 */
import { renderComponentOnDOMContentLoaded } from '../lib'
import Options                               from './main.svelte'

try {
			
	renderComponentOnDOMContentLoaded( {
		componentClass : Options,
		querySelelctor : '#app',
	} )

}catch( e ){

	console.error( e )

}

