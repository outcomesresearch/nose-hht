<template>
  <outcomes-research-wrapper :_title="`NOSE HHT Questionnaire`">
    <v-app>
      <outcomes-navbar />
      <Questionnaire />
      <outcomes-footer :copyright="t(k.FOOTER_COPYRIGHT)" />
    </v-app>
  </outcomes-research-wrapper>
</template>

<script>
import Questionnaire from './components/Questionnaire';

export default {
  name: 'App',
  components: {
    Questionnaire,
  },
};
</script>

<style lang="scss">
@import './assets/scss/breakpoints.scss';
@import './assets/scss/c3.scss';
// @import './assets/scss/tooltip.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;

  .grid {
    display: grid;
  }

  .v-overlay--active {
    touch-action: none;
  }

  .v-card__text {
    font-size: 15px;
  }

  .v-text-field__details {
    display: none;
  }

  .v-card__actions {
    padding-left: 0px;
    padding-right: 0px;
  }

  .past-scores .v-text-field__details {
    display: flex;
  }

  .v-stepper__label {
    line-height: 1.3;
  }

  tr th,
  .v-input,
  .v-label {
    font-size: 14px !important;
  }

  .v-card__title {
    word-break: keep-all;
  }

  .v-divider {
    margin: 10px 0px;
  }

  @media only screen and (max-width: $SMALL) {
    .v-label,
    .v-card__text {
      font-size: 16px !important;
    }
  }
}
</style>
