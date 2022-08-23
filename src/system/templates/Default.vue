<template>
  <layout-app>
    <layout-app-bar></layout-app-bar>
    <layout-main>
      <slot></slot>
    </layout-main>
    <footer-import />
  </layout-app>
</template>
<script>
import { LayoutApp, LayoutAppBar, LayoutMain } from '@/system/components/layout';

const FooterImport = () => ({
  component: import(
    /* webpackChunkName: 'menu-footer' */ '@/system/components/Footer.vue'
  ),
});

export default {
  name: 'TemplateDefault',
  components: {
    LayoutApp, LayoutAppBar, LayoutMain, FooterImport,
  },
};
</script>
