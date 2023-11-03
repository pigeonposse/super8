<script lang="ts">
    
    import { Btn, InputText, Not, copyText } from "$lib";
    import { locales } from "../locales/main";
    import { id, responseWidth, srcIframe, stylesId, windowWidth } from "../storage/main";
    
    /**
     * VARIABLES
     */
    let copied = false

    /**
     * EVENTS
     */
    const copyIframe = () => {

        const styleElement = document.querySelector('#'+$stylesId)
        let copiedStyles = ''; 
        if (styleElement) {

            const styleContent = styleElement.innerHTML
            if (styleContent) {
                // const stylesWithoutSelector = styleContent.replace(/#pp-super8-custom\s*{([^}]*)}/, '$1').trim()
                const stylesWithoutSelector = styleContent.replace(new RegExp(`#${$id}\\s*{([^}]*)}`), '$1').trim()
                copiedStyles = stylesWithoutSelector
            }
        }

        const iframeString = `<iframe src="${$srcIframe}" title="${$locales.iframe.title}" style="${copiedStyles}" width="600px" height="350px" ></iframe>`;
        copyText(iframeString)
        copied = true
        setTimeout(() => copied = false, 3000)
    }

    const isValidUrl = (url: typeof $srcIframe) => {

        if(!url || url === "" || !url.startsWith('https://' )) return false

        return true

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