<script lang="ts">

    import { Radio } from "flowbite-svelte";

    import { componentTypes, type ComponentRadio } from "$lib";

    /**
     * VARIABLES
     */
    export let id: ComponentRadio['id'] = ''
    export let value: ComponentRadio['value']
    export let opts: ComponentRadio['opts']
    export let customClasses: ComponentRadio['customClasses'] = ''
    export let type: ComponentRadio['type'] = componentTypes.radio.native
    export let disabled: ComponentRadio['disabled'] = undefined

    let defaultValue = value

    /**
     * EVENTS
     */
    $: {
        let allowedValues = opts ? opts.map(opt => opt.value) : []
        value = value && allowedValues.includes(value) ? value : defaultValue
    }

</script>

<div class="pp-s8-radio-{type} {customClasses}">

    {#if opts && Array.isArray(opts)}
        {#each opts as radio }
            <Radio 
                value="{radio.value}"
                disabled={ disabled ? true : radio.disabled}
                name={id}
                bind:group={value}
            >
                {radio.name ? radio.name :radio.value }
            </Radio>    
        {/each}
    {/if}

</div>
