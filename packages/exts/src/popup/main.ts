/**
 * Todo.
 *
 * @description Todo.
 */
import { renderComponentOnDOMContentLoaded } from '../lib'
import Popup                                 from './main.svelte'

try {
			
	renderComponentOnDOMContentLoaded( {
		componentClass : Popup,
		querySelelctor : '#app',
	} )

}catch( e ){

	console.error( e )

}

