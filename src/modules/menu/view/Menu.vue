<template>
  <template-default>
    <base-container>
      <base-row>
        <base-col>
          <h1 class='text-h4'>Cardápio</h1>
        </base-col>
      </base-row>
      <base-row dense>
        <base-col>
          <h3 class='text-h6'>Filtros:</h3>
          <v-chip
            v-if="filters.food"
            class="ma-2"
            close
            @click:close="clearFoodFilter"
          >
            Alimento: {{filters.food}}
          </v-chip>
          <v-chip
            v-if="filters.category.label"
            class="ma-2"
            close
            @click:close="clearCategoryFilter"
          >
            Categoria: {{filters.category.label}}
          </v-chip>
          <base-btn
            block
            @click="showFilter=true">
            <v-icon left>mdi-magnify</v-icon>
              Filtrar
          </base-btn>
        </base-col>
      </base-row>
      <list-import :products='getProducts'></list-import>
    </base-container>
    <form-filter-import @handleFilter="handleFilter" :showFilter="showFilter" :filters="filters"/>
    <footer-import />
  </template-default>
</template>
<script>
import Skeleton from '@/system/components/base/Skeleton.vue';
import Repository from '@/modules/menu/repository/RepositoryFactory';
import { mapGetters } from 'vuex';

const ListImport = () => ({
  component: import(
    /* webpackChunkName: 'menu-list' */ '@/modules/menu/components/List.vue'
  ),
  loading: Skeleton,
});

const FooterImport = () => ({
  component: import(
    /* webpackChunkName: 'menu-footer' */ '@/system/components/Footer.vue'
  ),
});

const FormFilterImport = () => ({
  component: import(
    /* webpackChunkName: 'menu-form-filter' */ '@/modules/menu/components/FormFilter.vue'
  ),
});

export default {
  components: {
    ListImport,
    FooterImport,
    FormFilterImport,
  },
  data: () => ({
    showFilter: false,
    filters: {
      food: '',
      category: {},
    },
  }),
  methods: {
    handleFilter() {
      this.showFilter = false;
    },
    clearFoodFilter() {
      this.filters.food = '';
    },
    clearCategoryFilter() {
      this.filters.category = {};
    },
  },
  mounted() {
    const menuRepository = Repository.get('menu');

    menuRepository.getProducts()
      .then((response) => {
        this.$store.dispatch('SET_PRODUCTS', response.allProducts || []);
      });
  },
  computed: {
    ...mapGetters(['getProducts']),
  },
};
</script>
