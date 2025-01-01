---
created: 2024-02-27 00:08
---
https://devops.det.gov.ae/DefaultCollection/IID/_workitems/edit/67619?src=WorkItemMention&src-action=artifact_link
https://devops.det.gov.ae/DefaultCollection/IID/_workitems/edit/62198?src=WorkItemMention&src-action=artifact_link

Change mixed emphasis component to view component
sometimes business deep nesting doesn't work



https://devops.det.gov.ae/DefaultCollection/IID/_workitems/edit/63377/


<template>  
  <v-tooltip    :location="location"  
    :transition="transition"  
    :open-on-hover="openOnHover"  
    class="d-tooltip"  
  >  
    <template #activator="{ props }">  
      <span v-bind="props" class="tooltip-activator">  
        <slot name="activator" />  
      </span>    </template>  
    <span class="tooltip-content ma-1">  
      <slot />    </span>  </v-tooltip></template>  
  
<script setup>  
import { defineProps } from 'vue'  
  
defineProps({  
  location: {  
    type: String,  
    default: 'bottom'  
  },  
  transition: {  
    type: String,  
    default: 'scale-transition'  
  },  
  openOnHover: {  
    type: Boolean,  
    default: true  
  }  
})  
</script>  
<style lang="scss" scoped>  
/* Tooltip arrow styling */  
.d-tooltip::after {  
  content: '';  
  position: absolute;  
  border-style: solid;  
  /* Default sizes for the arrow */  
  border-width: 6px;  
}  
  
/* Arrow positioning for different locations */  
.d-tooltip[data-location='top']::after {  
  bottom: -6px;  
  left: 50%;  
  transform: translateX(-50%);  
  border-color: #000 transparent transparent transparent;  
}  
  
.d-tooltip[data-location='bottom']::after {  
  top: -6px;  
  left: 50%;  
  transform: translateX(-50%);  
  border-color: transparent transparent #000 transparent;  
}  
  
.d-tooltip[data-location='left']::after {  
  right: -6px;  
  top: 50%;  
  transform: translateY(-50%);  
  border-color: transparent transparent transparent #000;  
}  
  
.d-tooltip[data-location='right']::after {  
  left: -6px;  
  top: 50%;  
  transform: translateY(-50%);  
  border-color: transparent #000 transparent transparent;  
}  
</style>



https://devops.det.gov.ae/DefaultCollection/IID/_workitems/edit/68543/