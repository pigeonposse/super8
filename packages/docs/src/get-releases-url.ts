/**
 * Get releases url.
 *
 * @description Get releases url.
 */
import { extra } from '../../../package.json'

type DownloadsData = typeof extra.downloadUrl
type DownloadData = DownloadsData[keyof DownloadsData]
type DownloadsGroupData = {
	[key: string]: {
        text: string;
        link: string;
    }[];
}

const groupByType = ( data: DownloadsData ) => {

	const groupedByType: DownloadsGroupData = {}

	for ( const key in data ) {

		if ( Object.prototype.hasOwnProperty.call( data, key ) ) {

			const item: DownloadData = data[key]
			const type               = item.type

			if ( !groupedByType[type] ) groupedByType[type] = []
			if( item.url )
				groupedByType[type].push( {
					text : item.name.replace( 'App', '' ).replace( 'extension', '' ).replace( 'Extension', '' ),
					link : item.url,
				} )
		
		}
	
	}

	return groupedByType

}

export const getReleasesUrl = () => {

	const navDownload = groupByType( extra.downloadUrl )
	return [
		{ 
			text  : 'Desktop apps', 
			items : navDownload.desktop,
		},
		//   { 
		//     text: 'Mobile apps', 
		//     items: navDownload.mobile
		//   },
		{ 
			text : 'Browser extensions', 
	
			items : navDownload.extension,
		},
		{ 
			text  : 'Wordpress plugins', 
			items : navDownload['wp-plugin'],
		},
		{ 
			text  : 'Containers', 
			items : navDownload['container'],
		},
		//   { 
		//     text: 'WP plugin', 
		//     link: json.extra.store.wpPlugin.url 
		//   },
		//   { 
		//     text: 'WP plugin (premium)', 
		//     link: json.extra.store.wpPluginPremium.url
		//   },
	]

}
