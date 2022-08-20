<template>
  <layout-app>
    <layout-app-bar></layout-app-bar>
    <layout-main>
      <slot></slot>
    </layout-main>
  </layout-app>
</template>
<script lang="ts">
import Vue from 'vue';
import { LayoutApp, LayoutAppBar, LayoutMain } from '@/system/components/layout';

export default Vue.extend({
  name: 'TemplateDefault',
  components: {
    LayoutApp, LayoutAppBar, LayoutMain,
  },
});
</script>
