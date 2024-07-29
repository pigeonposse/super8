
/**
 * Download Links.
 *
 * @description Download Links.
 */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { DownloadNav } from './types'
export const downloadLinks = ( data: typeof MAIN_PKG['extra']['downloadUrl'] ) => {

	const groupedByType: DownloadNav = {}
	// const extsMore = { text: "More browsers", items: [] }
	// const extsMore = { text: "More browsers", link: '' }
	for ( const key in data ) {

		const item          = data[key]
		const { name, url } = item
		const nameR         = name.replace( 'App', '' ).replace( 'extension', '' ).replace( 'Extension', '' )
		const type          = item.type

		if ( !groupedByType[type] ) groupedByType[type] = []

		groupedByType[type].push( {
			name   : nameR, 
			href   : url, 
			target : '_blank', 
			...item,
		} )

		//   if (type === "extension" && store !== true) {
		// 	// @ts-ignore
		// 	extsMore.items.push({ text: name, link: url })
		//   } else {
		// 	groupedByType[type].push({ text: name, link: url });
		//   }
	
	}

	// groupedByType['extension']?.push(extsMore)

	return groupedByType

}
