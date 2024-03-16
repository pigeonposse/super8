
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Download Links.
 *
 * @description Download Links.
 */

export type DownloadNavItem = {
	name: string
	href: string
	target: string
	logo?: string
	comingsoon?: boolean
}[]
export type DownloadNav = {
	desktop: DownloadNavItem
	mobile: DownloadNavItem
	extension: DownloadNavItem
	container: DownloadNavItem
	'wp-plugin': DownloadNavItem
}

export const downloadLinks = data => {

	const groupedByType = {}
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

	return groupedByType as DownloadNav

}
