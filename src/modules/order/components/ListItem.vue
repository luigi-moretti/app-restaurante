<template>
  <base-card
    class='fill-height d-flex flex-column'
  >
    <base-card-title>{{ order.name }}</base-card-title>
    <base-card-subtitle></base-card-subtitle>
    <v-card-text class="d-flex flex-no-wrap justify-space-between align-center">
      <div>
        Valor Unitário: {{ renderMoney(order.price) }}
      </div>
      <div>
        Valor Total: {{renderMoney(order.quantity * order.price)}}
      </div>
    </v-card-text>
    <base-card-actions>
      <base-row align='center' align-content='start' class='pa-0 ma-0'>
        <base-col cols='2' class='pa-0 ma-0'>
          <base-btn block @click.prevent='handleRemove' icon>
            <v-icon left>mdi-minus-circle</v-icon>
          </base-btn>
        </base-col>
        <base-col cols='2' class='pa-0 ma-0'> {{order.quantity || 0}}</base-col>
        <base-col cols='2' class='pa-0 ma-0'>
          <base-btn block @click.prevent='handleAdd' icon>
            <v-icon left>mdi-plus-circle</v-icon>
          </base-btn>
        </base-col>
      </base-row>
    </base-card-actions>
  </base-card>
</template>
<script>
import renderMoney from '@/system/helpers/renderMoney';

export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleAdd() {
      if (!this.order.quantity) {
        const value = this.order;
        value.quantity = 1;
        this.$store.dispatch('ADD_ORDER', value);
      } else {
        this.$store.dispatch('INCREASE_ORDER', this.order.id);
      }
    },
    handleRemove() {
      if (this.order.quantity > 1) {
        this.$store.dispatch('DECREASE_ORDER', this.order.id);
      } else {
        this.$store.dispatch('REMOVE_ORDER', this.order.id);
      }
    },
    renderMoney,
  },
};
</script>
