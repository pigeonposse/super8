<script lang="ts" >

    import { page } from '$app/stores';
    import { DarkMode } from '$lib';

    const mainPkg = MAIN_PKG
    const pkg = PKG

    /**
     * CLASSES
     */
    let footerClass="fixed bottom-0 right-0 left-0 flex flex-col items-center justify-center m-2 z-[20000]"

</script>

<footer class="{footerClass}">
    <!-- <div class="p-4 bg-gray-500 w-full rounded-lg">

    </div> -->
    <div class="flex flex-col items-center">
        <div class="flex flex-row">
            <span class="opacity-60 {$page.data.classes.fontColor}">
                © copyright
            </span> 
            <a 
                class="opacity-100 italic ml-2 {$page.data.classes.fontColor}" 
                href={mainPkg.extra.collective.web}
                target="_blank"
            >
                {mainPkg.extra.collective.name}
            </a>
        </div>
        <span class="text-[11px] m-2 opacity-80">
            v{pkg.version}
        </span>
    </div>

</footer>

<DarkMode hidden={true} forceValue="dark"/>