/**
 * TODO.
 *
 * @description Todo.
 */
import { browser }      from '../lib/index'
import { pkg, pkgMain } from '../man/manifest'
import * as data        from '../lib/_shared/data'

export class Super {

	protected browser
	protected readonly manifest
	protected readonly isMan3
	protected readonly data
	protected readonly pkg
	protected readonly pkgMain

	constructor( ) {

		this.browser  = browser
		this.pkg      = pkg
		this.pkgMain  = pkgMain
		this.manifest = this.browser.runtime.getManifest()
		this.isMan3   = Number( this.manifest.manifest_version ) === 3
		this.data     = data
	
	}

}
