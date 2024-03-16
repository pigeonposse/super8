<script lang="ts" >

    import {
      LangSelect,
      flowbite,
      Fa,
      faChevronDown,
	  faChevronRight,
	  Fab,
	  faPuzzlePiece,
	  faMobile,
	  faDesktop,
    } from "$lib";
    import Logo from "$lib/assets/logo.png";
	import { page } from "$app/stores";
	import { downloadLinks } from "./download-links";
	import DownloadLink from "./download-link.svelte";

	const {t, currLocaleRoute, mainPkg, locale, locales, classes, isTauri } = $page.data

    const Dropdown = flowbite.Dropdown
    const DropdownItem = flowbite.DropdownItem

    // const MegaMenu = flowbite.MegaMenu
    const Navbar = flowbite.Navbar
    const NavBrand = flowbite.NavBrand
    const NavHamburger = flowbite.NavHamburger
    const NavUl = flowbite.NavUl
    const NavLi = flowbite.NavLi

	// @ts-ignore
	const navDownload = downloadLinks(mainPkg.extra.downloadUrl)
	
    /**
     * CLASSES
     */
	 let headerClass="flex w-full flex-row items-center justify-between m-2 z-[20000]"

</script>

<header class="{headerClass}">
    
    <Navbar let:hidden let:toggle class="p-2 bg-transparent dark:bg-transparent">
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
        <NavUl {hidden}  class="bg-gray-900 {classes.sectionBorder}">
            <NavLi class="cursor-pointer flex flex-row items-center">
                {$t('common.download.message')}
                <Fa icon={faChevronDown} class="ml-4 text-[13px]"/>
            </NavLi>
            <Dropdown>
				{#if !isTauri}
					<DownloadLink 
						title={'Desktop Applications'}
						icon={faDesktop}
						items={navDownload.desktop}
					/>
				{/if}
				<DownloadLink 
					title={'Mobile Applications'}
					icon={faMobile}
					items={navDownload.mobile}
				/>
				<DownloadLink 
					title={'Browser extensions'}
					icon={faPuzzlePiece}
					items={navDownload.extension}
				/>
				<DownloadLink 
					title={'Wordpress plugins'}
					icon={Fab.faWordpressSimple}
					items={navDownload['wp-plugin']}
				/>
				<DownloadLink 
					title={'Containers'}
					icon={Fab.faDocker}
					items={navDownload['container']}
				/>
            </Dropdown>  
            <NavLi href="{mainPkg.extra.docsUrl}" target="_blank">{$t('common.documentation.message')}</NavLi>
            <NavLi href="{mainPkg.funding.url}" target="_blank">{$t('common.donate.message')}</NavLi>
            <NavLi>
                <LangSelect {t} {locale} {locales}/>
            </NavLi>      
        </NavUl>

    </Navbar>

</header>
