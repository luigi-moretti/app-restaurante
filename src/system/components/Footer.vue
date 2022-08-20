<template>
  <v-footer app>
      <base-row>
        <base-col>
          <base-btn
            @click.prevent="goToOrder"
            color='primary'
            block>
          <v-badge
            v-if="!!getOderQuantity"
            color="green"
            :content="getOderQuantity"
            class="mr-5"
          >
            <v-icon small>
              mdi-shopping
            </v-icon>
          </v-badge>
          <v-icon
          v-else
          small
          left>
              mdi-shopping
            </v-icon>
          Pedidos</base-btn>
        </base-col>
      </base-row>
    </v-footer>
</template>
<script>
import { mapGetters } from 'vuex';
import { Routes } from '../routes';

export default {
  methods: {
    goToOrder() {
      this.$router.push({ name: Routes.ORDER });
    },
  },
  computed: {
    ...mapGetters(['getOderQuantity']),
  },
};
</script>
