<script lang="ts">

    import Option from "./option.svelte";
    import Accordion from "../../../accordion/main.svelte";
    import Btn from "../../../input/btn.svelte";
    import Animation from "./animation.svelte";
    import { componentTypes, filtersSectionsIds, allowedFilterTabs, type IFiltersCustomOpts, componentPositions } from "../../../types";
    import { faAdd } from "../../../fa/main";
    import { filters } from '../../store/main'

    /**
     * VARIABLES 
     */
    const { custom, locales, more, items } = filters
    const { valuesWithLocales, section, valuesNotInDefault } = custom
    const { countBySection } = valuesNotInDefault

    const indicatorObj = {
        position: componentPositions.indicator.left,
        type: componentTypes.indicator.neutral,
        customClasses: '!bg-primary-700 !w-2 !h-2 !ml-[-10px]'
    }

    /**
     * EVENTS 
     */
    const isKeyOfIFiltersCustomOpts = (key: string): key is keyof IFiltersCustomOpts => {
        return key in filtersSectionsIds.custom
    }

    const sectionIsNotInDefault = (key: keyof typeof $valuesWithLocales, countBySection: typeof $countBySection, section: typeof $section) => {

        let k: keyof typeof countBySection = key === 'shadow' ? 'box-shadow' : key 
        return k in $countBySection && typeof countBySection[k] === 'number' && countBySection[k] > 0 && !section[key]
    }

</script>

<Accordion 
    type={componentTypes.accordion.section}
>   
    
    <!-- BORDER, SHADOW, FILTERS -->
    {#each Object.entries($valuesWithLocales) as [sectionKey, sectionValue]}
        
        {#if sectionKey && isKeyOfIFiltersCustomOpts(sectionKey)}
        
            <Accordion
                type={componentTypes.accordion.item}
                title={sectionValue.title}
                bind:open={$section[sectionKey]}
                indicator={ sectionIsNotInDefault(sectionKey, $countBySection, $section) ? indicatorObj : undefined}
            >
                
                {#each sectionValue.value as value, i }

                    <Option 
                        keys={{
                            parent: sectionKey, 
                            list: i
                        }} 
                        {value}
                    />

                {/each}

            </Accordion>
        
        {/if}

    {/each}
    
    <!-- ANIMATION -->
    <Accordion
        type={componentTypes.accordion.item}
        title={{
            value: $locales.custom.animation.title,
            desc: $locales.custom.animation.desc
        }}
        bind:open={$section[filtersSectionsIds.custom.animation]}
    >
        <Animation/>
    </Accordion>
    
    {#if items.ifHasValue(allowedFilterTabs.more)}

        <Btn 
            customClasses="w-full"
            icon={faAdd}
            on:click={(e) => { 
                e.stopPropagation()
                more.addPreset.addCurrConfig()
            }}
            tooltip={{
                title: $locales.custom.addPreset.desc
            }}
        >
            {$locales.custom.addPreset.title}
        </Btn>
        
    {/if}

</Accordion>