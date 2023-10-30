<script lang="ts">

    import { componentTypes, type ComponentText } from "$lib";

    /**
     * VARIABLES
     */
    export let id: ComponentText['id'] = ''
    export let value: ComponentText['value']
    export let customClasses: ComponentText['customClasses'] = ''
    export let type: ComponentText['type'] = componentTypes.text.native
    export let disabled: ComponentText['disabled'] = undefined
    export let placeholder: ComponentText['placeholder'] = ""

    /**
     * CLASS
     */
    let inputClass ="bg-gray-200/50 dark:bg-gray-800 border-none rounded-lg focus:ring-primary-500 focus:border-primary-500 py-1 px-2"
</script>


<input 
    {id} 
    type="text" 
    bind:value={value}
    class="{inputClass} {type ? "pp-style-"+type : ''} {customClasses}"
    style={type === componentTypes.text.transparent ?`width: ${String(value).length}ch`: ''}
    {disabled}
    {placeholder}
/>

<style>

    .pp-style-transparent[type=text] {
        background: transparent;
        border: none;
        padding: 0;
        box-shadow:none;
        outline: none;
        overflow: scroll;
        -moz-appearance: textfield;
             appearance: textfield;
    }

    /* Chrome, Safari, Edge, Opera */
    .pp-style-transparent[type=text]::-webkit-outer-spin-button,
    .pp-style-transparent[type=text]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

</style>