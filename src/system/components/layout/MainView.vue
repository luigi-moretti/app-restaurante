<template>
  <v-main>
    <slot></slot>
  </v-main>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LayoutMain',
});
</script>
