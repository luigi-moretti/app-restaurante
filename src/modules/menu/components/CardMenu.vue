<template>
  <base-card
    class='fill-height d-flex flex-column'
    v-ripple
  >
    <v-img :src='product.image.url' @click='goToProduct(product)'> </v-img>
    <base-card-title>{{ product.name }}</base-card-title>
    <base-card-subtitle>{{ renderMoney(product.price) }}</base-card-subtitle>
    <v-spacer></v-spacer>
    <base-card-actions>
      <base-row align='center' align-content='start' class='pa-0 ma-0'>
        <base-col cols='2' class='pa-0 ma-0'>
          <base-btn color="error" block @click.prevent='handleRemove' icon>
            <v-icon left>mdi-minus-circle</v-icon>
          </base-btn>
        </base-col>
        <base-col cols='2' class='pa-0 ma-0'> {{productComputed.quantity || 0}}</base-col>
        <base-col cols='2' class='pa-0 ma-0'>
          <base-btn color="primary" block @click.prevent='handleAdd' icon>
            <v-icon left>mdi-plus-circle</v-icon>
          </base-btn>
        </base-col>
      </base-row>
    </base-card-actions>
  </base-card>
</template>
<script>
import { Routes } from '@/system/routes';
import { mapGetters } from 'vuex';
import renderMoney from '@/system/helpers/renderMoney';

export default {
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    goToProduct(product) {
      this.$router.push({
        name: Routes.PRODUCT,
        params: { idProduct: product.id },
      });
    },
    handleAdd() {
      if (!this.productComputed.quantity) {
        const value = this.product;
        value.quantity = 1;
        this.$store.dispatch('ADD_ORDER', value);
      } else {
        this.$store.dispatch('INCREASE_ORDER', this.product.id);
      }
    },
    handleRemove() {
      if (this.productComputed.quantity > 1) {
        this.$store.dispatch('DECREASE_ORDER', this.product.id);
      } else {
        this.$store.dispatch('REMOVE_ORDER', this.product.id);
      }
    },
    renderMoney,
  },
  computed: {
    productComputed() {
      return this.getProduct(this.product.id) || {};
    },
    ...mapGetters(['getProduct']),
  },
};
</script>
