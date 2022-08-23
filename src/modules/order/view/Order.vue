<template>
  <template-default>
    <base-container>
      <base-row>
        <base-col>
          <h1 class='text-h4'>Pedidos</h1>
        </base-col>
      </base-row>
      <list-import></list-import>
      <base-row>
        <base-col>
          <h1 class='text-h5'>Total do Pedido: {{ renderMoney(totalOrder) }}</h1>
        </base-col>
      </base-row>
    </base-container>
  </template-default>
</template>
<script>
import { mapGetters } from 'vuex';
import renderMoney from '@/system/helpers/renderMoney';
import SkeletonVue from '@/system/components/base/Skeleton.vue';

const ListImport = () => ({
  component: import(/* webpackChunkName: "order-list" */ '@/modules/order/components/List.vue'),
  loading: SkeletonVue,
});

export default {
  components: {
    ListImport,
  },
  methods: {
    renderMoney,
  },
  computed: {
    totalOrder() {
      let sum = 0;
      if (this.getOrder.length > 0) {
        this.getOrder.forEach((element) => {
          const elementTotal = element.price * element.quantity;
          sum += elementTotal;
        });
        return sum;
      }
      return sum;
    },
    ...mapGetters(['getOrder']),
  },
};
</script>
