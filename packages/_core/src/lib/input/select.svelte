<script lang="ts">

    import type { ComponentSelect } from "$lib";

    /**
     * VARIABLES
     */
    export let id: ComponentSelect['id'] = ''
    export let value: ComponentSelect['value']
    export let opts: ComponentSelect['opts']
    export let customClasses: ComponentSelect['customClasses'] = ''
    export let type: ComponentSelect['type'] = "native"
    export let disabled: ComponentSelect['disabled'] = undefined
    
    let defaultValue = value

    /**
     * CLASES
     */
    let selectClass = "cursor-pointer"

    /**
     * EVENTS
     */
    $: {
        let allowedValues = opts ? opts.map(opt => opt.value) : []
        value = value && allowedValues.includes(value) ? value : defaultValue
    }

</script>

<select 
    {id} 
    bind:value
    class="{selectClass} {customClasses} {type ? "pp-style-"+type : ''}"
    {disabled}
>
    {#if opts}

        {#each opts as opt }

            <option 
                value={opt.value}
                selected={opt.value == value ? true : false}
                disabled={opt.disabled ? true : false}
                hidden={opt.hidden ? true : false}
            >
                {opt.name ? opt.name : opt.value}
            </option>
            
        {/each}
        
    {/if}

</select>

<style>

    .pp-style-transparent {
        background: transparent;
        border: none;
        padding: 0;
        box-shadow:none;
        outline: none;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: '';
    }
    .pp-style-native {
        background: transparent;
        padding: 0;
        border: none;
        box-shadow:none;
        outline: none;
        appearance: auto;
        text-indent: 1px;
        font-size: 13px;
    }

</style>