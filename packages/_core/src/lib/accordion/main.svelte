<script lang="ts">

    import { Accordion, AccordionItem } from 'flowbite-svelte'

    import { 
        componentTypes, 
        type ComponentAccordion, 
        functs, 
        Title, 
        type ComponentIndicator,
        Indicator,
        componentPositions
    } from '../index';

    /**
     * VARIABLES
     */
    export let title: ComponentAccordion['title'] = undefined;
    export let type: ComponentAccordion['type'] = componentTypes.accordion.item;
    export let open: ComponentAccordion['open'] = false;
    export let indicator: Partial<ComponentIndicator> | undefined = undefined

    export let customClasses: String = '';
    
    const id = functs.generateRamdomID()

</script>

{#if type === componentTypes.accordion.item}

    <AccordionItem 
        bind:open={open} 
        borderClass="border-none"
        borderBottomClass="border-none" 
        class="{customClasses}"
    >

        <span slot="header" class="relative"> 

            {#if title && title.value }
                <Title {...title}/>
            {/if}
    
            {#if indicator }
                <Indicator 
                    position={componentPositions.indicator.left}
                    customClasses={'ml-[-9px]'}
                    { ...indicator} 
                />
            {/if}

        </span>

        <slot/>

    </AccordionItem>

{:else if type === componentTypes.accordion.section }

    <Accordion 
        flush  
        class="w-full {customClasses}"
    >

        <slot/>
    
    </Accordion>

{/if}
