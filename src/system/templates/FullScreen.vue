<template>
  <layout-app>
    <layout-main>
      <slot></slot>
    </layout-main>
  </layout-app>
</template>
<script lang="ts">
import Vue from 'vue';
import { LayoutApp, LayoutMain } from '@/system/components/layout';

export default Vue.extend({
  name: 'TemplateFullScreen',
  components: {
    LayoutApp, LayoutMain,
  },
});
</script>
