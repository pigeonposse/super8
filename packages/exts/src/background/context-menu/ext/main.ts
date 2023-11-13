/**
 * Todo.
 *
 * @description Todo.
 */

import { ContextMenuSuper } from '../super'

export class ContextMenuExt extends ContextMenuSuper {

	#values(){

		const id       = this.extensionId
		const contexts = [
			this.contextTypeAction, 
		]
		
		return [
			{
				id    : id,
				title : this.manifest.name,
				contexts,
			}, 
			/**
			 * EXTENSION MENUS.
			 */
			{
				parentId : id,
				id       : id + '_description',
				title    : this.browser.i18n.getMessage( 'extMenuDesc' ),
				enabled  : false,
				contexts,
			}, 
			{
				parentId : id,
				id       : id + '_separator',
				type     : 'separator',
				contexts,
			}, 
			{
				parentId : id,
				id       : id + '_reviews',
				title    : '⭐️ ' + this.browser.i18n.getMessage( 'review' ),
				contexts,
			}, 
			{
				parentId : id,
				id       : id + '_contribute',
				title    : '👩‍💻 ' + this.browser.i18n.getMessage( 'contribute' ),
				contexts,
			}, 
			{
				parentId : id,
				id       : id + '_issues',
				title    : '🐞 ' + this.browser.i18n.getMessage( 'issues' ),
				contexts,
			}, 
			{
				parentId : id,
				id       : id + '_version',
				title    : 'v' + this.manifest.version,
				enabled  : false,
				contexts,
			}, 
		]
	
	}

	#functions(){

		this.contextMenus.onClicked.addListener( info => {

			const createTabs = this.browser.tabs.create
		
			if ( info.menuItemId === this.extensionId + '_issues' )
				createTabs( {
					url : this.data.extRepoBugsUrl, 
				} )
			if ( info.menuItemId === this.extensionId + '_contribute' )
				createTabs( {
					url : this.data.extRepoUrl, 
				} )
			if ( info.menuItemId === this.extensionId + '_reviews' )
				createTabs( {
					url : this.data.extStoreUrl, 
				} )

		} )
	
	}
	
	setMenu(){

		this.createMenus( this.#values() )
	
	}

	init(){

		this.#functions()
	
	}

}

