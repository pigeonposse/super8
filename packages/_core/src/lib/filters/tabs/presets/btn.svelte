<script lang="ts">

    import { Popover } from "flowbite-svelte";
    import { filters } from '../../store/main'

    import { 
        type IFiltersPreset,
        componentTypes, 
        functs,
        faInfo,
        Fa,
        Btn,
        CodeEditor
    } from "../../../index";

    
    /**
     * VARIABLES 
     */
    export let value: IFiltersPreset | undefined
    export let rmBtn = false

    const { presets, locales } = filters
    const { valueID } = presets
    const id = functs.generateRamdomID()

    /**
     * EVENTS 
     */

</script>

{#if value }
        
    <Btn
        color={$valueID === value.id  ? componentTypes.btn.primary : componentTypes.btn.neutral }
        customClasses="mr-2"
        on:click={(e) => { 
            e.stopPropagation()
            if(value) presets.update(value)
        }}
    >
        {value.name}

        <span 
            {id}
            class="w-[20px] h-[20px] ml-2 flex items-center justify-center rounded-full"
            style="background-color:{value.opts.color}"
        >
            <Fa 
                icon={faInfo} 
                class="drop-shadow-lg"
                style="color:{functs.color.getHexDarken(value.opts.color)}"
            />

        </span>
    </Btn>

    <Popover 
        triggeredBy="[id^='{id}']"
        class="max-w-[230px] items-start cursor-auto text-[12px]"
    >
        <div class="flex justify-center">
            {value.id}
        </div>
        
        <div class="flex flex-col items-start py-1">
            <CodeEditor 
                type={componentTypes.codeEditor.json}
                readonly={true}
                value="{functs.objectToJson(value.value)}"
                height="100px"
                width="200px"
                customClasses="rounded-xl text-[10px] bg-gray-900 text-start border border-gray-700"
            />
        </div>

        {#if rmBtn }

            <Btn
                color={componentTypes.btn.neutral }
                on:click={(e) => { 
                    e.stopPropagation()
                    if(value) presets.removeCustom(value.id)
                }}
                customClasses="!py-1 px-2 w-full !my-2"
            >
                {$locales.presets.user.btnRemove}
            </Btn>

        {/if}

    </Popover>

{/if}