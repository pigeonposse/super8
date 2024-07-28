<script lang="ts">
	
	// import {AllowedSites, Content, browser, contentIds } from '../lib/index';

	import { AllowedSites, Content } from "../lib/components";
	import { contentIds } from "../lib/const";
	import { browser } from "../lib/_shared/browser/main";

</script>

<Content 
    type={contentIds.popup} 
    description={browser.i18n.getMessage( 'description' )}
> 
    <AllowedSites/>
</Content>
