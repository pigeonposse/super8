/**
 * Todo.
 *
 * @description Todo.
 */

import { get, writable }          from 'svelte/store'
import { functs }                 from '../../_shared/functs'
import { locales as localesData } from '../locales/main'
import type { ComponentFilters }  from '../../types'

const localesFuncts = () => {

	const defaultValues = localesData
	const value         = writable( functs.deepCopy( defaultValues ) )

	const add = ( locales: ComponentFilters['locales'] ) => {

		const actualValue = get( value )

		const res = functs.mergeDeep( actualValue, locales )
		value.set( res )
		
	}
    
	return {
		...value,
		add,
	}

}

export const locales = localesFuncts()
