<script lang="ts">

    import {Btn, componentTypes} from "@super8/core";
    import { contentIds, type ContentType } from "../types";
    import { browser, extStoreUrl, openOptionsPage, extWebUrl, collectiveFundingUrl, extRepoUrl, extImagesSrc, extVersion } from "../_shared/main";

    export let logo: boolean = true
    export let description: string = ""
    export let type: ContentType = contentIds.options

    let classHeader = "m-2 relative flex flex-col items-center text-center text-[11px] text-gray-400"
    let classContent = "h-full overflow-auto relative"
    let classFooter = "m-4"
    let classFooterPopupLinks = "py-0 px-0 text-[10px] opacity-80 hover:opacity-100"
    let classAll ="bg-gray-900 w-full h-screen text-white flex flex-col items-center py-8 justify-between relative"
    let classShadow = "absolute w-full h-full blur-xl bg-gradient-to-br from-primary-700/30 to-gray-500/30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
    if(type === contentIds.popup) classAll+=' border-[6px] border-primary-500'
    
</script>

<div 
    class="{classAll}"
    style="background-image: url('/{extImagesSrc.background}');"
>

    <header 
        class={classHeader}
    >

        <div 
            class={classShadow} 
        >
        </div>

        {#if logo}
            <img 
                src="/{extImagesSrc.logo}"
                width="{type === contentIds.popup ? '150px': '280px'}"
                alt="Logo"
            />
        {/if}

        {#if description !== "" }
            <span class="p-2">{description}</span>
        {/if}

    </header>

    <div 
        class={classContent} 
    >
        <slot/>
    </div>

    {#if type === contentIds.options}

        <div class="{classFooter}">

            <Btn
                href={collectiveFundingUrl}
                color={componentTypes.btn.none}
            >
                { browser.i18n.getMessage( 'donate' )}  ☕   
            </Btn>
            <Btn
                href={extWebUrl}
                color={componentTypes.btn.none}
            >
                { browser.i18n.getMessage( 'web' )}  🌐
            </Btn>

        </div>
    
    {:else if type === contentIds.popup}

        <Btn
            customClasses="underline opacity-60"
            color={componentTypes.btn.none}
            on:click={openOptionsPage}
        >
            {browser.i18n.getMessage( 'options_page' )}
        </Btn>
        
        <div class="{classFooter} flex flex-row items-center justify-center">
            <Btn
                href={collectiveFundingUrl}
                color={componentTypes.btn.none}
                customClasses={classFooterPopupLinks}
                tooltip={{
                    title: browser.i18n.getMessage( 'donate' )
                }}
            >
                ☕   
            </Btn>
            <Btn
                href={extRepoUrl}
                color={componentTypes.btn.none}
                customClasses={classFooterPopupLinks}
                tooltip={{
                    title: browser.i18n.getMessage( 'contribute' )
                }}
            >
                🐦
            </Btn>
            <Btn
                href={extStoreUrl}
                color={componentTypes.btn.none}
                customClasses={classFooterPopupLinks}
                tooltip={{
                    title: browser.i18n.getMessage( 'review' )
                }}
            >
                ⭐️
            </Btn>
            <Btn
                href={extWebUrl}
                color={componentTypes.btn.none}
                customClasses={classFooterPopupLinks}
                tooltip={{
                    title: browser.i18n.getMessage( 'web' )
                }}
            >
                🌐
            </Btn>
        </div>

        <span
            class="text-gray-400 text-[10px]"
        >
            v{extVersion}
        </span>

    {/if}

</div>
