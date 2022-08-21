<template>
  <v-list flat subheader three-line>
    <v-list-item-group multiple>
      <v-list-item v-for='order in getOrderPending' :key='order.id' class="pa-0">
        <template v-slot:default='{ active }'>
          <v-list-item-action>
            <v-checkbox :input-value='active'></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ order.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ order.description }}</v-list-item-subtitle>
            {{ order.price }}
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list-item-group>
    <v-list-item class="pa-0">
      <base-btn block>Enviar para preparo</base-btn>
    </v-list-item>
  </v-list>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getOrderPending',
    ]),
  },
};
</script>
