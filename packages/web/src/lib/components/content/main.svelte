<script lang="ts">
    
    import { CodeEditor, InputText, type IFilterJsonValues, Btn, Tooltip } from "$lib"

    export let src: string
    export let id: string
    export let value: IFilterJsonValues | undefined

    let iframeValue: string
    
    const isValidUrl = (url: typeof src) => {

        if(!url || url === "" || !url.startsWith('https://' )) return false

        return true

    }

    $: if(value) iframeValue = JSON.stringify(value, null, 2)

</script>

<div class="rounded-xl m-4 flex flex-col items-center">
   
    {#if isValidUrl(src)}

        <iframe 
            loading="lazy"
            {id}
            width="600px"
            height="350px" 
            title="Super8 iframe customed!!"
            {src}
            {...$$restProps}
            on:change={() => console.log(0)}
        />

    {:else}

        <div 
            {id}
            class="w-[360px] h-[215px] bg-gray-800/80 flex flex-col items-center justify-center"
        >
            Error in iframe or url
        </div>

    {/if}

    <InputText 
        id="{id}-input"
        bind:value={src}
        placeholder="Add here your iframe or your image url"
        customClasses="w-full mt-4 {!isValidUrl(src) ? '!border-red-500 !ring-red-500' : ''}"
    />

    <!-- CHANGE TO STYLES IFRAME -->
    <Btn 
        id="{id}-btn"
        color="primary"
        customClasses="w-full mt-4"
    >
        COPY VALUE
    </Btn>
    <Tooltip
        type="main"
        id="{id}-btn"
        position="bottom"
    >
        <CodeEditor 
            value="{iframeValue}"

            customClasses="w-full mt-4"
        />
    </Tooltip>

</div>