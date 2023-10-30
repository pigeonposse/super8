/**
 * TYPES.
 *
 * @description File for set core types.
 */

import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import type { ComponentType }  from 'svelte'
import type { locales }        from '$lib/filters/locales/main.ts'

/**
 * ****************************************************************************.
 * CONSTANTS
 * ****************************************************************************.
 */
export const componentTypes = {
	btn : {
		light       : 'light',
		neutral     : 'neutral',
		primary     : 'primary',
		secondary   : 'secondary',
		gray        : 'gray',
		grayReverse : 'grayReverse',
		success     : 'success',
		error       : 'error',
		none        : 'none',
	},
	checkbox : {
		native : 'native',
		toggle : 'toggle',
	},
	codeEditor : {
		json : 'json',
	},
	colorPicker : {
		native           : 'native',
		nativeAndOpacity : 'native-opacity',
	},
	text : {
		main        : 'main',
		native      : 'native',
		transparent : 'transparent',
	},
	number : {
		native      : 'native',
		transparent : 'transparent',
	},
	radio : {
		native : 'native',
	},
	range : {
		native : 'native',
	},
	select : {
		native      : 'native',
		transparent : 'transparent',
	},
	option : {
		btn         : 'btn',
		section     : 'section',
		checkbox    : 'checkbox',
		codeEditor  : 'code-ditor',
		colorPicker : 'color-picker',
		text        : 'text',
		number      : 'number',
		radio       : 'radio',
		range       : 'range',
		select      : 'select',
	},
	filters : {
		sidebar : 'sidebar',
		main    : 'main',
	},
	accordion : {
		section : 'section',
		item    : 'item',
	},
	badge : {
		primary     : 'primary',
		secondary   : 'secondary',
		gray        : 'gray',
		neutral     : 'neutral',
		transparent : 'transparent',
		success     : 'success',
		error       : 'error',
		warning     : 'warning',
	},
	notification : {
		error   : 'error',
		warn    : 'warn',
		success : 'success',
		info    : 'info',
	},
	tooltip : {
		main : 'main',
		info : 'info',
	},
	title : {
		tooltipLeft  : 'tooltip-left',
		tooltipRight : 'tooltip-right',
	},
	indicator : {
		main    : 'main',
		error   : 'error',
		warn    : 'warn',
		success : 'success',
		info    : 'info',
		neutral : 'neutral',
	},
} as const

export const componentPositions = {
	tooltip : {
		topStart    : 'top-start',
		top         : 'top',
		topEnd      : 'top-end',
		rightStart  : 'right-start',
		right       : 'right',
		rightEnd    : 'right-end',
		bottomStart : 'bottom-start',
		bottom      : 'bottom',
		bottomEnd   : 'bottom-end',
		leftStart   : 'left-start',
		left        : 'left',
		leftEnd     : 'left-end',
	},
	indicator : {
		bottom      : 'bottom',
		right       : 'right',
		left        : 'left',
		top         : 'top',
		bottomLeft  : 'bottom-left',
		bottomRight : 'bottom-right',
		topLeft     : 'top-left',
		topRight    : 'top-right',
	},
	filters : {
		sidebar : {
			bottom : 'bottom',
			right  : 'right',
			left   : 'left',
			top    : 'top',
			none   : 'none',
		},
		btn : {
			bottomLeft  : 'bottom-left',
			bottomRight : 'bottom-right',
			topLeft     : 'top-left',
			topRight    : 'top-right',
			none        : 'none',
		},
	},
} as const

export const allowedFilterTabs = {
	custom : 1,
	preset : 2,
	more   : 3,
	btn    : 4,
} as const

export const filtersSectionsIds = {
	custom : {
		filter    : 'filter',
		border    : 'border',
		shadow    : 'box-shadow',
		animation : 'animation',
	},
	presets : {
		official : 'official',
		user     : 'user',
	},
	more : {
		copy      : 'copy',
		addPreset : 'add-preset',
	},

} as const

