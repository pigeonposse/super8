/**
 * TODO.
 *
 * @description Todo.
 */

import { Core } from './core'

try{

	const run = async () => {

		const core = new Core( )
		
		await core.init()

	}

	run()

}catch( e ){

	console.error( e )

}
