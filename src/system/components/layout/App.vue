<template>
  <v-app>
    <slot></slot>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LayoutApp',
});
</script>
