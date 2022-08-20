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
    <v-progress-linear
      :active="getLoading"
      :indeterminate="getLoading"
      absolute
      bottom
      color="indigo accent-4"
    ></v-progress-linear>
  </v-app-bar>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LayoutAppBar',
  computed: {
    ...mapGetters(['getLoading']),
  },
};
</script>
