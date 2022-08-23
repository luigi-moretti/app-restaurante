<template>
  <template-default>
    <base-container>
      <base-row>
        <base-col>
          <h1 class='text-h4'>{{product.name}}</h1>
        </base-col>
      </base-row>
      <base-row>
        <base-col>
          <v-img
            :src="product.image.url"
          ></v-img>
        </base-col>
      </base-row>
      <base-row>
        <base-col>
          <h2 class='text-h6'>Descrição</h2>
          <p>{{product.description}}</p>
        </base-col>
      </base-row>
      <base-row>
        <base-col>
          <h2 class='text-h6'>Valor</h2>
          <p>{{ renderMoney(product.price) }}</p>
        </base-col>
      </base-row>
      <base-row>
        <base-col>
          <h2 class='text-h6'>Selecione a quantidade desejada</h2>
        </base-col>
      </base-row>
      <base-row align="center" align-content="start" class="pa-0 ma-0">
        <base-col cols="2" class="pa-0 ma-0">
          <base-btn
            color="accent"
            @click="handleRemove"
            :disabled="productComputed.quantity < 1"
            icon>
            <v-icon>
              mdi-minus-circle
            </v-icon>
          </base-btn>
        </base-col>
        <base-col cols="3">
          {{productComputed.quantity || 0}}
        </base-col>
        <base-col cols="2" class="pa-0 ma-0">
          <base-btn color="primary" @click="handleAdd" icon>
            <v-icon>
              mdi-plus-circle
            </v-icon>
          </base-btn>
        </base-col>
      </base-row>
    </base-container>
  </template-default>
</template>
<script>
// import Skeleton from '@/system/components/base/Skeleton.vue';
import Repository from '@/modules/product/repository/RepositoryFactory';
import { mapGetters } from 'vuex';
import renderMoney from '@/system/helpers/renderMoney';

export default {
  data: () => ({
    product: {},
  }),
  methods: {
    handleAdd() {
      if (!this.productComputed.quantity) {
        const value = this.product;
        value.quantity = 1;
        this.$store.dispatch('ADD_ORDER', value);
      } else {
        this.$store.dispatch('INCREASE_ORDER', this.$route.params.idProduct);
      }
    },
    handleRemove() {
      if (this.productComputed.quantity > 1) {
        this.$store.dispatch('DECREASE_ORDER', this.$route.params.idProduct);
      } else {
        this.$store.dispatch('REMOVE_ORDER', this.$route.params.idProduct);
      }
    },
    renderMoney,
  },
  mounted() {
    this.$store.dispatch('SET_LOADING');
    const menuRepository = Repository.get('product');

    menuRepository.getProduct(this.$route.params.idProduct)
      .then((response) => {
        // eslint-disable-next-line prefer-destructuring
        this.product = response.allProducts[0];
      })
      .then(() => {
        this.$store.dispatch('UNSET_LOADING');
      });
  },
  computed: {
    productComputed() {
      return this.getProduct(this.$route.params.idProduct) || {};
    },
    ...mapGetters(['getProduct']),
  },
};
</script>
