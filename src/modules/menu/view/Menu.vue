<template>
  <template-default>
    <base-container>
      <base-row>
        <base-col>
          <h1 class='text-h4'>Cardápio</h1>
        </base-col>
      </base-row>
      <list-import :foods="foods"></list-import>
    </base-container>
  </template-default>
</template>
<script>
import Vue from 'vue';

const ListImport = () => ({
  component: import(/* webpackChunkName: "menu-list" */ '@/modules/menu/components/List.vue'),
});

export default Vue.extend({
  components: {
    ListImport,
  },
  data: () => ({
    foods: [
      {
        id: 1,
        name: 'Café',
        price: '15.6',
        description: 'Café do dia a dia',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      },
      {
        id: 2,
        name: 'Café',
        price: '15.6',
        description: 'Café do dia a dia',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      },
      {
        id: 3,
        name: 'Café',
        price: '15.6',
        description: 'Café do dia a dia',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      },
      {
        id: 4,
        name: 'Café',
        price: '15.6',
        description: 'Café do dia a dia',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      },
      {
        id: 11,
        name: 'Café',
        price: '15.6',
        description: 'Café do dia a dia',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      },
      {
        id: 12,
        name: 'Café',
        price: '15.6',
        description: 'Café do dia a dia',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      },
      {
        id: 13,
        name: 'Café',
        price: '15.6',
        description: 'Café do dia a dia',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      },
      {
        id: 14,
        name: 'Café',
        price: '15.6',
        description: 'Café do dia a dia',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      },
      {
        id: 21,
        name: 'Café',
        price: '15.6',
        description: 'Café do dia a dia',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      },
      {
        id: 22,
        name: 'Café',
        price: '15.6',
        description: 'Café do dia a dia',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      },
      {
        id: 23,
        name: 'Café',
        price: '15.6',
        description: 'Café do dia a dia',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      },
      {
        id: 24,
        name: 'Café',
        price: '15.6',
        description: 'Café do dia a dia',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      },
      {
        id: 31,
        name: 'Café',
        price: '15.6',
        description: 'Café do dia a dia',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      },
      {
        id: 32,
        name: 'Café',
        price: '15.6',
        description: 'Café do dia a dia',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      },
      {
        id: 33,
        name: 'Café',
        price: '15.6',
        description: 'Café do dia a dia',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      },
      {
        id: 34,
        name: 'Café',
        price: '15.6',
        description: 'Café do dia a dia',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      },
    ],
  }),
});
</script>