export const filterCustomIds = {
	borderWidth      : 'border-width',
	borderStyle      : 'border-style',
	borderRadius     : 'border-radius',
	borderColor      : 'border-color',
	shadowX          : 'box-shadow--x',
	shadowY          : 'box-shadow--y',
	shadowSpread     : 'box-shadow--spread',
	shadowBlur       : 'box-shadow--blur',
	shadowInset      : 'box-shadow--inset',
	shadowColor      : 'box-shadow--color',
	filterBlur       : 'filter--blur',
	filterBrightness : 'filter--brightness',
	filterContrast   : 'filter--contrast',
	filterGrayscale  : 'filter--grayscale',
	filterHueRotate  : 'filter--hue-rotate',
	filterInvert     : 'filter--invert',
	filterOpacity    : 'filter--opacity',
	filterSaturation : 'filter--saturate',
	filterSepia      : 'filter--sepia',
} as const

export const filterCustomTypesIds = {
	range       : 'range',
	colorPicker : 'color-picker',
	radio       : 'radio',
	checkbox    : 'checkbox',
	select      : 'select',
} as const

export const unitValues = {
	px   : 'px',
	deg  : 'deg',
	x100 : '%',
} as const

export const sizeValues = {
	extraSmall : 'extra-small',
	small      : 'small',
	medium     : 'medium',
	large      : 'large',
	extraLarge : 'extra-large',
} as const

/**
 * ****************************************************************************.
 * TYPE UTILS
 * ****************************************************************************.
 */
export type ObjectValues<Values> = Values[keyof Values]
export type RecursivePartial<T> = {
	[P in keyof T]?: T[P] extends object ? RecursivePartial<T[P]> : T[P];
}
export type ObjectTypeBasedInTypeKeys<Type, GeneralValueType> = {
	[K in keyof Type]: GeneralValueType; 
}
export type OmitNeverInobjectValues<T> = Omit<T, { [K in keyof T]: T[K] extends never ? K : never }[keyof T]>

export type CreateArrayWithLengthX<
    LENGTH extends number,
    ACC extends unknown[] = [],
> = ACC['length'] extends LENGTH
    ? ACC
    : CreateArrayWithLengthX<LENGTH, [...ACC,1]>

export type NumericRange<
   START_ARR extends number[], 
   END extends number, 
   ACC extends number=never>
=START_ARR['length'] extends END 
   ? ACC | END
   : NumericRange<[...START_ARR,1], END, ACC | START_ARR['length']>

/**
 * ****************************************************************************.
 * SHARED 
 * ****************************************************************************.
 */
export type UnitValues = ObjectValues<typeof unitValues>
export type SizeValues = ObjectValues<typeof sizeValues>
export type SelectOpt<Value> = { 
    value: Value, 
    name?: string, 
    disabled?: boolean 
    hidden?: boolean 
}
export type SelectAttr<Value> = { 
    value: Value, 
    opts:( SelectOpt<Value> )[]
}
export type SelectAttrs = SelectAttr<unknown>
export type InputRangeSharedAttrs = {
    max: number,
    min: number, 
    step: number,
}

export type InputNumberAttrs = InputRangeSharedAttrs 
export type InputRangeAttrs = InputRangeSharedAttrs & {
    unit?: UnitValues | SelectAttr<UnitValues>
}

/**
 * ****************************************************************************.
 * COMPONETS
 * ****************************************************************************.
 */

/**
 * INPUTS.
 */

export type ComponentInputShared<Type> = {
    id: string
    type: ObjectValues<Type>
    customClasses?: string 
}

export type ComponentNot= ComponentInputShared<typeof componentTypes.notification> 

export type ComponentBtn = ComponentInputShared<typeof componentTypes.btn> & {
    href: string 
    ping: boolean 
    active: string | number | string[] | undefined | boolean
	disabled?: boolean
	tooltip?: Partial<ComponentTooltip> & {
		title?: string
	}
	icon?: IconDefinition
}

