<script lang="ts" >

    import {
      LangSelect,
      flowbite,
      Fa,
      faChevronDown,
	  Fab,
	  faPuzzlePiece,
	  faMobile,
	  faDesktop,
    } from "$lib";
    import Logo from "$lib/assets/logo-web.png";
	import { page } from "$app/stores";
	import { downloadLinks } from "./download-links";
	import DownloadLink from "./download-link.svelte";
	import { getFetchData } from "./fetch-link";

	const {t, currLocaleRoute, mainPkg, locale, locales, classes, isTauri } = $page.data

    const Dropdown = flowbite.Dropdown
    const Navbar = flowbite.Navbar
    const NavBrand = flowbite.NavBrand
    const NavHamburger = flowbite.NavHamburger
    const NavUl = flowbite.NavUl
    const NavLi = flowbite.NavLi

	// let navDownload = downloadLinks(mainPkg.extra.downloadUrl as typeof MAIN_PKG['extra']['downloadUrl'])
	let navDownload: Awaited<ReturnType<typeof getFetchData>> | undefined = undefined

    /**
     * CLASSES
     */
	 let headerClass="flex w-full flex-row items-center justify-between m-2 z-[20000]"

	const init = async () =>{
		navDownload = await getFetchData()
	}
	init()

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
			{#if navDownload}
				
            <Dropdown >
				{#if !isTauri && navDownload.desktop}
					<DownloadLink 
						title={'Desktop Applications'}
						icon={faDesktop}
						items={navDownload.desktop}
					/>
				{/if}
				{#if navDownload.mobile}
					<DownloadLink 
						title={'Mobile Applications'}
						icon={faMobile}
						items={navDownload.mobile}
					/>
				{/if}
				{#if navDownload.extension}
					<DownloadLink 
						title={'Browser extensions'}
						icon={faPuzzlePiece}
						items={navDownload.extension}
					/>
				{/if}
				{#if navDownload['wp-plugin']}
					<DownloadLink 
						title={'Wordpress plugins'}
						icon={Fab.faWordpressSimple}
						items={navDownload['wp-plugin']}
					/>
				{/if}
				{#if navDownload['container']}
					<DownloadLink 
						title={'Containers'}
						icon={Fab.faDocker}
						items={navDownload['container']}
					/>
				{/if}
            </Dropdown> 
			{/if} 
            <NavLi href="{mainPkg.extra.docsUrl}" target="_blank">{$t('common.documentation.message')}</NavLi>
            <NavLi href="{mainPkg.funding.url}" target="_blank">{$t('common.donate.message')}</NavLi>
            <NavLi>
                <LangSelect {t} {locale} {locales}/>
            </NavLi>      
        </NavUl>

    </Navbar>

</header>
