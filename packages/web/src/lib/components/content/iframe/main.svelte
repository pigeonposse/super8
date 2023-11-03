<script lang="ts">
    
    import { InputText } from "$lib";
    import { locales } from "../locales/main";
    import { srcIframe } from "../storage/main";

    export let id: string

    const isValidUrl = (url: typeof $srcIframe) => {

        if(!url || url === "" || !url.startsWith('https://' )) return false

        return true

    }

</script>

{#if isValidUrl($srcIframe)}

    <iframe 
        loading="lazy"
        {id}
        width="600px"
        height="350px" 
        title={$locales.iframe.title}
        class="min-w-[200px] min-h-[100px] max-h-full max-w-full"
        src={$srcIframe}
        {...$$restProps}
    />

    {:else}

    <div 
        {id}
        class="w-[600px] h-[350px] bg-gray-800/80 flex flex-col items-center justify-center"
    >
    {$locales.iframe.error}
    </div>

{/if}

<InputText 
    id="{id}-input"
    bind:value={$srcIframe}
    placeholder={$locales.iframe.placeholder}
    customClasses="w-full mt-4 {!isValidUrl($srcIframe) ? '!border-red-500 !ring-red-500' : ''}"
/>