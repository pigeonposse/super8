<script>
    
    import AddPreset from "./add-preset.svelte";
    import Copy from "./copy.svelte";
    import { filters } from "../../store/main";
    import { 
        allowedFilterTabs, 
        componentTypes, 
        filtersSectionsIds, 
        Accordion 
    } from "../../../index";

    /**
     * VARIABLES 
     */
    const { locales, more, items } = filters
    const { section } = more

    /**
     * CLASSES 
     */
    let divSection="flex flex-col"

</script>

<Accordion
    type={componentTypes.accordion.section}
    customClasses="!px-[2px]"
>
    {#if items.ifHasValue(allowedFilterTabs.custom)}
        
        <Accordion
            type={componentTypes.accordion.item}
            title={{
                value: $locales.more.copy.title,
                desc: $locales.more.copy.desc
            }}
            bind:open={$section[filtersSectionsIds.more.copy]}
        >
            <div class="{divSection}">
                <Copy/>
            </div>
        </Accordion>

    {/if}

    <Accordion
        type={componentTypes.accordion.item}
        bind:open={$section[filtersSectionsIds.more.addPreset]}
        title={{
            value: $locales.more.addPresets.title,
            desc: $locales.more.addPresets.desc
        }}
    >
        <div class="{divSection}">
            <AddPreset/>
        </div>
    </Accordion>
</Accordion>