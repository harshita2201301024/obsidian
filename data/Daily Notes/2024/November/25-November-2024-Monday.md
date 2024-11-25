---
created: 2024-02-27 00:08
---
Business Dropdown doesn't work sometime
Color of breadcrumbs issue
Complete v-tooltip


mental pressure
no ownership
loss of money 
we respect you a lot
no coordination in team
you all are in win win situation except us
I am really sorry but we can't continue
We had put lot of efforts in initial levels, it felt like it was our own business name but somehow things change. 

```js
<template>
  <div class="position-relative">
    <d-breadcrumbs
      :breadcrumbs="[
        { label: 'Page 1', link: '/' },
        { label: 'Page 2', link: '/page-2' },
        { label: 'Page 3', link: '/page-3' },
        { label: 'Page 4', link: '/page-4' },
        { label: 'Page 5', link: '/page-5' },
        { label: 'Page 6', link: '/page-6' }
      ]"
    />
    <d-checkbox label="checkbox" />
    <d-radio label="radio" />

    <d-switch
      v-model="switchValue"
      label="dswitch"
      label-position="right"
      :disabled="true"
    />
    <d-switch
      v-model="switchValue"
      label="dswitch"
      label-position="right"
      :disabled="true"
    />
    <d-switch v-model="switchValue" label="dswitch" label-position="right" />
    <d-switch v-model="switchValue" label="dswitch" label-position="right" />
    <div class="d-flex justify-center">
      <d-tooltip location="bottom" theme="light">
        <!-- Activator Slot -->
        <template #activator="{ props }">
          <v-btn variant="plain" v-bind="props" icon="mdi-information" />
        </template>

        <div>
          <div>This is a simple tooltip message.</div>
          <div>This is a simple tooltip message.</div>
          <div>This is a simple tooltip message.</div>
          <div>This is a simple tooltip message.</div>
        </div>
      </d-tooltip>
    </div>

    <dashboard-top-section />
    <pending-actions class="mt-8" />
    <in-progress-licenses class="mt-8" />
    <registered-businesses class="mt-8" />
  </div>
</template>

<script lang="ts" setup>
import DashboardTopSection from '#design-system/components/Dashboard/DashboardTopSection.vue'
import DBreadcrumbs from '#design-system/components/DBreadcrumbs.vue'
import PendingActions from '~/components/IID2/PendingActions'
import RegisteredBusinesses from '~/components/IID2/RegisteredBusinesses.vue'
import InProgressLicenses from '~/components/IID2/InProgressLicenses/index.vue'

definePageMeta({
  layout: 'omnia-dashboard'
})

const switchValue = ref(false)
</script>

<style lang="scss" scoped></style>
```

