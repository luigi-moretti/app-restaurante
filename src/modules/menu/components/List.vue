<template>
  <base-container fluid class="px-0">
    <base-row dense>
      <base-col
        v-for="product in products"
        cols="6"
        sm="6"
        md="3"
        :key="product.id"
        >
        <v-lazy
          class="fill-height"
          :options="{
            threshold: 0.5,
          }"
          transition="fade-transition"
        >
          <card-menu :product="product"/>
        </v-lazy>
      </base-col>
    </base-row>
  </base-container>
</template>
<script>
import CardMenu from '@/modules/menu/components/CardMenu.vue';

export default {
  components: {
    CardMenu,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>
