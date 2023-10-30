<script lang="ts">
    
    import { onMount } from "svelte";
    import Options from "./recursive/main.svelte"

    import { type OptionsStore, storageIds, type ComponentOptionsRecursive } from "../../types";
    import { updateOptions } from "./utils";
    import { storage } from "../../storage/main";
    
    export let data: ComponentOptionsRecursive
    let value: OptionsStore
    let show = false

    async function setDefaultValue() {

        const res = await storage.value[storageIds.options].get()
        if(res !== undefined) value = res as typeof value

        if(value && value !== undefined && JSON.stringify(value) !== '{}' ) {
            updateOptions(data, value)
        }

        show = true
    }

    onMount( async () => {
        await setDefaultValue()
    })
    async function setValue(value: OptionsStore) {
        await storage.value[storageIds.options].set(value)
    }

    $: if(value) setValue(value)

</script>

{#if data && show}

    <Options 
        {data} 
        id={storageIds.options}
        bind:value={value} 
    />

{/if}