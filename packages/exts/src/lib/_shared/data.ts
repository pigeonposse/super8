/**
 * Data for extension.
 *
 * @description Data for extension.
 */

import {
	images, pkg, pkgMain, 
} from '../../man/manifest'
import { browser } from './main'

export const openOptionsPage = () => browser.runtime.openOptionsPage()
export const extImagesSrc = images
export const extVersion = pkg.version
export const extRepoUrl = pkgMain.repository.url
export const extRepoBugsUrl = pkgMain.bugs.url
export const extStoreUrl = browser.isChromium() ? pkgMain.extra.store.chrome.url : pkgMain.extra.store.mozilla.url
export const extWebUrl = pkgMain.homepage
export const collectiveRepoUrl = pkgMain.extra.collective.gh
export const collectiveAboutUrl = pkgMain.extra.collective.about
export const collectiveFundingUrl = pkgMain.funding.url
export const collectiveWebUrl = pkgMain.extra.collective.web
