<script>

    import Btn from "./btn.svelte";
    import { filters } from '../../store/main'
    import { allowedFilterTabs, componentTypes, Option } from  "../../../index";
    
    /**
     * VARIABLES 
     */
    const { presets, locales, items} = filters
    const {customList} = presets

    /**
     * EVENTS 
     */

</script>

<Option
    type={componentTypes.option.section}
    title={{
        value: $locales.presets.official.title,
        desc: $locales.presets.official.desc
    }}
>

{#each presets.list as value}
 
    <Btn {value} />

{/each}

</Option>

{#if items.ifHasValue(allowedFilterTabs.more)}

    <Option
        type={componentTypes.option.section}
        title={{
            value: $locales.presets.user.title,
            desc: $locales.presets.user.desc
        }}
    >   
            
        {#if $customList && $customList.length > 0 }

            {#each $customList as value }
            
                <Btn {value} rmBtn={true}/>

            {/each}
        
        {:else}

            <span class="italic text-gray-700">{$locales.presets.user.none}</span>

        {/if}

    </Option>

{/if}