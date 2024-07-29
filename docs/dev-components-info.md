# Component Index

The core of Super8 is built using the Svelte JavaScript framework. Here's a list of all the components and their properties for Super8 developers.

> 19 components exported from @s-8/core@0.2.4.

## Components

- [`Accordion`](#accordion)
- [`Badge`](#badge)
- [`Btn`](#btn)
- [`Checkbox`](#checkbox)
- [`CodeEditor`](#codeeditor)
- [`Filters`](#filters)
- [`FiltersBtn`](#filtersbtn)
- [`Indicator`](#indicator)
- [`InputColor`](#inputcolor)
- [`InputNumber`](#inputnumber)
- [`InputText`](#inputtext)
- [`Not`](#not)
- [`Option`](#option)
- [`Radio`](#radio)
- [`Range`](#range)
- [`Select`](#select)
- [`Tabs`](#tabs)
- [`Title`](#title)
- [`Tooltip`](#tooltip)

---

## `Accordion`

### Props

| Prop name     | Required | Kind             | Reactive | Type                 | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | -------------------- | ---------------------- | ----------- |
| open          | No       | <code>let</code> | Yes      | <code>boolean</code> | <code>false</code>     | --          |
| title         | No       | <code>let</code> | No       | --                   | <code>undefined</code> | VARIABLES   |
| type          | No       | <code>let</code> | No       | --                   | <code>undefined</code> | --          |
| indicator     | No       | <code>let</code> | No       | --                   | <code>undefined</code> | --          |
| customClasses | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>        | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Badge`

### Props

| Prop name     | Required | Kind             | Reactive | Type                | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| type          | No       | <code>let</code> | No       | --                  | <code>undefined</code> | VARIABLES   |
| customClasses | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | --          |
| id            | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | --          |
| url           | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | --          |
| title         | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Btn`

### Props

| Prop name     | Required | Kind             | Reactive | Type                 | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | -------------------- | ---------------------- | ----------- |
| id            | No       | <code>let</code> | Yes      | <code>string</code>  | <code>''</code>        | --          |
| customClasses | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>        | VARIABLES   |
| color         | No       | <code>let</code> | No       | --                   | <code>undefined</code> | --          |
| href          | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>        | --          |
| ping          | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| active        | No       | <code>let</code> | No       | --                   | <code>undefined</code> | --          |
| disabled      | No       | <code>let</code> | No       | --                   | <code>undefined</code> | --          |
| tooltip       | No       | <code>let</code> | No       | --                   | <code>undefined</code> | --          |
| icon          | No       | <code>let</code> | No       | --                   | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

| Event name | Type      | Detail |
| :--------- | :-------- | :----- |
| click      | forwarded | --     |

## `Checkbox`

### Props

| Prop name     | Required | Kind             | Reactive | Type                | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| value         | Yes      | <code>let</code> | Yes      | --                  | <code>undefined</code> | --          |
| customClasses | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | VARIABLES   |
| id            | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | --          |
| disabled      | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| type          | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `CodeEditor`

### Props

| Prop name     | Required | Kind             | Reactive | Type                 | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | -------------------- | ---------------------- | ----------- |
| placeholder   | No       | <code>let</code> | Yes      | <code>string</code>  | <code>""</code>        | --          |
| readonly      | No       | <code>let</code> | Yes      | <code>boolean</code> | <code>false</code>     | --          |
| value         | Yes      | <code>let</code> | Yes      | --                   | <code>undefined</code> | --          |
| type          | No       | <code>let</code> | No       | --                   | <code>undefined</code> | --          |
| height        | No       | <code>let</code> | No       | --                   | <code>undefined</code> | --          |
| width         | No       | <code>let</code> | No       | --                   | <code>undefined</code> | --          |
| customClasses | No       | <code>let</code> | No       | <code>string</code>  | <code>""</code>        | --          |

### Slots

None.

### Events

None.

## `Filters`

### Props

| Prop name     | Required | Kind               | Reactive | Type                                                 | Default value                                                             | Description |
| :------------ | :------- | :----------------- | :------- | ---------------------------------------------------- | ------------------------------------------------------------------------- | ----------- |
| presetsValue  | No       | <code>let</code>   | Yes      | <code>ComponentFilters['presets']</code>             | <code>{ value: $valueID, customList: $customList, }</code>                | --          |
| hide          | No       | <code>let</code>   | Yes      | <code>ComponentFilters['hide']</code>                | <code>undefined</code>                                                    | --          |
| value         | No       | <code>let</code>   | Yes      | <code>ComponentFilters['values']</code>              | <code>undefined</code>                                                    | --          |
| valuesChanged | No       | <code>let</code>   | Yes      | <code>ComponentFilters['valuesChanged']</code>       | <code>undefined</code>                                                    | --          |
| active        | No       | <code>let</code>   | Yes      | <code>ComponentFilters['active']</code>              | <code>false</code>                                                        | --          |
| type          | No       | <code>let</code>   | No       | <code>ComponentFilters['type']</code>                | <code>undefined</code>                                                    | --          |
| toSelectors   | No       | <code>let</code>   | No       | <code>ComponentFilters['toSelectors']</code>         | <code>['video']</code>                                                    | --          |
| btn           | No       | <code>let</code>   | No       | <code>ComponentFilters['btn']</code>                 | <code>undefined</code>                                                    | --          |
| content       | No       | <code>let</code>   | No       | <code>ComponentFilters['content']</code>             | <code>undefined</code>                                                    | --          |
| locales       | No       | <code>let</code>   | No       | <code>ComponentFilters['locales']</code>             | <code>undefined</code>                                                    | --          |
| id            | No       | <code>let</code>   | No       | <code>ComponentFilters['id']</code>                  | <code>''</code>                                                           | --          |
| document      | No       | <code>let</code>   | No       | <code>ComponentFilters['document']</code>            | <code>undefined</code>                                                    | --          |
| position      | No       | <code>let</code>   | No       | <code>ComponentFilters['position']</code>            | <code>undefined</code>                                                    | --          |
| optionsLimit  | No       | <code>let</code>   | No       | <code>ComponentFilters['optionsLimit']</code>        | <code>undefined</code>                                                    | --          |
| changeActive  | No       | <code>const</code> | No       | <code>(v: ComponentFilters['active']) => void</code> | <code>(v) => { if (typeof v === 'boolean') filtersActive.set(v); }</code> | --          |

### Slots

| Slot name | Default | Props                           | Fallback |
| :-------- | :------ | :------------------------------ | :------- |
| content   | No      | <code>{ slot: content } </code> | --       |
| footer    | No      | <code>{ slot: footer } </code>  | --       |
| header    | No      | <code>{ slot: header } </code>  | --       |

### Events

None.

## `FiltersBtn`

### Props

| Prop name     | Required | Kind             | Reactive | Type                 | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | -------------------- | ---------------------- | ----------- |
| title         | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>        | VARIABLES   |
| position      | No       | <code>let</code> | No       | --                   | <code>undefined</code> | --          |
| customClasses | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>        | --          |
| color         | No       | <code>let</code> | No       | --                   | <code>undefined</code> | --          |
| indicator     | No       | <code>let</code> | No       | --                   | <code>undefined</code> | --          |
| active        | No       | <code>let</code> | No       | <code>boolean</code> | <code>true</code>      | --          |

### Slots

None.

### Events

None.

## `Indicator`

### Props

| Prop name     | Required | Kind             | Reactive | Type                | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| position      | No       | <code>let</code> | No       | --                  | <code>undefined</code> | VARIABLES   |
| type          | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| customClasses | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | --          |
| title         | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| size          | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `InputColor`

### Props

| Prop name     | Required | Kind             | Reactive | Type                 | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | -------------------- | ---------------------- | ----------- |
| value         | Yes      | <code>let</code> | Yes      | --                   | <code>undefined</code> | --          |
| customClasses | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>        | VARIABLES   |
| id            | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>        | --          |
| disabled      | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| type          | No       | <code>let</code> | No       | --                   | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `InputNumber`

### Props

| Prop name     | Required | Kind             | Reactive | Type                                       | Default value                              | Description |
| :------------ | :------- | :--------------- | :------- | ------------------------------------------ | ------------------------------------------ | ----------- |
| value         | Yes      | <code>let</code> | Yes      | --                                         | <code>undefined</code>                     | --          |
| opts          | No       | <code>let</code> | No       | <code>{ max: 0, min: 100, step: 1 }</code> | <code>{ max: 0, min: 100, step: 1 }</code> | VARIABLES   |
| id            | No       | <code>let</code> | No       | <code>string</code>                        | <code>''</code>                            | --          |
| customClasses | No       | <code>let</code> | No       | <code>string</code>                        | <code>''</code>                            | --          |
| type          | No       | <code>let</code> | No       | --                                         | <code>undefined</code>                     | --          |
| disabled      | No       | <code>let</code> | No       | --                                         | <code>undefined</code>                     | --          |

### Slots

None.

### Events

None.

## `InputText`

### Props

| Prop name     | Required | Kind             | Reactive | Type                | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| value         | Yes      | <code>let</code> | Yes      | --                  | <code>undefined</code> | --          |
| id            | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | VARIABLES   |
| customClasses | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | --          |
| type          | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| disabled      | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| placeholder   | No       | <code>let</code> | No       | <code>string</code> | <code>""</code>        | --          |

### Slots

None.

### Events

None.

## `Not`

### Props

| Prop name     | Required | Kind             | Reactive | Type                 | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | -------------------- | ---------------------- | ----------- |
| onHover       | No       | <code>let</code> | Yes      | <code>boolean</code> | <code>false</code>     | --          |
| id            | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>        | VARIABLES   |
| type          | No       | <code>let</code> | No       | --                   | <code>undefined</code> | --          |
| customClasses | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>        | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Option`

### Props

| Prop name     | Required | Kind             | Reactive | Type                | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| value         | No       | <code>let</code> | Yes      | --                  | <code>undefined</code> | --          |
| id            | No       | <code>let</code> | Yes      | <code>string</code> | <code>''</code>        | --          |
| type          | No       | <code>let</code> | No       | --                  | <code>undefined</code> | VARIABLES   |
| title         | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| disabled      | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| customClasses | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | --          |
| opts          | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| onChange      | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| onReset       | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| indicator     | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Radio`

### Props

| Prop name     | Required | Kind             | Reactive | Type                | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| value         | Yes      | <code>let</code> | Yes      | --                  | <code>undefined</code> | --          |
| id            | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | VARIABLES   |
| opts          | Yes      | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| customClasses | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | --          |
| type          | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| disabled      | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `Range`

### Props

| Prop name     | Required | Kind             | Reactive | Type                 | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | -------------------- | ---------------------- | ----------- |
| value         | Yes      | <code>let</code> | Yes      | --                   | <code>undefined</code> | --          |
| opts          | No       | <code>let</code> | No       | --                   | <code>undefined</code> | VARIABLES   |
| id            | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>        | --          |
| inputValue    | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code>     | --          |
| customClasses | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>        | --          |
| type          | No       | <code>let</code> | No       | --                   | <code>undefined</code> | --          |
| disabled      | No       | <code>let</code> | No       | --                   | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `Select`

### Props

| Prop name     | Required | Kind             | Reactive | Type                | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| value         | Yes      | <code>let</code> | Yes      | --                  | <code>undefined</code> | --          |
| id            | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | VARIABLES   |
| opts          | Yes      | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| customClasses | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | --          |
| type          | No       | <code>let</code> | No       | <code>string</code> | <code>"native"</code>  | --          |
| disabled      | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |

### Slots

None.

### Events

None.

## `Tabs`

### Props

| Prop name        | Required | Kind             | Reactive | Type                | Default value          | Description |
| :--------------- | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| activeTabValue   | No       | <code>let</code> | Yes      | --                  | <code>undefined</code> | --          |
| items            | Yes      | <code>let</code> | No       | --                  | <code>undefined</code> | VARIABLES   |
| customClasses    | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | --          |
| customBtnClasses | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | --          |

### Slots

None.

### Events

None.

## `Title`

### Props

| Prop name     | Required | Kind             | Reactive | Type                | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| value         | No       | <code>let</code> | No       | <code>string</code> | <code>""</code>        | VARIABLES   |
| desc          | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| id            | No       | <code>let</code> | No       | <code>string</code> | <code>""</code>        | --          |
| type          | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| tooltip       | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| link          | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| linkTarget    | No       | <code>let</code> | No       | <code>string</code> | <code>'\_blank'</code> | --          |
| customClasses | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | --          |

### Slots

None.

### Events

None.

## `Tooltip`

### Props

| Prop name     | Required | Kind             | Reactive | Type                | Default value          | Description |
| :------------ | :------- | :--------------- | :------- | ------------------- | ---------------------- | ----------- |
| icon          | No       | <code>let</code> | No       | --                  | <code>undefined</code> | VARIABLES   |
| id            | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | --          |
| type          | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| position      | No       | <code>let</code> | No       | --                  | <code>undefined</code> | --          |
| customClasses | No       | <code>let</code> | No       | <code>string</code> | <code>''</code>        | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.
