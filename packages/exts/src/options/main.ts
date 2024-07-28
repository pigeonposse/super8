/**
 * Main Options Script.
 *
 * @description This script renders the main options component on DOMContentLoaded.
 */
import { renderComponentOnDOMContentLoaded } from '../lib/_shared/render'
import Options                               from './main.svelte'

try {

	renderComponentOnDOMContentLoaded( {
		componentClass : Options,
		querySelelctor : '#pp-s8-content',
	} )

}catch( e ){

	console.error( e )

}

