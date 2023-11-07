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
		querySelelctor : '#pp-s8-content',
	} )

}catch( e ){

	console.error( e )

}

