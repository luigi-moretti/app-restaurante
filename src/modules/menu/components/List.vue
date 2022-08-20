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
              <base-btn icon>
                <v-icon>mdi-plus-circle</v-icon>
              </base-btn>
            </base-card-actions>
          </base-card>
        </v-lazy>
      </base-col>
    </base-row>
  </base-container>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    foods: {
      type: Array,
      required: true,
    },
  },
});
</script>
