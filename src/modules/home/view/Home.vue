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
              outlined
              label="Como você se chama?"
              >
            </base-text-field>
          </base-col>
        </base-row>
        <base-row>
          <base-col>
            <base-select
            :items="mesas"
            outlined
            label="Selecione uma mesa"
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
    mesas: [1, 2, 3, 55, 32, 22, 13],
  }),
  methods: {
    handleSubmit() {
      this.$router.push({ name: RoutesMenu.MENU });
    },
  },
});
</script>
