/**
 * Todo.
 *
 * @description Todo.
 */

// eslint-disable-next-line padded-blocks, @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Super } from '../super'

export class ContextMenuSuper extends Super{

	protected contextTypeAction
	protected contextMenus
	protected readonly orgId: string
	protected readonly extensionId: string
	protected readonly extensionPageId: string

	constructor( ) {

		super()
		this.extensionId       = 'pp-s8-super8'
		this.orgId             = 'pp-s8-pigeonposse'
		this.extensionPageId   = 'pp-s8-page'
		this.contextMenus      = this.browser.contextMenus || this.browser.menus
		this.contextTypeAction = this.browser.isChromium() && this.isMan3 ? 'action' : 'browser_action'
	
	}	

	createMenus( array: object[] ){

		for ( let i = 0; i < array.length; i++ ) {

			this.contextMenus.create( array[i] )
		
		}
	
	}

	createMenuSeparator( id: string, content = [ this.contextTypeAction ] ){

		this.contextMenus.create( {
			id       : id,
			type     : 'separator',
			contexts : content,
		} )
	
	}

}
