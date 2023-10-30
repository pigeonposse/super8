/**
 * Todo.
 *
 * @description Todo.
 */

import { componentTypes, type ComponentOption }                                                   from '@super8/core'
import type { ComponentOptionSection, ComponentOptions, ComponentOptionsRecursive, OptionsStore } from '../../types'

export const updateOptions = ( optionsArray: ComponentOptionsRecursive, updateObject: OptionsStore ) => {

	const updateValueRecursively = ( item: ComponentOptions ) => {

		if ( item.type === componentTypes.option.section ) {

			const section = item as ComponentOptionSection
			for ( const subItem of section.value ) {

				updateValueRecursively( subItem )
			
			}
		
		}else {

			const option = item as ComponentOption
			if ( option.id in updateObject ) {

				option.value = updateObject[option.id as keyof OptionsStore]
			
			}
		
		}
	
	}

	for ( const item of optionsArray ) {

		updateValueRecursively( item )
	
	}

}
