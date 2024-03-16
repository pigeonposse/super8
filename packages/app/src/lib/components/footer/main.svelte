<script lang="ts" >
	
	import { page } from '$app/stores';
    import { Btn, faEllipsis, flowbite, styleClass } from '$lib'

	const {t, mainPkg, pkg } = $page.data

    /**
     * CLASSES
     */
    let footerClass="w-full flex flex-row items-center justify-between sm:px-4 p-2 text-[11px] container"
    const Dropdown = flowbite.Dropdown
    const DropdownItem = flowbite.DropdownItem

</script>

<footer class="{footerClass}">

        <div class="flex flex-row">
            <span class="opacity-60 {styleClass.fontColor}">
                ©
            </span> 
            <a 
                class="opacity-100 italic ml-1 {styleClass.fontColor}" 
                href={mainPkg.extra.collective.web}
                target="_blank"
            >
                {mainPkg.extra.collective.name}
            </a>
        </div>
        <span class="m-2 opacity-80">
            v{pkg.version}
        </span>

        <div>
            <Btn 
                icon="{faEllipsis}"
                customClasses="mt-0"
            />
            <Dropdown placement="top-end">
                {#each [
                    { 
                        name: "🐛 "+ $t('common.issues.message'), 
                        href: mainPkg.bugs.url,
                        target:"_blank"
                    },
                    { 
                        name: "👨‍💻 "+  $t('common.contribute.message'), 
                        href: mainPkg.repository.url,
                        target:"_blank" 
                    },
                    { 
                        name: "🐦 "+ $t('common.about.message'), 
                        href: mainPkg.extra.collective.about,
                        target:"_blank"
                    },
                    { 
                        name: "🚀 "+ $t('common.moreProjects.message'), 
                        href: mainPkg.extra.collective.web,
                        target:"_blank"
                    },
                ] as item }

                <DropdownItem 
                    href={item.href} 
                    target={item.target} 
                    class="hover:text-primary-600 dark:hover:text-primary-500"
                >
                    {item.name}
                </DropdownItem>
                {/each}
            </Dropdown>  
        </div>


</footer>

<!-- <DarkMode hidden={true} forceValue="dark"/> -->
