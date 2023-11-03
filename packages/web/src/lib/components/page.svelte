<script lang="ts" >
    
    import { 
      Footer,
      Header,
      styleClass,
    } from "$lib";
    import bgImage from "$lib/assets/background.png";

    /**
     * CLASSES
     */
    let pageViewClass = "h-screen w-full flex items-center justify-between flex-col"
    let pageViewDarkClass = pageViewClass + " "+styleClass.fontColor+" bg-gray-50 dark:bg-gray-900"

</script>

<div 
    id="app"
    class="{pageViewDarkClass}" 
    style="background-image: url('{bgImage}');"
>
    <div 
        class="h-full w-full flex items-center justify-between flex-col overflow-hidden" 
        style="backdrop-filter: brightness(0.5);"
    >
        <Header/>

        <article class="overflow-y-scroll w-full">
                <slot />
        </article>

        <Footer/>
    </div>
</div>