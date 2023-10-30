/**
 * Todo.
 *
 * @description Todo.
 */
import { writable, get, derived, type Writable }                                                                       from 'svelte/store'
import { filters as dataFilters }                                                                                      from '../../data/main'
import { filterCustomIds, type AddPresetParams, type IFiltersPreset, type IFiltersPresets, type IFiltersPresetStyles } from '../../../types'
import { functs }                                                                                                      from '../../../_shared/functs'
import { custom }                                                                                                      from '../custom/main'

const presetsFuncts = () => {

	const defaultValue                                = ''
	const defaultCustomList                           = [] as []
	const presetList                                  = dataFilters.presets
	const customList: Writable<IFiltersPresets | [] > = writable( functs.deepCopy( defaultCustomList ) )
	const valueID                                     = writable( functs.deepCopy( defaultValue ) )

	const update = ( preset: IFiltersPreset ) => {

		const actualValue = get( valueID )
		if( actualValue === preset.id ) valueID.set( defaultValue )
		else if( preset.id ) {

			valueID.set( preset.id )
			if( preset.value ) custom.resetWithValues( preset.value )
		
		}
		
	}

	// REMOVE SELECT VALUES
	const reset = ( ) => valueID.set( defaultValue )
	
	const getDefaultlistValue = ( id: string ) => {

		const filteredList = presetList.filter( d => d.id === id )
		return filteredList.length > 0 ? filteredList[0] : undefined
	
	}

	const getCustomListValue = ( id: string ) => {

		const list         = get( customList )
		const filteredList = Array.isArray( list ) && list.length > 0 ? list.filter( d => d.id === id ) : false
		return filteredList && filteredList.length > 0 ? filteredList[0] : undefined
	
	}

	const getlistValue = ( id: string ) => {

		return getDefaultlistValue( id ) || getCustomListValue( id )
	
	}

	const isInDefaultlist = ( id: string ) => {

		return getDefaultlistValue( id ) ? true : false
	
	}

	const isInCustomList = ( id: string ) => {

		return getCustomListValue( id ) ? true : false
	
	}

	const isInlist = ( id: string ) => {

		return getlistValue( id ) ? true : false
	
	}
	
	const isValidObjStyle = ( obj: unknown ): obj is IFiltersPresetStyles => {

		if( typeof obj === 'string' ) {

			if( !functs.isJsonString( obj ) ) return false
			obj = functs.jsonToObj( obj )
		
		}

		if( !Array.isArray( obj ) ) return false
		for ( const item of obj ) {

			if (
				typeof item !== 'object' ||
				!( 'id' in item ) ||
				!( 'value' in item ) ||
				typeof item.id !== 'string' ||
				!Object.values( filterCustomIds ).includes( item.id ) ||
				!( typeof item.value === 'string' || typeof item.value === 'number' || typeof item.value === 'boolean' )
			) {

				return false

			}

		}

		return true

	}

	const addCustom = ( { name, color, value }: AddPresetParams ) => {

		let customL       = get( customList )
		const customIndex = customL.findIndex( d => d.name === name )

		// if exist
		if( customIndex !== -1 ){

			customL[customIndex] = { 
				...customL[customIndex],
				opts : {
					color,
				},
				value,
			}
		
		}else {

			customL = [ ...customL, { 
				id   : name,
				name,
				opts : {
					color,
				},
				value,
			} ]
		
		}

		customList.set( customL )
	
	}
	
	const removeCustom = ( id: string ) => {

		const actualValue = get( valueID )
		
		if( actualValue === id ) valueID.set( defaultValue )
		
		const customL    = get( customList )
		const newCustomL = customL.filter( d => d.id !== id )
		customList.set( newCustomL )
	
	}
	
	const allList = derived( [ customList ], ( [ $customList ] ) => {

		return functs.mergeDeep( $customList, presetList )
	
	} )

	const value = derived( [ valueID ], ( [ $valueID ] ) => {
	
		if( $valueID && $valueID !== defaultValue )
			return getlistValue( $valueID )
		else return undefined
	
	} )
	
	const awaitForValue = writable( false )
	const isValueSet    = derived( [ value, valueID, custom.objectValues ], ( [ $presetValues, $presetID, $customValues ] ) => {

		const fullPresetValue = ( $presetValues !== undefined && typeof $presetValues === 'object' && 'value' in $presetValues ) ? 
			functs.mergeDeepById( custom.defaultToExport, $presetValues.value ) :
			undefined
		
		const valuesAreEqual = fullPresetValue !== undefined ? 
			functs.deepEqual( fullPresetValue, $customValues ) :
			false
			
		if( valuesAreEqual ) awaitForValue.set( true )
		const isSettingId = get( awaitForValue )
		
		const presetIsSet = $presetID !== undefined && isSettingId 
		if( presetIsSet && !valuesAreEqual ) reset()

		// console.group( 'isValueSet' )
		// console.log( 
		// 	'Preset value: ', $presetValues, 
		// 	'fullPresetValue: ', fullPresetValue, 
		// 	'customValues: ',$customValues,
		// 	'Is equal: ', isEqual, 
		// )
		// console.groupEnd()
		
		return valuesAreEqual
		
	} )
	
	return {
		isValidObjStyle,
		isInDefaultlist,
		isInCustomList,
		isInlist,
		getDefaultlistValue,
		getCustomListValue,
		getlistValue,
		default : defaultValue,
		list    : presetList,
		...value,
		valueID,
		isValueSet,
		update,
		addCustom,
		removeCustom,
		customList,
		allList,
		reset,
	}

}

export const presets = presetsFuncts()

