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
		querySelelctor : '#pp-s8-content',
	} )

}catch( e ){

	console.error( e )

}

