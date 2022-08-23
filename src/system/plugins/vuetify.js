import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#A3320B',
        secondary: '#D8BFAA',
        accent: '#808080',
        error: '#6B0504',
      },
    },
  },
});
