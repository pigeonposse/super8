<script lang="ts">

    import { Badge, Not, componentTypes } from "@s-8/core";
    import { browser } from "../../_shared/main";
    import { messagesIds, type Message } from "../../types";
    import { messageStore } from './store';
    import {Option} from "../../index";

    browser.runtime.onMessage.addListener((message: Message) => {

        if (message.type === messagesIds.log) messageStore.add( message.data )

    })

</script>

<Option 
    type={componentTypes.option.section}
    title={{
        value: browser.i18n.getMessage( 'opts_debug' ),
        desc:  browser.i18n.getMessage( 'opts_debug_desctiption' )
    }}
    customClasses="max-h-[60vh]"
>

{#if $messageStore.length > 0}

    {#each $messageStore as msn }

    <Not type={msn.type} >
        <span>{msn.message}</span>
        <Badge>{msn.time}</Badge>
    </Not> 

    {/each}

{:else} 

    <span class="opacity-50 py-4">{browser.i18n.getMessage( 'opts_debug_none' )}</span>

{/if}

</Option>
