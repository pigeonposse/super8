/**
 * TODO.
 *
 * @description Todo.
 */

import { ContextMenu } from './context-menu/main'
import { ExtStorage }  from './storage/main'
import { Super }       from './super'

export class Core extends Super{

	#contextMenu
	#storage

	constructor( ) {

		super()
		this.#contextMenu = new ContextMenu( )
		this.#storage     = new ExtStorage( )
	
	}
	
	#setErrors(){

		this.browser.runtime.onMessage.addListener( message => {

			if ( message.error ) console.error( message )
		
		} )
	
	}

	async init(){

		this.#storage.init()
		this.#contextMenu.init()

		this.#setErrors()
	
	}

}
