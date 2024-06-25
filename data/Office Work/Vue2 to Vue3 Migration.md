- [Global Vue API is changed to use an application instance](https://v3-migration.vuejs.org/breaking-changes/global-api)

<ChildComponent v-model="pageTitle" />

<!-- would be shorthand for: -->


```
<ChildComponent v-model="pageTitle" />

<!-- would be shorthand for: -->

<ChildComponent
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>
```

```
<ChildComponent :title.sync="pageTitle" /> <!-- to be replaced with --> <ChildComponent v-model:title="pageTitle" />
```

- for all `v-model`s without arguments, make sure to change props and events name to `modelValue` and `update:modelValue` respectively
    
    html
    
    ```
    <ChildComponent v-model="pageTitle" />
    ```
    
    js
    
    ```
    // ChildComponent.vue
    
    export default {
      props: {
        modelValue: String 
        // previously was `value: String`
      },
      emits: ['update:modelValue'],
      methods: {
        changePageTitle(title) {
          this.$emit('update:modelValue', title) 
          // previously was `this.$emit('input', title)`
        }
      }
    }
    ```

change above code to vue3, vuetiffy3, nuxt 3 
keep optional api and do as minimum changes as possible
don't remove comment
only do must do changes