/**
 * Todo.
 *
 * @description Todo.
 */

import { getDateString, messagesIds } from '../../../lib'
import { getAllUrlPatterns, site }    from '../../../lib/components/allowed-sites/functs'

import { ContextMenuSuper } from '../super'

export class ContextMenuContent extends ContextMenuSuper {
	
	#values(){

		const contexts = [ 'page', 'selection' ]
		
		return [
			{
				id                  : this.extensionPageId,
				title               : this.browser.i18n.getMessage( 'contextMenu_page_open' ),
				contexts,
				enabled             : false,
				documentUrlPatterns : getAllUrlPatterns(),
			},
		]
	
	}

	#functions(){

		// Enable or disable the menu item based on the URL
		this.browser.tabs.onUpdated.addListener( async ( tabId, changeInfo, tab ) => {

			if ( tab.status === 'loading' ) {

				const siteData = await site( tab.url, true )
	
				if ( siteData?.isAllowed ) 
					this.contextMenus.update( this.extensionPageId, { enabled: true } )
				else 
					this.contextMenus.update( this.extensionPageId, { enabled: false } )

			}
		
		} )

		this.contextMenus.onClicked.addListener( ( info, tab ) => {

			if( tab && 'id' in tab && typeof tab.id !== 'undefined' ) {

				this.browser.tabs.sendMessage( tab.id, { type: messagesIds.activeFilters, data: true } )  
				this.browser.runtime.sendMessage( {
					type : messagesIds.log,
					data : {
						time    : getDateString(),
						type    : 'info',
						message : 'Super8 opened with Context menu',
					},
				} )
			
			}else {

				this.browser.runtime.sendMessage( {
					type : messagesIds.log,
					data : {
						time    : getDateString(),
						type    : 'error',
						message : 'Error openning Super8 with Context menu',
					},
				} )
			
			}
		
		} )
	
	}
	
	setMenu(){

		this.createMenus( this.#values() )
	
	}

	init(){

		this.#functions()
	
	}

}
