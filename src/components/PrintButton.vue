<template>
  <v-btn @click="handlePrint">
    <span>
      <span class="adjusted">{{ t(k.PRINT) }}</span>
    </span>
  </v-btn>
</template>

<script>
export default {
  methods: {
    handlePrint() {
      window.print();
    },
  },
};
</script>

<style></style>
