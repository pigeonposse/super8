<script lang="ts">

    import {
      Option,
      componentTypes,
    } from "$lib";
    import { page } from '$app/stores'

    /**
     * VARIABLES
     */
    let optionValuesDefault={
        toggle : true,
        select: "%",
        radio: 'px',
        range: 30,
        rangeUnit: 40,
        color: "#3e9ff2"
    }

    let optionValues= {...optionValuesDefault}

</script>

<div class="{$page.data.classes.pageContentCol}">

  <Option
    type={componentTypes.option.section}
    customClasses="bg-gray-100 dark:bg-gray-700 rounded-xl mb-2"
  >
    <div class="m-4 rounded-lg flex flex-row text-[12px]">
      {#each Object.entries(optionValues) as [key, value] }
        <span class="bg-gray-200 dark:bg-gray-600 py-1 px-2 m-2 rounded-lg ">{key}: {value}</span>
      {/each}
    </div>

    <Option
    title={{value: 'CHECKBOX TOGGLE'}}
      type={componentTypes.option.checkbox}
      bind:value={optionValues.toggle}

      onReset={() => {
        optionValues.toggle = optionValuesDefault.toggle
      }}
    />

    <Option
      title={{value: 'SELECT'}}
      type={componentTypes.option.select}
      bind:value={optionValues.select}
      opts={[
        {value: 'px', name: 'PIXELS'},
        {value: '%',  name: 'X100'}
      ]}
      onReset={() => {
        optionValues.select = optionValuesDefault.select
      }}
    />

    <Option
      title={{value: 'RADIO'}}
      type={componentTypes.option.radio}
      bind:value={optionValues.radio}
      opts={[
        {value: 'px', name: 'PIXELS'},
        {value: '%',  name: 'X100'}
      ]}
      onReset={() => {
        optionValues.radio = optionValuesDefault.radio
      }}
    />

    <Option
      title={{value: 'RANGE'}}
      type={componentTypes.option.range}
      bind:value={optionValues.range}
      opts={{
        min:0,
        max: 100,
        step: 1,
      }}
      onReset={() => {
        optionValues.range = optionValuesDefault.range
      }}
    />
    
    <Option
      title={{value: 'RANGE WITH SELECT UNIT'}}
      type={componentTypes.option.range}
      bind:value={optionValues.rangeUnit}
      opts={{
        min:0,
        max: 100,
        step: 1,
        unit: {
          value: 'px',
          opts: [
            {value: 'px'},
            {value: '%'}
          ]
        }
      }}
      onReset={() => {
        optionValues.rangeUnit = optionValuesDefault.rangeUnit
      }}
    />

    <Option
      title={{value: 'COLOR PICKER'}}
      type={componentTypes.option.colorPicker}
      bind:value={optionValues.color}
      onReset={() => {
        optionValues.range = optionValuesDefault.range
      }}
    />

  </Option>

  <Option
    type={componentTypes.option.colorPicker}
    title={{
      value: "CUSTOM TITLE",
      desc: 'Lorem ipsum',
      type: componentTypes.title.tooltipLeft,
      tooltip : {
        position: 'left'
      }
    }}
    value={'#3ef26c'}
  />

  <Option
    title={{value: 'DISABLED OPTION'}}
    type={componentTypes.option.range}
    value={30}
    disabled={"coming soon!!!"}
    opts={{
      min:0,
      max: 100,
      step: 1,
    }}
  />

  <Option
    title={{value: 'Code Editor'}}
    id="cccc"
    type={componentTypes.option.codeEditor}
    value={'[]'}
  />

</div>