export type ComponentCheckbox = ComponentInputShared<typeof componentTypes.checkbox> & {
    value: boolean 
    disabled?: boolean
}
export type ComponentColorPicker = ComponentInputShared<typeof componentTypes.colorPicker> & {
    value: string 
    disabled?: boolean
}
export type ComponentText = ComponentInputShared<typeof componentTypes.number> & {
    value: string
    disabled?: boolean
	placeholder?: string
}
export type ComponentNumber = ComponentInputShared<typeof componentTypes.number> & {
    value: number 
    opts?: InputNumberAttrs
    disabled?: boolean
}

export type ComponentSelect = ComponentInputShared<typeof componentTypes.select> & {
    value: string 
    opts?: SelectOpt<string>[]
    disabled?: boolean
}

export type ComponentRadio = ComponentInputShared<typeof componentTypes.radio> & {
    value: string 
    opts?: SelectOpt<string>[]
    disabled?: boolean
}
export type ComponentRange = ComponentInputShared<typeof componentTypes.range> & {
    value: number 
    opts?: InputRangeAttrs
    inputValue: boolean 
    disabled?: boolean
}
export type ComponentCodeEditor= ComponentInputShared<typeof componentTypes.codeEditor> & {
    value: string
    readonly?: boolean
    placeholder?: string
    height?: string
    width?: string
}
export type ComponentTitle= ComponentInputShared<typeof componentTypes.title> & {
    value: string
    desc?: string
    tooltip?: Partial<ComponentTooltip>
}

/**
 * OPTION.
 */
export type ComponentOptionShared<ValueType extends { value: ValueType['value'], opts?: ValueType['opts'] }> = ComponentInputShared<typeof componentTypes.option> & {
    value?: ValueType['value']
    opts?: ValueType['opts']
    title?: Partial<ComponentTitle> & { value: ComponentTitle['value']}
    disabled?: boolean | string
    onChange?: ( newValue: ValueType['value'] ) => void
    onReset?: () => void
}

export type ComponentOption = 
    ComponentOptionShared<ComponentCheckbox> |
	ComponentOptionShared<ComponentText> |
    ComponentOptionShared<ComponentRadio> |
    ComponentOptionShared<ComponentNumber> |
    ComponentOptionShared<ComponentSelect> |
    ComponentOptionShared<ComponentRadio> |
    ComponentOptionShared<ComponentRange> |
    ComponentOptionShared<ComponentCodeEditor> 

/**
 * TAB.
 */
export type ComponentTabs = {
    items: {
        value: number, 
		component: ComponentType 
        name: string, 
		desc?: string, 
        props?: object
		indicator?: boolean
    }[]
    activeTabValue?: number
    customClasses: string 
    customBtnClasses: string
}

/**
 * ACCORDION.
 */
export type ComponentAccordion= {
    title?: Partial<ComponentTitle> & { value: ComponentTitle['value']}
    type: ObjectValues<typeof componentTypes.accordion>
    open?: boolean
}

/**
 * BADGE.
 */
export type ComponentBadge = ComponentInputShared<typeof componentTypes.badge> & {
    title: string
    url?: string
}

/**
 * TOOLTIP.
 */
export type ComponentTooltip = ComponentInputShared<typeof componentTypes.tooltip> & {
    position?: ObjectValues<typeof componentPositions.tooltip>
    icon?: IconDefinition
}

/**
 * INDICATOR.
 */
export type ComponentIndicator= Omit<ComponentInputShared<typeof componentTypes.indicator>, 'id'> & {
	position?: ObjectValues<typeof componentPositions.indicator>
	title?: string
	size?: SizeValues
}
/**
 * SIDEBAR.
 */
