<script lang="ts">
    
  import {  
    Tabs,
    FiltersConfig, 
    AllowedSites, 
    Content, 
    optionsTabs, 
    browser, 
    contentIds,
    Debug
  } from "../lib/index";

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
