/**
 * Todo.
 *
 * @description Todo.
 */

import { derived, get, writable }        from 'svelte/store'
import More                              from '../tabs/more/main.svelte'
import Custom                            from '../tabs/custom/main.svelte'
import Presets                           from '../tabs/presets/main.svelte'
import { locales }                       from './locales'
import { presets }                       from './presets/main'
import { custom }                        from './custom/main'
import { 
	allowedFilterTabs, 
	type ComponentSidebarContentFilters, 
} from '../../types'

const itemsFuncts = () => {
    
	const allowedItems = writable< ComponentSidebarContentFilters['allowedItems']>( undefined )
    
	const value = derived(
		[ locales, allowedItems, custom.valuesNotInDefault.count, presets.isValueSet ], 
		( [ $locales, $allowedItems, $customCount, $isPresetSet ] ) => {

			let items

			const itemsDefault = [
				{ 
					name      : $locales.custom.title,
					desc      : $locales.custom.desc,
					value     : allowedFilterTabs.custom,
					indicator : $customCount > 0 ? true : false,
					component : Custom,
				},
				{ 
					name      : $locales.presets.title,
					desc      : $locales.presets.desc,
					value     : allowedFilterTabs.preset,
					indicator : $isPresetSet,
					component : Presets,
				},
				{ 
					name      : $locales.more.title,
					desc      : $locales.more.desc,
					value     : allowedFilterTabs.more,
					component : More,
				},
			]
          
			if( $allowedItems && Array.isArray( $allowedItems ) ) 
				items = itemsDefault.filter( d => $allowedItems && $allowedItems.includes( d.value ) )
			else 
				items = itemsDefault

			return items
	
		},
	)
	
	const ifHasValue = ( id: typeof allowedFilterTabs[keyof typeof allowedFilterTabs] ) => {

		if( !id ) return false

		const values = get( value )
		const exists = values.some( item => item.value && item.value === id )

		// console.log( values, exists, id )

		return exists
	
	}	

	return {
		...value,
		allowedItems,
		ifHasValue,
	}

}
export const items = itemsFuncts()