export type ComponentSidebarContentFilters = {
    allowedItems?: ObjectValues<typeof allowedFilterTabs>[]
    width?: string
    height?: string
	customClasses? : string
}
export type ComponentSidebarFilters = {
    position?: ObjectValues<typeof componentPositions.filters.sidebar>
    content?: ComponentSidebarContentFilters
}
export type ComponentBtnFilters = {
    position?: ObjectValues<typeof componentPositions.filters.btn>
    title?: string
    customClasses? : string
    color?: ComponentBtn['type']
	indicator?: ComponentIndicator
}

export type ComponentFilters = ComponentInputShared<typeof componentTypes.filters> & {
    value?: string
    title?: string
    active: boolean
    toSelectors : string[]
    btn?: ComponentBtnFilters
	locales?: RecursivePartial<typeof locales>
	document?: Document
    position?: ObjectValues<typeof componentPositions.filters.sidebar>
    content?: ComponentSidebarContentFilters
	optionsLimit?: number
	valuesChanged?: number
}

/**
 * ****************************************************************************.
 * FILTERS
 * ****************************************************************************.
 */

export type FilterCustomIds = ObjectValues<typeof filterCustomIds>

export type IFilterCustomShared<Type extends { value: Type['value'], opts?: Type['opts'] }, Id> = {
    id: FilterCustomIds
    title: Partial<ComponentTitle> & { value: ComponentTitle['value']}
    type: Id 
    value: Type['value']
    opts?: Type['opts']
}

export type IFilterCustomSharedWithRequiredOpts<Type extends { value: Type['value'], opts?: Type['opts'] }, Id> = 
    Omit<IFilterCustomShared<Type, Id>, 'opts'> & { opts: NonNullable<Type['opts']> }

export type IFilterJsonValue = {
    id: FilterCustomIds;
    value: string | number | boolean;
	// unit?: UnitValues
}
export type IFilterJsonValues = IFilterJsonValue[]
export type FiltersCustomToExport = {
	values: {
		id: FilterCustomIds;
		value: string | number | boolean;
		unit?: string;
	} []
	presets: {
		value: string
		customList: [] | IFiltersPresets
	}
	hide: boolean
}
export type IFilterCustom = 
    IFilterCustomShared<ComponentCheckbox, typeof filterCustomTypesIds.checkbox> | 
    IFilterCustomShared<ComponentColorPicker, typeof filterCustomTypesIds.colorPicker> | 
    IFilterCustomSharedWithRequiredOpts<ComponentRange, typeof filterCustomTypesIds.range> | 
    IFilterCustomSharedWithRequiredOpts<ComponentRadio, typeof filterCustomTypesIds.radio> | 
    IFilterCustomSharedWithRequiredOpts<ComponentSelect, typeof filterCustomTypesIds.select>

export type IFiltersCustom = IFilterCustom[]

export type FiltersCustomOptsValues = {
	title: Partial<ComponentTitle> & { value: ComponentTitle['value']},
	// open?: boolean,
	value: IFiltersCustom
}
export type IFiltersCustomType = ObjectValues<typeof filtersSectionsIds.custom>
export type IFiltersCustomOpts = Omit<ObjectTypeBasedInTypeKeys<
	typeof filtersSectionsIds.custom, 
	FiltersCustomOptsValues
>, 'animation'>

/**
 * ****************************************************************************.
 * PRESETS
 * ****************************************************************************.
 */
export type IFiltersPresetStyle = IFilterJsonValue
export type IFiltersPresetStyles = IFiltersPresetStyle[]
export type IFiltersPreset = {
    id: string
    name: string
    opts: {
        color: string
        gradientColor?: string
    }
    value: IFiltersPresetStyles
}
export type IFiltersPresets = IFiltersPreset[]

/**
 * ****************************************************************************.
 * STORE
 * ****************************************************************************.
 */

export type AddStylesParams = {
	customValues: IFiltersCustom
	presetsValue: string
	selectors: string[]
	isHide: boolean
	id: string
}
export type AddStylesConstructorParams = AddStylesParams & { document: Document }
export type AddPresetParams = {
	name: string
	color: string
	value: IFiltersPresetStyles
}
