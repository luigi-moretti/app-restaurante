<template>
  <template-full-screen>
    <base-container>
      <base-row>
        <base-col>
          <h1 class="text-h5">Conte sobre você</h1>
        </base-col>
      </base-row>
      <base-form @submit.prevent="handleSubmit">
        <base-row>
          <base-col>
            <base-text-field
              v-model="userName"
              outlined
              label="Como você se chama?"
              required
              >
            </base-text-field>
          </base-col>
        </base-row>
        <base-row>
          <base-col>
            <base-select
            v-model="table"
            :items="tables"
            outlined
            label="Selecione uma mesa"
            required
        ></base-select>
          </base-col>
        </base-row>
        <base-row>
          <base-col>
            <base-btn color="primary" block type="submit">Enviar</base-btn>
          </base-col>
        </base-row>
      </base-form>
    </base-container>
  </template-full-screen>
</template>
<script>
import Vue from 'vue';
import { RoutesMenu } from '@/system/routes/menu';

export default Vue.extend({
  data: () => ({
    userName: '',
    table: 0,
    tables: [1, 2, 3, 55, 32, 22, 13],
  }),
  methods: {
    handleSubmit() {
      this.$store.dispatch('SET_TABLE', this.table);
      this.$store.dispatch('SET_USER', this.userName);
      this.$router.push({ name: RoutesMenu.MENU });
    },
  },
});
</script>
