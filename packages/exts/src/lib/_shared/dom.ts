/**
 * DOM Functions.
 *
 * @description All DOM functions.
 */

export const waitForElement = ( selector: string, callback: () => void ) =>{

	const elements = document.querySelectorAll( selector )

	const handleMutations = ( mutationsList: MutationRecord[] ) => {

		for ( const mutation of mutationsList ) {

			if ( mutation.type === 'childList' ) {

				const addedNodes   = Array.from( mutation.addedNodes )
				const removedNodes = Array.from( mutation.removedNodes )
  
				for ( const element of addedNodes ) {

					if ( element instanceof Element && element.matches( selector ) ) {

						// La etiqueta que estamos esperando se ha vuelto a agregar
						if ( callback && !element.hasAttribute( 'data-callback-added' ) ) {

							callback()
							element.setAttribute( 'data-callback-added', 'true' )
						
						}
					
					}
				
				}
  
				for ( const element of removedNodes ) {

					if ( element instanceof Element && element.matches( selector ) ) {

						// La etiqueta que estamos esperando se ha eliminado
						element.removeAttribute( 'data-callback-added' )
					
					}
				
				}
			
			}
		
		}
	
	}
  
	const observer = new MutationObserver( handleMutations )
  
	elements.forEach( element => {

		if ( element instanceof Element ) {

			observer.observe( element, {
				childList : true, subtree : true, 
			} )
		
		}
	
	} )

}
