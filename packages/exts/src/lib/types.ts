/**
 * TYPES.
 *
 * @description File for set exts types.
 */

import type { 
	ComponentFilters,
	ComponentNot,
	ComponentOption, 
	FiltersCustomToExport, 
	ObjectValues, 
	OmitNeverInobjectValues, 
	componentTypes, 
} from '@s-8/core'

import type {
	contentIds, 
	insertedAdjacentPosition, 
	messagesIds, 
	optBtnStylesIds, 
	optionsIds, 
	storageGroupsIds, 
	storageIds, 
	storageSetIds, 
} from './const'

/**
 * ****************************************************************************.
 * UTILS
 * ****************************************************************************.
 */

// nothing

/**
 * ****************************************************************************.
 * GENERAL
 * ****************************************************************************.
 */
export type ContentType = ObjectValues<typeof contentIds>
export type FilterComponentProps = FiltersCustomToExport

/**
 * ****************************************************************************.
 * MESSAGES
 * ****************************************************************************.
 */
export type MessageType = ObjectValues<typeof messagesIds>

export type MessageActiveFilters = {
	type: typeof messagesIds.activeFilters
	data: boolean
}

export type MessageLog = {
	type: typeof messagesIds.log
	data: {
		time: string
		type: ComponentNot['type']
		message: string
	}
}

export type Message = MessageActiveFilters | MessageLog

/**
 * ****************************************************************************.
 * STORAGE
 * ****************************************************************************.
 */
export type StorageType = ObjectValues<typeof storageIds>
export type StorageSetType = ObjectValues<typeof storageSetIds> 
export type StorageGroup = ObjectValues<typeof storageGroupsIds>
export type StorageInit = {
    [key: string]: unknown;
}
export type StorageAppValue<
	Type extends StorageType, 
	Group extends StorageGroup, 
	Value
> = {
    readonly id: Type
    readonly group: Group
    readonly defaultValue: Value
    set: ( value: unknown, type?: StorageSetType ) => void
    get: () => Promise<Value | undefined>
    validate: ( value: unknown ) => boolean
    init: () => void
}

export type StorageAppObjValues = {
    [storageIds.active]: StorageAppValue< 
		typeof storageIds.active, 
		typeof storageGroupsIds.content, 
		ComponentFilters['active']
	>
	[storageIds.hide]: StorageAppValue< 
		typeof storageIds.hide, 
		typeof storageGroupsIds.content, 
		FilterComponentProps['hide']
	>
    [storageIds.presets]: StorageAppValue< 
		typeof storageIds.presets, 
		typeof storageGroupsIds.content, 
		FilterComponentProps['presets']
	>
    [storageIds.values]: StorageAppValue< 
		typeof storageIds.values, 
		typeof storageGroupsIds.content, 
		FilterComponentProps['values'] | undefined
	>
    [storageIds.options]: StorageAppValue< 
		typeof storageIds.options, 
		typeof storageGroupsIds.option, 
		OptionsStore
	>
}
export type StorageAppGetValue<Type> = Type extends StorageType ? StorageAppObjValues[ Type ] : never
export type StorageAppValues = Record<StorageType, StorageAppObjValues[StorageType]>
export type StorageAppValuesByGroup<Group> = OmitNeverInobjectValues<{
    [K in StorageType]: StorageAppObjValues[K]['group'] extends Group ? StorageAppObjValues[K]['defaultValue'] : never;
}>

export type StorageAppOptionValues= StorageAppValuesByGroup<typeof storageGroupsIds.option>
export type StorageAppContentValues = StorageAppValuesByGroup<typeof storageGroupsIds.content>

/**
 * ****************************************************************************.
 * OPTIONS
 * ****************************************************************************.
 */
export type OptionsStore = Record<AllowedSite | FiltersOpts,ComponentOption['value']>

export type ComponentOptionSection = {
    type: typeof componentTypes.option.section
    title: ComponentOption['title']
    value: ComponentOptionsRecursive
}
export type ComponentOptions = Omit<ComponentOption, 'onChange'> | ComponentOptionSection
export type ComponentOptionsRecursive = ComponentOptions[]
export type BtnStyle = ObjectValues< typeof optBtnStylesIds>
export type BtnStylesClasses =Record<BtnStyle, string>

export type FiltersOpts = ObjectValues< typeof optionsIds.filtersSidebar>
export type AllowedSite = ObjectValues< typeof optionsIds.allowSites>

export type AllowedSitesValue = {
	urlStarts: string[]
	videoSelector?: string[]
	defaultValue: boolean
	selectorForBtn?: ( {
		position: ObjectValues<typeof insertedAdjacentPosition>
		query: string
	} )[]
}
export type AllowedSites =Record<AllowedSite, AllowedSitesValue>

/**
 * ****************************************************************************.
 * RENDER COMPONENT
 * ****************************************************************************.
 */
export type RenderComponentParams = {
    componentClass: new ( arg: { target: Element } ) => unknown
    querySelelctor?: string
    insertAdjacent? : {
        position?: ObjectValues<typeof insertedAdjacentPosition>,
        elementID: string
    }
}
