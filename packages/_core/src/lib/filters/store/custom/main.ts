/* eslint-disable jsdoc/require-file-overview */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-file-overview */
/* eslint-disable jsdoc/require-param */
/**
 * Todo.
 *
 * @description Todo.
 */

import { writable, derived, type Readable, get, type Writable } from 'svelte/store'
import { filters as dataFilters }                               from '../../data/main'
import { functs }                                               from '../../../_shared/main'
import { locales }                                              from '../locales'
import { sectionFunct }                                         from '../_shared/section'
import { 
	type FilterCustomIds,
	type IFilterJsonValues, 
	type IFiltersCustom,
	type IFiltersCustomOpts, 
	type IFilterCustom,
	filtersSectionsIds,
	type IFiltersCustomType,
	type FiltersCustomToExport, 

} from '../../../types'

const customFuncts = () => {

	const defaultValues = dataFilters.custom
	const value         = writable( functs.deepCopy( defaultValues ) )

	/**
	 * Values in Array.
	 *
	 * @description Funct for set values from a object to array of ids.
	 */
	const valuesInArray = ( values: IFiltersCustomOpts ) => {

		let res: IFiltersCustom = []

		for ( const filts of Object.values( values ) ) {
		
			if ( filts && filts.value ) res = [ ...res, ...filts.value ]

		}

		return res
	
	}
	
	/**
	 * Values to export in Array.
	 *
	 */
	const valuesToExportInArray = ( values: IFiltersCustom ): FiltersCustomToExport['values'] => {

		const filteredArray = values.map( ( { id, value, opts } ) => {

			if( 
				opts &&
				typeof opts === 'object' && 
				'unit' in opts && 
				opts.unit !== null && 
				typeof opts.unit === 'object' && 
				'value' in opts.unit 
			)
				return {
					id,
					value,
					unit : opts.unit.value as string,
				}
			else
				return {
					id,
					value,
				}
	
		} )

		return filteredArray

	}

	const defaultValuesInArray         = valuesInArray( functs.deepCopy( defaultValues ) )
	const defaultValuesToExportInArray = valuesToExportInArray( defaultValuesInArray )

	/**
	 * Value W locales.
	 *
	 * @description Value from data merged with locales store.
	 */
	const valuesWithLocales = derived( [ value, locales ], ( [ $value, $locales ] ) => {
		
		const custom = $locales.custom

		for ( const [ key, value ] of Object.entries( $value ) ) {
			
			const customSection = custom[key as keyof typeof custom]
			const valueSection  = $value[key as keyof IFiltersCustomOpts]
			
			if( typeof customSection === 'object' ){

				if ( value && value.title.value ) valueSection.title.value = customSection.title
				if ( value && value.title.desc ) valueSection.title.desc = customSection.desc
				if ( value && value.value && 'values' in customSection ) {

					for ( const filtValue of value.value ) {

						if( typeof customSection.values == 'object' && filtValue.id in customSection.values ){
						
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							const customFilter = customSection.values[filtValue.id]
			
							if ( filtValue.title.value ) filtValue.title.value = customFilter.title
							filtValue.title.desc = customFilter.desc
					
						}
				
					}
			
				}
			
			}
		
		}

		return $value

	} )

	/**
	 * Update.
	 *
	 * @description Update storage key with id of component and his new value.
	 * @ignore
	 */
	const updateValue = ( id: FilterCustomIds, newValue?: IFilterCustom['value'] ) => {

		if( !id || !newValue ) return 

		const filters = get( value )

		for ( const filter of Object.values( filters ) ) {

			for ( const fil of filter.value ) {

				if ( fil.id === id && fil.value !== newValue ) fil.value = newValue

			}
	
		}

		value.set( filters )
	
	}

	/**
	 * Update.
	 *
	 * @description Update multiple storage keys. Individual update is equal to 'updateValue' function.
	 */
	const updateValues = ( filters: IFilterJsonValues ) => {

		value.update( ( oldFilters: IFiltersCustomOpts ) => {

			for ( const filter of Object.values( oldFilters ) ) {

				filter.value = filter.value.map( filter => {

					const update = filters.find( item => item.id === filter.id )
					if ( update ) filter.value = update.value
					return filter
		
				} )
			
			}

			return oldFilters

		} )

	}

	/**
	 * Reset With values.
	 *
	 * @description Reset first and then update.
	 */
	const resetWithValues = ( filters: IFilterJsonValues ) => {

		value.update( ( oldFilters: IFiltersCustomOpts ) => {
			
			oldFilters = functs.deepCopy( defaultValues )
			
			for ( const filter of Object.values( oldFilters ) ) {

				filter.value = filter.value.map( filter => {

					const update = filters.find( item => item.id === filter.id )
					if ( update ) filter.value = update.value
					return filter
		
				} )
			
			}

			return oldFilters

		} )

	}

	/**
	 * Values.
	 *
	 * @description Return array of filters.
	 */
	const values: Readable<IFiltersCustom> = derived( [ value ], ( [ $value ] ) => {

		return valuesInArray( $value )

	} )

	/**
	 * Object values.
	 *
	 * @description Return only id and value from values store.
	 */
	const objectValues = derived( [ values ], ( [ $values ] ) => {

		return valuesToExportInArray( $values )

	} )

	/**
	 * JSON values.
	 *
	 * @description Return only id and value from values store.
	 */
	const jsonValues = derived( [ objectValues ], ( [ $values ] ) => {

		return functs.objectToJson( $values )

	} )

	/**
	 * RESET.
	 *
	 * @description Reset to default.
	 */
	const reset = () => {

		value.set( functs.deepCopy( defaultValues ) )

	}

	/**
	 * RESET.
	 *
	 * @description Reset to specific value with the id.
	 */
	const resetValue = ( id: FilterCustomIds ) => {

		value.update( ( filters: IFiltersCustomOpts ) => {

			for ( const [ key , filterArray ] of Object.entries( filters ) ) {

				if ( filterArray.value ) {

					filterArray.value = filterArray.value.map( filter => {

						if ( filter.id === id ) {

							const defaultValue = defaultValues[key as keyof IFiltersCustomOpts].value.find( defaultFilter => defaultFilter.id === id )
							if ( defaultValue ) filter.value = defaultValue.value

						}
						return filter

					} )

				}

			}

			return filters

		} )

	}

	const defaultValuesToExport = valuesToExportInArray( valuesInArray( defaultValues ) )

	const getDefaultValue = ( id: FilterCustomIds ) => {

		const filters = defaultValuesToExport

		for ( const filter of Object.values( filters ) ) {

			if ( filter.id === id ) return filter.value

		}

		return undefined

	}

	const valuesNotInDefault = derived( [ objectValues ], ( [ $values ] ) => {

		const res: { [key in FilterCustomIds]: boolean } = {} as { [key in FilterCustomIds]: boolean }
		
		for ( const filter of Object.values( $values ) ) {

			const defaultFilter = defaultValuesToExport.find(
				defaultFilter => defaultFilter.id === filter.id,
			)

			if ( defaultFilter ) {

				const valuesMatch =
				filter.value === defaultFilter.value &&
				( filter.unit === defaultFilter.unit || filter.unit === undefined )

				res[filter.id] = !valuesMatch

			} else {

				res[filter.id] = true

			}

		}

		return res
	
	} )

	const getValueCountBySection = ( id: string, value: { [key in FilterCustomIds]: boolean } ) => {

		return Object.entries( value ).filter( ( [ k, v ] ) => v === true && k.startsWith( id ) ).length

	} 
	
	const valuesNotInDefaultCount = derived( valuesNotInDefault, $values => {

		return Object.values( $values ).filter( value => value === true ).length

	} )

	const valuesNotInDefaultCountBySection = derived( valuesNotInDefault, $values => {

		const res: { [key in IFiltersCustomType ]: number } =  {
			[filtersSectionsIds.custom.shadow ]    : getValueCountBySection( filtersSectionsIds.custom.shadow , $values ),
			[filtersSectionsIds.custom.border ]    : getValueCountBySection( filtersSectionsIds.custom.border , $values ),
			[filtersSectionsIds.custom.filter ]    : getValueCountBySection( filtersSectionsIds.custom.filter , $values ),
			[filtersSectionsIds.custom.animation ] : 0,
		}
		return res
	
	} )
	
	const limit: Writable<number|undefined> = writable( undefined )

	const isBlocked = derived( [ valuesNotInDefaultCount, limit ], ( [ $values, $limit ] ) => {

		if( $limit ) return $values >= $limit
		return false
	
	} )

	return {
		default            : defaultValues,
		defaultInArray     : defaultValuesInArray,
		defaultToExport    : defaultValuesToExportInArray,
		...value,
		updateValue,
		values,
		reset,
		resetValue,
		updateValues,
		getDefaultValue,
		resetWithValues,
		objectValues,
		jsonValues,
		valuesWithLocales,
		valuesNotInDefault : {
			list           : valuesNotInDefault,
			count          : valuesNotInDefaultCount,
			countBySection : valuesNotInDefaultCountBySection,
		},
		section : sectionFunct(
			Object.values( filtersSectionsIds.custom ),
			filtersSectionsIds.custom.filter,
		),
		limit,
		isBlocked,
	}

}

export const custom = customFuncts()
