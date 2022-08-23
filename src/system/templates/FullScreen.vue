<template>
  <layout-app>
    <layout-main>
      <slot></slot>
    </layout-main>
  </layout-app>
</template>
<script>
import { LayoutApp, LayoutMain } from '@/system/components/layout';

export default {
  name: 'TemplateFullScreen',
  components: {
    LayoutApp, LayoutMain,
  },
};
</script>
