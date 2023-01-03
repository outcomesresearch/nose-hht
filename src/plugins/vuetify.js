import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import locales from '../assets/locales/'

Vue.use(Vuetify);

const opts = {
  lang: {
    locales,
    current: navigator.language,
  },
  theme: {
    themes: {
      light: {
        primary: '#A52714',
      },
    },
  },
};
export default new Vuetify(opts);
