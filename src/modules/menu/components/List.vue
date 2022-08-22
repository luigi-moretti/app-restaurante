<template>
  <base-container fluid class="px-0">
    <base-row dense>
      <base-col
        v-for="product in products"
        cols="6"
        sm="6"
        md="3"
        :key="product.id"
        v-ripple>
        <v-lazy
          class="fill-height"
          :options="{
            threshold: 0.5,
          }"
          transition="fade-transition"
        >
          <base-card class="fill-height d-flex flex-column">
            <v-img :src="product.image.url"> </v-img>
            <base-card-title>{{ product.name }}</base-card-title>
            <base-card-subtitle>{{ product.price }}</base-card-subtitle>
            <v-spacer></v-spacer>
            <base-card-actions>
              <base-btn block @click.prevent="addOder(product)">
                <v-icon left>mdi-plus</v-icon>
                Adicionar
              </base-btn>
            </base-card-actions>
          </base-card>
        </v-lazy>
      </base-col>
    </base-row>
  </base-container>
</template>
<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addOder(order) {
      const value = order;
      value.status = 'pendente';
      value.quantity = 1;

      this.$store.dispatch('SET_LOADING');
      this.$store.dispatch('ADD_ORDER', value);
      this.$store.dispatch('UNSET_LOADING');
    },
  },

};
</script>
