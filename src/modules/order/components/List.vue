<template>
  <base-container fluid class='px-0'>
    <base-row dense>
      <base-col
        v-for="order in getOrder"
        cols="12"
        sm="6"
        md="3"
        :key="order.id"
        >
        <v-lazy
          class="fill-height"
          :options="{
            threshold: 0.5,
          }"
          transition="fade-transition"
        >
          <list-item :order="order"/>
        </v-lazy>
      </base-col>
    </base-row>
  </base-container>
</template>
<script>
import { mapGetters } from 'vuex';
import ListItem from '@/modules/order/components/ListItem.vue';

export default {
  components: {
    ListItem,
  },
  computed: {
    ...mapGetters(['getOrder']),
  },
};
</script>
