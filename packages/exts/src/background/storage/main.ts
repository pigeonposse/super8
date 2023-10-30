/**
 * Todo.
 *
 * @description Todo.
 */

import { Super }   from '../super'
import { storage } from '../../lib/storage/main'

export class ExtStorage extends Super {

	init(){

		this.browser.runtime.onInstalled.addListener( async () => {

			await storage.init()
		
		} )
	
	}

}

