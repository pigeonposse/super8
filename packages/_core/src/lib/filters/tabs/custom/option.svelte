<script lang="ts">

    
    import Option from "$lib/option/main.svelte";
    import { componentPositions, componentTypes, type IFilterCustom, type IFiltersCustomOpts } from "$lib/types";
    import { filters } from '../../store/main'
    
    /**
     * VARIABLES 
     */
    export let value: IFilterCustom
    export let keys: { 
        parent: keyof IFiltersCustomOpts
        list: number
    }

    const { custom, locales } = filters
    const { resetValue, valuesNotInDefault, isBlocked } = custom
    const indicatorObj = {
        position: componentPositions.indicator.left,
        type: componentTypes.indicator.neutral,
        customClasses: '!bg-primary-700 !w-2 !h-2'
    }

    const notInDefaultList =  valuesNotInDefault.list

</script>

{#if value && keys && typeof keys === 'object' && 'parent' in keys  && 'list' in keys}

    <Option 
        {...value}
        bind:value={$custom[keys.parent].value[keys.list].value}
        onReset={() => { if(value) resetValue(value.id)}}
        disabled={ $isBlocked && !$notInDefaultList[value.id] ? $locales.limit.optionBlock : false }
        indicator={ $notInDefaultList[value.id] ? indicatorObj: undefined}
    />

{/if}