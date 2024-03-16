/**
 * Todo.
 *
 * @description Todo.
 */

type DragParams = {
    element?: Element | Document
    noDragSelectors?: string
} 

export class Window {

	drag( { element = undefined, noDragSelectors = undefined }: DragParams ){
        
		if( !document ) throw Error( 'Document is not defined' )
		
		element         = element === undefined ? document : element
		noDragSelectors = noDragSelectors === undefined ? 'input, a, textarea, button, iframe, video, [role="link"]' : noDragSelectors

		element.addEventListener( 'mousedown', async e => {

			if( e.target === null ) return
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			if ( e.target.closest( noDragSelectors ) ) return
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			if( window.__TAURI__ && window.__TAURI__.window ){

				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				const tauriW = window.__TAURI__.window
				const w      = await tauriW.getCurrent()
	
				await w.startDragging()
			
			} 

		} )
	
	}
	
	isTauri(){

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		if( window.__TAURI__ ) return true
		return false
	
	}

}
