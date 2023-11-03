<script lang="ts">

    import { 
        styleClass
    } from "$lib"
    import Ad from "./ad/main.svelte";
    import Desc from "./desc/main.svelte";
    import Filters from "./filters/main.svelte";
    import { responseWidth, windowWidth } from "./storage/main";

</script>

<svelte:window bind:innerWidth={$windowWidth} />

<div class="{ $windowWidth >= $responseWidth ? styleClass.pageContentRow : styleClass.pageContentCol} max-w-7xl m-auto p-4 sm:p-8">
        
    {#if $windowWidth <= $responseWidth}
        <Desc/>    
    {/if}

    <Filters/>

    <div 
        class="rounded-xl w-full m-4 flex flex-col items-center justify-between"
        style="{$windowWidth >= $responseWidth ? 'height:80vh;' : '' }"
    >
        
        {#if $windowWidth >= $responseWidth}
            <Desc/>    
        {/if}

        {#await import('./iframe/main.svelte') then module}

            <svelte:component this={module.default} />

        {:catch error}
    
            <p>Error loading component: {error.message}</p>

        {/await}
        
        <Ad/>

    </div>

</div>