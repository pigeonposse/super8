/**
 * Todo.
 *
 * @description Todo.
 */
import { ContextMenuOrg }     from './org/main'
import { ContextMenuExt }     from './ext/main'
import { Super }              from '../super'
import { ContextMenuContent } from './content/main'

export class ContextMenu extends Super {

	#menuExt
	#menuOrg
	#menuContent

	constructor( ) {

		super()
		this.#menuExt     = new ContextMenuExt( )
		this.#menuOrg     = new ContextMenuOrg( )
		this.#menuContent = new ContextMenuContent( )
	
	}
	
	#menus(){
		
		this.#menuExt.setMenu()
		this.#menuExt.createMenuSeparator( 'separator_id' )
		this.#menuOrg.setMenu()

		this.#menuContent.setMenu()
	
	}

	init(){

		this.browser.runtime.onInstalled.addListener( () => {

			this.#menus()

			this.#menuExt.init()
			this.#menuOrg.init()
			this.#menuContent.init()
		
		} )
	
	}

}

