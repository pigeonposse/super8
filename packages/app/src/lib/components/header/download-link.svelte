<script lang="ts">
	import { Fa, faChevronRight, flowbite, type IconDefinition } from "$lib"
	import type { DownloadNavItem } from "./download-links";

	export let items: DownloadNavItem
	export let title: string
	export let icon: IconDefinition
	
	let innerWidth: number
	const Dropdown = flowbite.Dropdown
    const DropdownItem = flowbite.DropdownItem

	// $: console.log(innerWidth)
</script>

<svelte:window bind:innerWidth />

<DropdownItem class="flex items-center justify-between ">
	<div class="flex items-center">
		<Fa icon={icon} class="mr-4 text-[13px]"/> 
		<span>{title}</span> 
	</div>
	<Fa icon={faChevronRight} class="ml-4 text-[13px]"/>
</DropdownItem>
<Dropdown placement="{innerWidth >= 500 ? 'right-start' : 'bottom'}">
	{#each items as item }
		<DropdownItem 
			href={item.href} 
			target={item.target} 
			disabled={item.comingsoon ? item.comingsoon : false}
			class="hover:text-primary-600 dark:hover:text-primary-500"
		>
			<div class="flex items-center">
				{#if item.logo }
					<img 
						src="https://simpleicons.org/icons/{item.logo}.svg" 
						width="30" 
						height="30" 
						alt="icon"
						loading="lazy"
						class="mr-4 p-1.5 rounded-lg bg-gray-400/15 invert-[.60]"
					>		
				{/if}
				<span>{item.name}</span>
			</div>
		</DropdownItem>
	{/each}
</Dropdown>  
