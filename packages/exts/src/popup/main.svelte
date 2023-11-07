<script lang="ts">
    
    import {AllowedSites, Content, browser, contentIds } from '../lib/index';

</script>

<Content 
    type={contentIds.popup} 
    description={browser.i18n.getMessage( 'description' )}
> 
    <AllowedSites/>
</Content>
