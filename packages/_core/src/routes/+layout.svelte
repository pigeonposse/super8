<script lang="ts" >

    import '../app.css'
    import { Btn, faCircleHalfStroke } from "$lib";
    import { onMount } from 'svelte';
    import { page } from '$app/stores'

    /**
     * VARIABLES
     */
    let darkmode = false

    /**
     * CLASSES
     */
    let headerClass="top-0 fixed right-0 left-0 flex flex-row items-center justify-between m-2 z-[20000]"
    let footerClass="fixed bottom-0 right-0 left-0 flex flex-row items-center justify-center m-2 z-[20000]"
    let pageViewClass = "h-screen flex items-center justify-center flex-col"
    let pageViewDarkClass = pageViewClass + " "+$page.data.classes.fontColor+" bg-gray-50 dark:bg-gray-900"
    let pageTitle = "text-[30px] font-bold uppercase"
    
    /**
     * EVENTS
     */
    const setDarkMode = ( mode = true ) => {

        const html = document.querySelector('html')

        if(mode) {
            document.documentElement.classList.add('dark')
            if(html) html.style.colorScheme = 'dark'
            localStorage.theme = 'dark'
            darkmode = false
        }else {
            document.documentElement.classList.remove('dark')
            if(html) html.style.colorScheme = 'light'
            localStorage.theme = 'light'
            darkmode = true
        }

    }

    const onClickDarkMode = () => {
        
        if(darkmode) 
            setDarkMode(true)
        else 
            setDarkMode(false)

    }

    onMount(() => {

        if (window.matchMedia) {
            // console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) 
                setDarkMode(true)
            else 
                setDarkMode(false)
        }
      

        
    })


</script>

<header class="{headerClass}">
    
    <h2 class="flex flex-row items-center justify-center text-[20px] font-bold p-2">
        <a href="/" class="flex flex-row items-center justify-center">
            <img src="favicon.png" width="30px" alt="logo"/>
            <span class="ml-2 {$page.data.classes.fontColor}">Core DEMO</span>
        </a>
    </h2>
    <nav >
        <ul class="flex flex-row [&>li]:mx-2 [&>li]:py-1 [&>li]:px-4 [&>li]:rounded-full [&>li]:bg-gray-100 [&>li]:dark:bg-gray-700/50">
            
            {#each $page.data.routes as route}
                <li class=" {$page.url.pathname === route.route? '!bg-primary-700': ''}"><a href="{route.route}" class="{$page.data.classes.fontColor}">{route.name}</a></li>
            {/each}
            <li class="!bg-gray-200 dark:!bg-gray-700">
                <Btn 
                    icon={faCircleHalfStroke}
                    color="none"
                    on:click={onClickDarkMode}
                    customClasses="!my-0"
                />
            </li>
            
        </ul>
    </nav>

</header>

<article class="{pageViewDarkClass}">

    <h1 class="{pageTitle}">
        {$page.data.title}
    </h1>

    <slot />

</article>

<footer class="{footerClass}">
    <span >
        <span class="opacity-60 {$page.data.classes.fontColor}">
            © copyright
        </span> 
        <a 
            class="opacity-100 italic {$page.data.classes.fontColor}" 
            href="https://pigeonposse.com"
            target="_blank"
        >
            PigeonPosse
        </a>
    </span>
</footer>