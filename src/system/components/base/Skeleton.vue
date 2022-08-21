<template>
  <div>
    <div ref="skeletonItem">
      <v-skeleton-loader
              type="card"
            >
      </v-skeleton-loader>
    </div>
    <div v-for="item in quantity" :key="item">
      <v-skeleton-loader
              type="card"
            >
      </v-skeleton-loader>
    </div>
  </div>
</template>
<script>

export default {
  data: () => ({
    quantity: [],
  }),
  mounted() {
    const quantity = Math.floor(window.innerHeight / this.$refs.skeletonItem.clientHeight);

    for (let index = 0; index < quantity; index += 1) {
      this.quantity.push(index);
    }
  },
};
</script>
