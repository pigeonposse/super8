<script lang="ts">

    import { Range } from "flowbite-svelte";
    import { componentTypes, type ComponentRange } from "$lib";
    import Select from "./select.svelte";
    import Number from "./number.svelte";

    /**
     * VARIABLES
     */
    export let opts: ComponentRange['opts'] = undefined
    export let id: ComponentRange['id'] = ''
    export let value: ComponentRange['value']
    export let inputValue: ComponentRange['inputValue'] = false
    export let customClasses: ComponentRange['customClasses'] = ''
    export let type: ComponentRange['type'] = componentTypes.range.native
    export let disabled: ComponentRange['disabled'] = undefined

    let attr = opts ? opts : { max: 0, min: 100, step: 1 }

    /**
     * CLASSES
     */
    let classText='text-[12px]'
    let classSpan = `${classText} flex flex-row items-center`

</script>

<Range 
    id="{id}" 
    step={attr.step} 
    min={attr.min}
    max={attr.max}
    bind:value={value}
    class="{type === componentTypes.range.native ? 'pp-s8-range' : ''} {customClasses}"
    size={'sm'}
    {disabled}
/>

<span class="{classSpan}">

    {#if inputValue}

        <Number 
            id="{id}-value" 
            opts={attr}
            bind:value={value}
            customClasses="{classText}"
            type={componentTypes.number.transparent}
            {disabled}
        />

    {:else }
        <span>{value}</span>
    {/if}

    {#if attr.unit && typeof attr.unit === 'object' && attr.unit.opts && attr.unit.value}

        <Select 
            id="{id}-unit" 
            bind:value={attr.unit.value}
            opts={attr.unit.opts}
            customClasses={classText}
            type={componentTypes.select.transparent}
            {disabled}
        />

    {:else if attr.unit && typeof attr.unit === 'string' }   
        <span>{attr.unit}</span>
    {/if}

</span>

<style>

    :global(.pp-s8-range[type='range']::-webkit-slider-thumb) {
        background-color: rgb(255 237 0 / var(--tw-bg-opacity));
    }
    :global(.pp-s8-range[type='range']::-moz-range-thumb) {
        background-color: rgb(255 237 0 / var(--tw-bg-opacity));
    }
    
</style>
