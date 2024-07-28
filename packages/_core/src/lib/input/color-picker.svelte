<script lang="ts">

    import { Popover } from "flowbite-svelte";
    import { functs } from "$lib/_shared/main";
    import { type ComponentColorPicker, componentTypes } from "$lib/types";
    import Range from "./range.svelte";
    
    /**
     * VARIABLES
     */
    export let customClasses: ComponentColorPicker['customClasses'] = '' 
    export let id: ComponentColorPicker['id'] = ''
    export let value: ComponentColorPicker['value'] 
    export let disabled: ComponentColorPicker['disabled'] = false
    export let type: ComponentColorPicker['type']  = componentTypes.colorPicker.native
    
    let opacityValue: number = functs.color.getOpacity( value ) * 100 || 100
    let hexValue : string = functs.color.toHexWithoutOpacity(value)

    /**
     * CLASSES
     */
    let inputClass = "cursor-pointer"

    /**
     * EVENTS
     */
    $: {

        if (type === componentTypes.colorPicker.nativeAndOpacity){
            value = functs.color.toRgba(hexValue, opacityValue)
        }
        
        // console.log(
        //     'input',hexValue, 
        //     'opcaity',opacityValue, 
        //     'value',value
        // )
    }

</script>

{#if type === componentTypes.colorPicker.native}

    <input 
        type="color" 
        {id}
        class="colorpicker circle w-[30px] h-[32px]{inputClass} {customClasses}"
        bind:value={value}
        on:click={e => e.stopPropagation()}
        {disabled}
    />

{:else if type === componentTypes.colorPicker.nativeAndOpacity}

    <input 
        {id} 
        class="w-[27px] h-[27px] rounded-full border border-gray-700 text-[0px] {inputClass} {customClasses}" 
        style="background-color:{value}; font-size:0px;"
        bind:value={value}
        {disabled}
    />

    <Popover triggeredBy="#{id}" trigger="click">

        <input 
            type="color" 
            id="{id}-color" 
            class="colorpicker rounded h-[20px] w-full !ring-1"
            style="background-color:{hexValue}; --tw-ring-color:{functs.color.getHexDarken(hexValue)};"
            bind:value={hexValue}
            on:click={e => e.stopPropagation()}
            {disabled}
        />
        
        <div class="flex flex-row items-center min-w-max">
            <Range
                id="{id}-opacity" 
                opts={{
                    min: 0,
                    max: 100,
                    step: 1,
                    unit: '%'
                }}
                bind:value={opacityValue}
                inputValue
                customClasses="mx-2"
            />
        </div>

    </Popover>

{/if}

<style>

    .colorpicker[type="color"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .circle[type="color"]::-webkit-color-swatch {
        border-radius: 50%;
        padding: 0;
        border: none;
    }
    .circle[type="color"]::-moz-color-swatch {
        border-radius: 50%;
        padding: 0;
        border: none;
    }

    .rounded[type="color"]::-webkit-color-swatch {
        border-radius: 10px;
        padding: 0;
        border: none;
    }
    .rounded[type="color"]::-moz-color-swatch {
        border-radius: 10px;
        padding: 0;
        border: none;
    }

</style>
