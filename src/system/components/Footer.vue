<template>
  <v-footer app>
      <base-row>
        <base-col>
          <base-btn v-if="getRoute.name !== 'orders'"
            @click.prevent="goToOrder"
            color='primary'
            block>
          <v-badge
            v-if="!!getOderQuantity"
            color="accent"
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

          <base-btn v-else
            @click.prevent="goToPayment"
            color='primary'
            block>
          <v-badge
            v-if="!!getOderQuantity"
            color="accent"
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
          Fechar carrinho</base-btn>
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
    goToPayment() {
      this.$store.dispatch('RESET_ORDER');
      this.$router.push({ name: Routes.MENU });
    },
  },
  computed: {
    getRoute() {
      return this.$router.currentRoute;
    },
    ...mapGetters(['getOderQuantity']),
  },
};
</script>
