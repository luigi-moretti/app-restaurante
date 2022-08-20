<template>
  <template-default>
    <base-container>
      <base-row>
        <base-col>
          <h1 class='text-h4'>Pedidos</h1>
        </base-col>
      </base-row>
      <list-import :orders="getOrder"></list-import>
    </base-container>
  </template-default>
</template>
<script>
import { mapGetters } from 'vuex';

const ListImport = () => ({
  component: import(/* webpackChunkName: "order-list" */ '@/modules/order/components/List.vue'),
});

export default {
  components: {
    ListImport,
  },
  computed: {
    ...mapGetters(['getOrder']),
  },
};
</script>
