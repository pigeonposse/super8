<script lang="ts">
    
  	import { Tabs } from "@s-8/core";

  	import { Debug, AllowedSites, Content, FiltersConfig } from "../lib/components";
	import { contentIds, optionsTabs } from "../lib/const";
	import { browser } from "../lib/_shared/browser/main";

</script>

<Content
  type={contentIds.options}
 >

  <Tabs items={[
    { 
      name:  browser.i18n.getMessage("opts_tabs_filters"),
      value: optionsTabs.filtersSidebar,
      component: FiltersConfig 
    },
    { 
      name: browser.i18n.getMessage("opts_tabs_allowedSites"),
      value: optionsTabs.allowSites,
      component: AllowedSites
    },
    { 
      name: browser.i18n.getMessage( 'opts_tabs_debug' ),
      value: optionsTabs.debug,
      component: Debug
    },
  ]} 
/>
  
</Content>
