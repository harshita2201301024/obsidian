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

