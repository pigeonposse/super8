/**
 * Todo.
 *
 * @description Todo.
 */
import type { IFilterJsonValues, IFiltersPresets } from '@s-8/core'
import { persisted }                               from 'svelte-persisted-store'
import type { Writable }                           from 'svelte/store'

export const srcIframe = persisted( 's8-iframe-src','https://www.youtube.com/embed/wdTo_Kihcyw?si=ft5lmO6GP3GXi6e_' )
export const filtersValue: Writable<IFilterJsonValues | undefined> = persisted( 's8-filters-value', undefined )
export const filtersHide = persisted( 's8-filters-hide', false )
export const filtersPresetsValue: Writable<{ 
    value: string;
    customList: [] | IFiltersPresets;
    } | undefined
> = persisted( 's8-filters-presets-value', undefined )
