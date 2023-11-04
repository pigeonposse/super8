<script lang="ts" >

    import {
      LangSelect,
      flowbite,
      Fa,
      faChevronDown,
      styleClass
    } from "$lib";
    import { currLocaleRoute, t } from "$lib/i18n";
    import Logo from "$lib/assets/logo.png";

    /**
     * CLASSES
     */
    let headerClass="flex w-full flex-row items-center justify-between m-2 z-[20000]"
    
    let downloadMenu = [
        { 
            name: 'Chrome extension', 
            href: MAIN_PKG.extra.store.chrome.url,
            target:"_blank"
        },
        { 
            name: 'Firefox extension', 
            href: MAIN_PKG.extra.store.mozilla.url,
            target:"_blank" 
        },
        { 
            name: 'WP plugin', 
            href: MAIN_PKG.extra.store.wpPlugin.url,
            target:"_blank"
        },
        { 
            name: 'WP plugin (premium)', 
            href: MAIN_PKG.extra.store.wpPluginPremium.url,
            target:"_blank"
        },
    ]  

    const donateUrl = MAIN_PKG.funding.url
    const docsUrl = MAIN_PKG.extra.docsUrl
    const Dropdown = flowbite.Dropdown
    const DropdownItem = flowbite.DropdownItem

    // const MegaMenu = flowbite.MegaMenu
    const Navbar = flowbite.Navbar
    const NavBrand = flowbite.NavBrand
    const NavHamburger = flowbite.NavHamburger
    const NavUl = flowbite.NavUl
    const NavLi = flowbite.NavLi


</script>

<header class="{headerClass}">
    
    <Navbar let:hidden let:toggle class="p-2 dark:bg-transparent">
        <NavBrand href="{$currLocaleRoute}">
            <img 
                src={Logo}
                class="h-6 sm:h-9 hover-change-hue object-contain" 
                alt="Super8 Logo" 
                width="150px"
                height="50px"
            />
        </NavBrand>
        <NavHamburger on:click={toggle} />
        <NavUl {hidden}  class="bg-gray-900 {styleClass.sectionBorder}">
            <NavLi class="cursor-pointer flex flex-row items-center">
                {$t('common.download.message')}
                <Fa icon={faChevronDown} class="ml-4 text-[13px]"/>
            </NavLi>
            <Dropdown>
                {#each downloadMenu as item }
                    <DropdownItem 
                        href={item.href} 
                        target={item.target} 
                        class="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                        {item.name}
                    </DropdownItem>
                {/each}
            </Dropdown>  
            <NavLi href="{docsUrl}" target="_blank">{$t('common.documentation.message')}</NavLi>
            <NavLi href="{donateUrl}" target="_blank">{$t('common.donate.message')}</NavLi>
            <NavLi>
                <LangSelect/>
            </NavLi>      
        </NavUl>

    </Navbar>

</header>