<script lang="ts">
    
    import {Option } from "@super8/core"
    import OptionRecursive from './option.svelte'
    import type { ComponentOptionSection } from "../../../types"
    
    export let value: ComponentOptionSection

</script>

<Option type={value.type} title={value.title}>
    
    {#each value.value as option }

        {#if typeof option === 'object' && 'value' in option }
        
            <OptionRecursive
                value={option}
            />

        {/if}

    {/each}

</Option>