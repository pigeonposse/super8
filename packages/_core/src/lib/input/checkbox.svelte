<script lang="ts">

    import { Toggle } from "flowbite-svelte";
    import { componentTypes, type ComponentCheckbox } from "$lib/types";
    
    /**
     * VARIABLES
     */
    export let customClasses: ComponentCheckbox['customClasses'] = '' 
    export let id: ComponentCheckbox['id'] = ''
    export let value: ComponentCheckbox['value'] 
    export let disabled: ComponentCheckbox['disabled'] = undefined
    export let type: ComponentCheckbox['type']  = componentTypes.checkbox.toggle

    /**
     * VARIABLES
     */
    let inputClass = "cursor-pointer"

</script>

{#if type === componentTypes.checkbox.toggle}

    <Toggle 
        {id}
        class="{inputClass} {customClasses}"
        bind:checked={value} 
        size="small"
        {disabled}
    />

{:else if type === componentTypes.checkbox.native}

    <input 
        type="checkbox" 
        {id}
        class="{inputClass} {customClasses}"
        bind:checked={value} 
        {disabled}
    />
    
{/if}