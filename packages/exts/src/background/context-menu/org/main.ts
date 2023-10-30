/**
 * Todo.
 *
 * @description Todo.
 */
import { ContextMenuSuper } from '../super'

export class ContextMenuOrg extends ContextMenuSuper {
	
	#values(){

		const id       = this.orgId
		const contexts = [ this.contextTypeAction ]
		
		return [
			{
				id    : id,
				title : 'PigeonPosse Collective 🐦🌈',
				contexts,
			},
			/**
			 * PIGEONPOSSE COLLECTIVE MENUS.
			 */
			{
				parentId : id,
				id       : id + '_description',
				title    : this.browser.i18n.getMessage( 'orgMenuDesc' ),
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
				id       : id + '_donate',
				title    : '💜 ' + this.browser.i18n.getMessage( 'donate' ),
				contexts,
			}, 
			{
				parentId : id,
				id       : id + '_web',
				title    : '🌐 ' + this.browser.i18n.getMessage( 'web' ),
				contexts,
			}, 
			{
				parentId : id,
				id       : id + '_about',
				title    : '🐦 ' + this.browser.i18n.getMessage( 'about' ),
				contexts,
			}, {
				parentId : id,
				id       : id + '_more',
				title    : '🚀 ' + this.browser.i18n.getMessage( 'moreProjects' ),
				contexts,
			}, 
		]
	
	}

	#functions(){

		this.contextMenus.onClicked.addListener( info => {

			const createTabs = this.browser.tabs.create

			if ( info.menuItemId === this.orgId + '_more' )
				createTabs( { url: this.data.collectiveRepoUrl } )
			if ( info.menuItemId === this.orgId + '_about' )
				createTabs( { url: this.data.collectiveAboutUrl } )

			if ( info.menuItemId === this.orgId + '_donate' )
				createTabs( { url: this.data.collectiveFundingUrl } )
			if ( info.menuItemId === this.orgId + '_web' )
				createTabs( { url: this.data.collectiveWebUrl } )

		} )
	
	}
	
	setMenu(){

		this.createMenus( this.#values() )
	
	}

	init(){

		this.#functions()
	
	}

}
