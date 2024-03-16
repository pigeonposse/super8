<script lang="ts">
    
    import { Btn, InputText, Not, copyText } from "$lib";
    import { locales } from "../locales/main";
    import { id, srcIframe, stylesId } from "../storage/main";
    import { convertYoutubeUrlToEmbed, getIframeString, isValidUrl } from "./functs";
    
    /**
     * VARIABLES
     */
    let copied = false

    /**
     * EVENTS
     */
    const copyIframe = () => {
        
        const iframeString = getIframeString( { 
            stylesId: $stylesId, 
            id : $id, 
            iframeTxt: $locales.iframe.title,
            url : $srcIframe,
        } )

        if(iframeString){
            copyText(iframeString)
            copied = true
            setTimeout(() => copied = false, 3000)
        }
    }

    // IF IS YOUTUBE URL CONVERT TO EMBDEBED

    $: if(isValidUrl($srcIframe) && $srcIframe.startsWith('https://www.youtube.com/watch')) {
        const convertedUrl = convertYoutubeUrlToEmbed( $srcIframe)
        if(convertedUrl) $srcIframe = convertedUrl
    }

</script>

<div class="w-full p-4">

    {#if isValidUrl($srcIframe)}

        <iframe 
            loading="lazy"
            id={$id}
            width="100%"
            height="350px" 
            title={$locales.iframe.title}
            class="max-h-full max-w-full min-h-[350px]"
            src={$srcIframe}
        />

    {:else}

        <div 
            id={$id}
            class="bg-gray-950 !rounded-lg w-full flex flex-col items-center justify-center"
            style="height:350px"
        >
            {#if $srcIframe == ""}
                {$locales.iframe.add} ✨
            {:else}
                {$locales.iframe.error} 👎
            {/if}
        
        </div>

    {/if}

    <InputText 
        id="{id}-input"
        bind:value={$srcIframe}
        placeholder={$locales.iframe.placeholder}
        customClasses="w-full mt-4 {!isValidUrl($srcIframe) ? $srcIframe == "" ? '!border-blue-500 !ring-blue-500' : '!border-red-500 !ring-red-500' : ''}"
    />

    <Btn 
        id="{$id}-btn"
        color="grayReverse"
        customClasses="w-full mt-4"
        on:click={copyIframe}
    >
        {$locales.copyBtn.value}
    </Btn>

    {#if copied}

        <Not 
            type="success"
            customClasses="w-full"
        >
            {$locales.copyBtn.copied}
        </Not>

    {/if}

</div>