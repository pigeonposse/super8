<script lang="ts">

    import { styleClass } from "$lib";
    import { dev} from '$app/environment';
    import { locales } from "../locales/main";

</script>

<div class="{styleClass.sectionBorder} bg-gray-600/20 text-gray-50 mt-4 w-full h-40 flex items-center justify-center">
    
    {#if dev}

        {$locales.ad.placeholder} 📢

    {:else}

        <script 
            async 
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7603475796200263"
            crossorigin="anonymous"
        ></script>
         <!-- super8 -->
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-7603475796200263"
            data-ad-slot="3925261583"
            data-ad-format="auto"
            data-full-width-responsive="true">
        </ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        
    {/if}

</div>