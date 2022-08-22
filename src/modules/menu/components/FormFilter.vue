<template>
  <v-dialog
    v-model='showFilter'
    fullscreen
    hide-overlay
    transition='dialog-bottom-transition'
  >
    <base-card tile>
      <v-toolbar
        class="mb-3"
        flat
        dark
        color='primary'>
        <v-toolbar-title>Filtros</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <base-form @submit.prevent='handleFiltrar'>
          <base-row>
            <base-col>
              <base-text-field
                v-model="filters.food"
                outlined
                label='O que você procura?'>
              </base-text-field>
            </base-col>
          </base-row>
          <base-row>
            <base-col>
              <base-select
                v-model="filters.category"
                :items='categorias'
                item-text="label"
                item-value="category"
                outlined
                label='Selecione uma categoria'
                return-object
                single-line
              ></base-select>
            </base-col>
          </base-row>
          <base-row>
            <base-col>
              <base-btn color='primary' block type='submit'>Filtrar</base-btn>
            </base-col>
          </base-row>
        </base-form>
      </v-card-text>
    </base-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    categorias: [
      { label: 'Massas', category: 1 },
      { label: 'Lanches', category: 2 },
      { label: 'Bebidas', category: 3 },
    ],
    categoriaSelecionada: {},
    alimentoPesquisado: '',
  }),
  props: {
    showFilter: {
      type: Boolean,
      required: true,
      default: () => false,
    },
    filters: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  methods: {
    handleFiltrar() {
      this.$emit('handleFilter');
    },
  },
};
</script>
