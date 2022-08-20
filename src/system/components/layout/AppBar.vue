<template>
  <v-app-bar app>
    <v-btn
      icon
      small
    >
      <v-icon>mdi-arrow-left-thin</v-icon>
    </v-btn>
    <v-app-bar-title>
      Pedidos
    </v-app-bar-title>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LayoutAppBar',
});
</script>
