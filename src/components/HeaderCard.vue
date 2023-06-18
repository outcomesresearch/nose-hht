<template>
  <v-card class="mb-12">
    <v-card-title>
      <div class="flow">
        <div class="buttons">
          <span class="flow-around fixed-width ml-3 mb-3">
            <TranslationDropdown />
          </span>
          <span class="flow-around ml-3 mb-3">
            <PrintButton />
          </span>
        </div>
        {{ t(k.HEADER_TITLE) }}
      </div>
    </v-card-title>
    <v-card-text>
      <p class="grey--text text--darken-3">
        {{ t(k.HEADER_BODY_1) }}
        <strong class="text-decoration-underline">
          {{ t(k.HEADER_BODY_2) }}</strong
        >{{ t(k.HEADER_BODY_3) }}
      </p>
      <p class="mb-0 grey--text text--darken-3">{{ t(k.HEADER_BODY_4) }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import TranslationDropdown from './TranslationDropdown.vue';
import PrintButton from './PrintButton.vue';

export default {
  components: { TranslationDropdown, PrintButton },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/breakpoints.scss';
.flow-around {
  float: right;
}

.fixed-width {
  width: 82px;
}

@media only screen and (max-width: $SMALL) {
  .buttons {
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: min-content;
    float: right;
    justify-items: right;
  }
}
</style>
