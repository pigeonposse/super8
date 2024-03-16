<script lang="ts" >

    import '../app.css'
    import { 
      Footer,
      Header,
    } from "$lib";
    import bgImage from "$lib/assets/background.png";
	import { page } from "$app/stores"
	
	const {classes} = $page.data

    /**
     * CLASSES
     */
    let pageViewClass = "h-screen w-full flex items-center justify-between flex-col"
    let pageViewDarkClass = pageViewClass + " "+classes.fontColor+" bg-gray-50 dark:bg-gray-900 selection:bg-primary-500 selection:text-black font-sans"

</script>

<div 
    class="{pageViewDarkClass}" 
    style="background-image: url('{bgImage}');"
>
    <div 
        class="h-full w-full flex items-center justify-between flex-col overflow-hidden" 
        style="backdrop-filter: brightness(0.5);"
    >
        <Header/>

        <main class="overflow-y-scroll w-full" >
            <slot />
        </main>

        <Footer/>
    </div>
</div>
