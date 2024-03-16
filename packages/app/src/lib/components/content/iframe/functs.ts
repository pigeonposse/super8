/**
 * TODO.
 *
 * @description Todo.
 */

export const convertYoutubeUrlToEmbed = ( url: string ) => {

	const getId = ( url: string ) => {

		const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\\&v=)([^#\\&\\?]*).*/
		const match  = url.match( regExp )
    
		if ( match && match[2].length == 11 ) {

			return match[2]
		
		} else {

			return false
		
		}
	
	}
    
	const ID = getId( url )

	if( ID ) return `https://www.youtube.com/embed/${ID}`
	return undefined

}

export const isValidUrl = ( url: string | undefined ) => {

	if( !url || url === '' || !url.startsWith( 'https://' ) ) return false

	return true

}
type CopyIframe = { 
    stylesId: string
    id: string
    iframeTxt: string
    url: string
}

export const getIframeString = ( { stylesId, id, iframeTxt, url }: CopyIframe ) => {

	try {

		const styleElement = document.querySelector( '#' + stylesId )
		
		let copiedStyles = '' 
		if ( styleElement ) {

			const styleContent = styleElement.innerHTML
			if ( styleContent ) {

				// const stylesWithoutSelector = styleContent.replace(/#pp-super8-custom\s*{([^}]*)}/, '$1').trim()
				const stylesWithoutSelector = styleContent.replace( new RegExp( `#${id}\\s*{([^}]*)}` ), '$1' ).trim()
				copiedStyles                = stylesWithoutSelector
		
			}
	
		}

		const iframeString = `<iframe src="${url}" title="${iframeTxt}" style="${copiedStyles}" width="600px" height="350px" ></iframe>`
		return iframeString
	
	}catch{

		return undefined
	
	}

}
