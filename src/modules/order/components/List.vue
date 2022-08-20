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
          <v-list flat subheader three-line>
            <v-subheader>Itens para enviar para preparo</v-subheader>
            <v-list-item-group v-model="settings" multiple active-class="">
              <v-list-item v-for="order in orders" :key="order.order.id">
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active"></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>{{ order.order.name }}</v-list-item-title>
                    <v-list-item-subtitle
                      >{{ order.order.description }}</v-list-item-subtitle
                    >
                    {{ order.order.price }}
                  </v-list-item-content>
                </template>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-lazy>
      </base-col>
    </base-row>
  </base-container>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
});
</script>
