<script lang="ts" >

    import {
      LangSelect
    } from "$lib";

    import { page } from '$app/stores';

    /**
     * CLASSES
     */
    let headerClass="fixed top-0 right-0 left-0 flex flex-row items-center justify-between m-2 z-[20000]"

</script>

<header class="{headerClass}">
    <h2 class="flex flex-row items-center justify-center text-[20px] font-bold p-2">
        <a href="/" class="flex flex-row items-center justify-center">
            <img src="/logo.png" width="100px" alt="logo"/>
        </a>
    </h2>
    <nav >
        <ul class="flex flex-row [&>li]:mx-2 [&>li]:py-1 [&>li]:px-4 [&>li]:rounded-full [&>li]:bg-gray-100 [&>li]:dark:bg-gray-700/50">
            
            {#each $page.data.routes as route}
                <li class=" {$page.url.pathname === route.route? '!bg-primary-700': ''}"><a href="{route.route}" class="{$page.data.classes.fontColor}">{route.name}</a></li>
            {/each}
            <li>
                <LangSelect/>
            </li>
            
        </ul>
    </nav>

</header>