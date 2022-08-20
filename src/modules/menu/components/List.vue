<template>
  <base-container fluid class="px-0">
    <base-row dense>
      <base-col v-for="food in foods" cols="6" :key="food.id" v-ripple>
        <v-lazy
          :options="{
            threshold: 0.5,
          }"
          transition="fade-transition"
        >
          <base-card>
            <v-img :src="food.src"> </v-img>
            <base-card-title>{{ food.name }}</base-card-title>
            <base-card-subtitle>{{ food.price }}</base-card-subtitle>
            <base-card-actions>
              <base-btn block @click.prevent="addOder(food)">
                <v-icon left>mdi-plus</v-icon>
                Adicionar
              </base-btn>
            </base-card-actions>
          </base-card>
        </v-lazy>
      </base-col>
    </base-row>
  </base-container>
</template>
<script>
export default {
  props: {
    foods: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addOder(order) {
      const value = {
        order,
        status: 'pendente',
      };

      this.$store.dispatch('SET_LOADING');
      this.$store.dispatch('ADD_ORDER', value);
      this.$store.dispatch('UNSET_LOADING');
    },
  },
};
</script>
