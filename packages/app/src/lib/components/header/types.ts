
/**
 * Download Types.
 *
 * @description Types.
 */
export type DownloadNavItem = {
	name: string
	href: string
	target: string
	logo?: string
	comingsoon?: boolean
}
export type DownloadNavItems = DownloadNavItem[]
export type DownloadNav = {
	desktop?: DownloadNavItems
	mobile?: DownloadNavItems
	extension?: DownloadNavItems
	container: DownloadNavItems
	'wp-plugin'?: DownloadNavItems
}
