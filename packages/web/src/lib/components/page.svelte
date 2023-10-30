<script lang="ts" >
    
    import { 
      Footer,
      Header,
    } from "$lib";

    import { page } from '$app/stores';

    /**
     * CLASSES
     */
    let pageViewClass = "h-screen flex items-center justify-center flex-col"
    let pageViewDarkClass = pageViewClass + " "+$page.data.classes.fontColor+" bg-gray-50 dark:bg-gray-900"

</script>

<Header/>

<article 
    class="{pageViewDarkClass}" 
    style="background-image: url('/background.png');"
>

    <slot />

</article>

<Footer/>