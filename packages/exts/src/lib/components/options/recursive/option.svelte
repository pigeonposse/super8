<script lang="ts">
    
    import {Option, componentTypes, type ComponentOption} from "@s-8/core"
    import Section from './section.svelte'
    import { context } from "./context"
    import type { ComponentOptionSection, ComponentOptions } from "../../../types"

    export let value: ComponentOptions

    let v: ComponentOption['value']
    let val = value as ComponentOptionSection

    $: if(v !== undefined && 'id' in value) context.updateValue(value.id, v)

</script>

{#if value.type !== componentTypes.option.section }

    <Option
        {...value}
        bind:value={v}
    />

{:else if 
    value.type === componentTypes.option.section && 
    'title' in value && 
    'value' in value &&
    typeof value.value === 'object' &&
    Array.isArray(value.value) 
}

    <Section value={val}/>

{/if}