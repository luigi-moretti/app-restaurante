<template>
  <template-full-screen>
    <base-container>
      <base-row align="center" justify="center">
        <base-col cols="12" md="4" xs="6">
          <h1 class="text-h5">Conte sobre você</h1>
        </base-col>
      </base-row>
      <v-form ref="form" @submit.prevent="handleSubmit">
        <base-row align="center" justify="center">
          <base-col cols="12" md="4" xs="6">
            <v-text-field
              v-model="userName"
              outlined
              label="Como você se chama?"
              required
              >
            </v-text-field>
          </base-col>
        </base-row>
        <base-row align="center" justify="center">
          <base-col cols="12" md="4" xs="6">
            <v-select
            v-model="table"
            :items="tables"
            outlined
            label="Selecione uma mesa"
            required
        ></v-select>
          </base-col>
        </base-row>
        <base-row align="center" justify="center">
          <base-col cols="12" md="4" xs="6">
            <base-btn color="primary" block type="submit">Enviar</base-btn>
          </base-col>
        </base-row>
      </v-form>
    </base-container>
  </template-full-screen>
</template>
<script>
import { RoutesMenu } from '@/system/routes/menu';

export default {
  data: () => ({
    valid: true,
    userName: null,
    table: null,
    tables: [1, 2, 3, 55, 32, 22, 13],
  }),
  methods: {
    handleSubmit() {
      const isValid = this.$refs.form.validate();
      console.log({ isValid });
      if (isValid) {
        this.$store.dispatch('SET_TABLE', this.table);
        this.$store.dispatch('SET_USER', this.userName);
        this.$router.push({ name: RoutesMenu.MENU });
      }
    },
  },
};
</script>
