<template>
  <v-app-bar app>
    <v-btn
      icon
      small
      @click.prevent="goBack"
    >
      <v-icon>mdi-arrow-left-thin</v-icon>
    </v-btn>
    <v-app-bar-title>
      App Restaurante
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
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    ...mapGetters(['getLoading']),
  },
};
</script>
