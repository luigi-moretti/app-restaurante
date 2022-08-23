<template>
  <template-default>
    <base-container>
      <base-row>
        <base-col>
          <h1 class='text-h5'>Olá {{getUser}}, seja bem-vindo!</h1>
          <h2 class='text-h4'>Cardápio</h2>
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
            color="secondary"
            block
            @click="showFilter=true">
            <v-icon left>mdi-magnify</v-icon>
              Filtrar
          </base-btn>
        </base-col>
      </base-row>
      <list-import :products='getProductsComputed'></list-import>
    </base-container>
    <form-filter-import @handleFilter="handleFilter" :showFilter="showFilter" :filters="filters"/>
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

const FormFilterImport = () => ({
  component: import(
    /* webpackChunkName: 'menu-form-filter' */ '@/modules/menu/components/FormFilter.vue'
  ),
});

export default {
  components: {
    ListImport,
    FormFilterImport,
  },
  data: () => ({
    showFilter: false,
    filters: {
      food: '',
      category: {
        category: 0,
        label: '',
      },
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
      this.filters.category = 0;
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
    getProductsComputed() {
      if (!!this.filters.category.category || !!this.filters.food) {
        const productsFiltered = this.getProducts.filter((product) => {
          if (!!this.filters.category.category && !!this.filters.food) {
            return (
              product.name.toLocaleLowerCase().indexOf(this.filters.food) >= 0
              && product.category === this.filters.category.category
            );
          }
          if (this.filters.category.category) {
            return product.category === this.filters.category.category;
          }
          if (this.filters.food) {
            return product.name.toLocaleLowerCase().indexOf(this.filters.food) >= 0;
          }
          return false;
        });

        return productsFiltered.sort((a, b) => a.category - b.category);
      }

      const products = this.getProducts;

      return products.sort((a, b) => a.category - b.category);
    },
    ...mapGetters(['getProducts', 'getUser']),
  },
};
</script>
