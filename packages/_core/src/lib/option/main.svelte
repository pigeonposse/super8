<script lang="ts">

    import Radio from "$lib/input/radio.svelte";
    import Range from "$lib/input/range.svelte";
    import Checkbox from "$lib/input/checkbox.svelte";
    import ColorPicker from "$lib/input/color-picker.svelte";
    import Select from "$lib/input/select.svelte";
    import Text from "$lib/input/text.svelte";
    import Number from "$lib/input/number.svelte";
    import CodeEditor from "$lib/input/code-editor.svelte";
    import Btn from "$lib/input/btn.svelte";
    import Title from "$lib/title/main.svelte";
    import { functs } from "$lib/_shared/main";
    import Reset from "./reset.svelte";

    import { componentTypes, type ComponentOption, type ComponentRange, type ComponentIndicator } from "$lib/types";
    import { Indicator } from "$lib";
    
    /**
     * VARIABLES
     */
    export let type: ComponentOption['type'] = componentTypes.option.checkbox
    export let id: ComponentOption['id'] = ''
    export let value: ComponentOption['value'] = undefined
    export let title: ComponentOption['title'] = undefined
    export let disabled: ComponentOption['disabled'] = undefined
    export let customClasses: ComponentOption['customClasses'] = ''
    export let opts: ComponentOption['opts'] = undefined
    export let onChange: ((v: ComponentOption['value']) => void) | undefined = undefined
    export let onReset: ComponentOption['onReset'] = undefined
    export let indicator: Partial<ComponentIndicator> | undefined = undefined

    let isHovered = false
    const rangeOpts = type === componentTypes.option.range ? opts as ComponentRange['opts'] : undefined
    if(!id) id = functs.generateRamdomID()

    /**
     * CLASSES
     */
    let sectionOptionClass="p-2"
    let optionClass="w-full bg-gray-200/50 dark:bg-gray-800 px-4 py-2 my-2 flex flex-row items-center justify-between rounded-lg relative hover:shadow-[0_0_20px_0px_rgba(0,0,0,0.3)] hover:shadow-gray-600/30"
    let optionDisabledClass="absolute z-10 inset-0 w-full h-full items-center justify-center bg-opacity-30 backdrop-blur-lg rounded-lg"
    let optionColClass="flex flex-row items-center"

    /**
     * EVENTS
     */
    $: {
        if( onChange && typeof onChange === 'function' ) {
            const isOpt = opts && typeof opts === 'object' && 'unit' in opts && typeof opts.unit === 'object' 
            // console.log(isOpt, value, id);
            if( value || isOpt ) onChange( value )
            
        }
    }

</script>   

{#if type === componentTypes.option.section}

    <div class="{sectionOptionClass} {customClasses}">

        <Title 
            id={id+'-title'}
            {...title}
        />

        <slot/>
    </div>

{:else}

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->

    <div 
        class="{optionClass} {customClasses}"
        on:mouseover={() => isHovered = true} 
        on:mouseout={() => isHovered = false}
    >

        {#if disabled}

            <div 
                class="{optionDisabledClass} {isHovered ? 'flex' : 'hidden'}"
            >
                { typeof disabled === 'string' ? disabled : 'Disabled' }
            </div>
            
        {/if}

        {#if indicator }
            <Indicator {...indicator} />
        {/if}

        <div class="{optionColClass}">

            <Title 
                id={id+'-title'}
                {...title}
            />

        </div>
        
        <div class="{optionColClass}">

            {#if type === componentTypes.option.btn }
                
                <Btn>
                    {value}
                </Btn>

            {:else if type === componentTypes.option.checkbox && typeof value === 'boolean' }

                <Checkbox 
                    id="{id}"
                    bind:value={value} 
                    disabled={disabled ? true : false}
                />

            {:else if type === componentTypes.option.text && typeof value === 'string'}

                <Text
                    id="{id}"
                    bind:value={value} 
                    customClasses="flex gap-3"
                    disabled={disabled ? true : false}
                />

            {:else if type === componentTypes.option.number && typeof value === 'number'}

                <Number
                    id="{id}"
                    bind:value={value} 
                    customClasses="flex gap-3"
                    disabled={disabled ? true : false}
                />

            {:else if type === componentTypes.option.radio && opts && Array.isArray(opts) && typeof value === 'string'}

                <Radio
                    id="{id}"
                    bind:value={value} 
                    {opts}
                    customClasses="flex gap-3"
                    disabled={disabled ? true : false}
                />

            {:else if type === componentTypes.option.select && opts && Array.isArray(opts) && typeof value === 'string' }

                <Select
                    id="{id}"
                    bind:value={value} 
                    {opts}
                    customClasses="flex gap-3"
                    disabled={disabled ? true : false}
                />

            {:else if type === componentTypes.option.range && typeof value === 'number' }

                <Range
                    id="{id}" 
                    opts={rangeOpts}
                    bind:value={value}
                    inputValue
                    customClasses="mx-4"
                    disabled={disabled ? true : false}
                />

            {:else if type === componentTypes.option.codeEditor && typeof value === 'string'}
                
                <CodeEditor
                    bind:value={value} 
                    type={componentTypes.codeEditor.json}
                    readonly={disabled ? true : false}
                    width="250px"
                    height="100px"
                />

            {:else if type === componentTypes.option.colorPicker && typeof value === 'string'}
                
                <ColorPicker
                    id="{id}"
                    bind:value={value} 
                    type={componentTypes.colorPicker.nativeAndOpacity}
                    disabled={disabled ? true : false}
                />

            {:else}

                No option set!

            {/if}

            {#if onReset }

                <Reset 
                    onClick={onReset}
                />

            {/if}

        </div>

    </div>

{/if}
