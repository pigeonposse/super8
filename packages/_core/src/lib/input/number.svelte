<script lang="ts">

    import { componentTypes, type ComponentNumber } from "$lib";

    /**
     * VARIABLES
     */
    export let opts: ComponentNumber['opts'] = {max: 0, min: 100, step: 1 } 
    export let id: ComponentNumber['id'] = ''
    export let value: ComponentNumber['value']
    export let customClasses: ComponentNumber['customClasses'] = ''
    export let type: ComponentNumber['type'] = componentTypes.number.native
    export let disabled: ComponentNumber['disabled'] = undefined

    let attr = opts ? opts : {max: 0, min: 100, step: 1 } 
    let defaultValue = value

    /**
     * EVENTS
     */
    $: {
        let newValue = typeof value !== 'number' ? defaultValue : value;
        newValue = newValue < attr.min ? attr.min : newValue;
        newValue = newValue > attr.max ? attr.max : newValue;
        value = newValue;
    }

</script>


<input 
    id="{id}-value" 
    type="number" 
    step={attr.step} 
    min={attr.min}
    max={attr.max}
    bind:value={value}
    class="{customClasses} {type ? "pp-style-"+type : ''}"
    style={type === componentTypes.number.transparent ?`width: ${String(value).length}ch`: ''}
    {disabled}
/>

<style>

    .pp-style-transparent[type=number] {
        background: transparent;
        border: none;
        padding: 0;
        box-shadow:none;
        outline: none;
        -moz-appearance: textfield;
             appearance: textfield;
    }

    /* Chrome, Safari, Edge, Opera */
    .pp-style-transparent[type=number]::-webkit-outer-spin-button,
    .pp-style-transparent[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

</style>