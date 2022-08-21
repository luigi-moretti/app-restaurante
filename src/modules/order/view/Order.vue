<template>
  <template-default>
    <base-container>
      <base-row>
        <base-col>
          <h1 class='text-h4'>Pedidos</h1>
        </base-col>
      </base-row>
      <list-import></list-import>
    </base-container>
  </template-default>
</template>
<script>
import SkeletonVue from '@/system/components/base/Skeleton.vue';

const ListImport = () => ({
  component: import(/* webpackChunkName: "order-list" */ '@/modules/order/components/List.vue'),
  loading: SkeletonVue,
});

export default {
  components: {
    ListImport,
  },
};
</script>
