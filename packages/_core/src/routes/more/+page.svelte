<script lang="ts">

    import {
      Accordion,
      Option,
      componentTypes,
      Tabs
    } from "$lib";
    import { page } from '$app/stores'

    /**
     * VARIABLES
     */
    let data = $page.data


</script>

<div class="{data.classes.pageContentCol} max-w-[500px]">
  <span>TAB</span>
  <Tabs {...{
    activeTabValue:2,
    items: [
      {
        name: "component",
        value: 1,
        component: Option,
        props: {
          type:"color-picker",
          value:'#3e9ff2'
        }
      },
      {
        name: "component with extra props",
        value: 2,
        component: Option,
        props: {
          title: {
            value: 'Title'
          },
          type:"color-picker",
          value:'#5e9ff2'
        }
      }
    ]
  }}/>

  <span>Accordion</span>
  <Accordion 
    type={componentTypes.accordion.section}
  >   
    <Accordion
        type={componentTypes.accordion.item}
        title={{
          value:"Accordion 1",
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
          type: componentTypes.title.tooltipLeft
        }}
        open={true }
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Vel veniam fugiat neque corrupti inventore minus eius quam sunt accusamus unde doloremque sequi enim sint rerum quae numquam,
      eveniet nesciunt excepturi!
    </Accordion>

    <Accordion
        type={componentTypes.accordion.item}
        title={{
          value:"Accordion 2"
        }}
        open={false}
    >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vel veniam fugiat neque corrupti inventore minus eius quam sunt accusamus unde doloremque sequi enim sint rerum quae numquam,
    eveniet nesciunt excepturi!

    </Accordion>
  </Accordion>

</div>