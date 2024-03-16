/**
 * Todo.
 *
 * @description Todo.
 */
import {
	goto, onNavigate, 
} from '$app/navigation'
import { page }   from '$app/stores'
import * as i18n  from './i18n/main'
import { store }  from './store/main'
import { Window } from './window/main'

export class Core {

	i18n = i18n
	store = store
	pkg = PKG
	mainPkg = MAIN_PKG
	window = new Window()

	init(){

		this.window.drag( {} )

	}

	goTo( pageID: string ){

		const $page = this.store.get( page )
		pageID      = pageID.startsWith( '/' ) ? pageID : '/' + pageID
		goto( `/${$page.data.lang}${pageID}` )
	
	}

	isOnPage( pageID: string ){

		const $page = this.store.get( page )

		const activeUrl = $page.url.pathname.replace( '/' + $page.data.lang, '' )
		const pageRoute = pageID === '' ? pageID : '/' + pageID

		return activeUrl === pageRoute
	
	}

	navTransitions(){

		onNavigate( navigation => {

			this.store.isNavigation.set( true )
	
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			if ( !document.startViewTransition ) return
	
			return new Promise( resolve => {

				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				document.startViewTransition( async () => {

					resolve()
					await navigation.complete
				
				} )
			
			} )
		
		} )
	
	}

}
