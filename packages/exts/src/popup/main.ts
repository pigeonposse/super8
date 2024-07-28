/**
 * Main Popup Script.
 *
 * @description This script renders the main popup component on DOMContentLoaded.
 */
import { renderComponentOnDOMContentLoaded } from '../lib/_shared/render'
import Popup                                 from './main.svelte'

try {
			
	renderComponentOnDOMContentLoaded( {
		componentClass : Popup,
		querySelelctor : '#pp-s8-content',
	} )

}catch( e ){

	console.error( e )

}

