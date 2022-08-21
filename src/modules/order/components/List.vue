<template>
  <base-container fluid class="px-0">
    <base-row dense>
      <base-col cols="12">
        <v-lazy
          :options="{
            threshold: 0.5,
          }"
          transition="fade-transition"
        >
          <v-expansion-panels v-model="panel" multiple>
            <v-expansion-panel class="mb-3">
              <v-expansion-panel-header>Itens para preparo: {{qtdPend}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <list-items-peding-import v-if="!!qtdPend" />
                <no-data-import v-else />
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel class="mb-3">
              <v-expansion-panel-header>Itens solicitados: {{qtdSent}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <list-items-sent-import v-if="!!qtdSent" />
                <no-data-import v-else />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-lazy>
      </base-col>
    </base-row>
  </base-container>
</template>
<script>
import { mapGetters } from 'vuex';
import SkeletonList from '@/modules/order/components/SkeletonList.vue';

const ListItemsPedingImport = () => ({
  component: import(/* webpackChunkName: "order-list-peding" */ '@/modules/order/components/ListItemsPeding.vue'),
  loading: SkeletonList,
});

const ListItemsSentImport = () => ({
  component: import(/* webpackChunkName: "order-list-sent" */ '@/modules/order/components/ListItemsSent.vue'),
  loading: SkeletonList,
});

const NoDataImport = () => ({
  component: import(/* webpackChunkName: "order-no-data" */ '@/system/components/NoData.vue'),
  loading: SkeletonList,
});

export default {
  components: {
    ListItemsPedingImport,
    ListItemsSentImport,
    NoDataImport,
  },
  data: () => ({
    panel: [0],
  }),
  computed: {
    qtdPend() {
      return this.getOrderPending.length;
    },
    qtdSent() {
      return this.getOrderSent.length;
    },
    ...mapGetters([
      'getOrderPending',
      'getOrderSent',
      'getOrderPaid',
    ]),
  },
};
</script>
