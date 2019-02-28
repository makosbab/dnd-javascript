import Vue from "vue";
import Router from "vue-router";
import CreatureSearch from '../components/CreatureSearch.vue'
import Sheet from '../components/Sheet.vue'

Vue.use(Router);

// itt mondjuk meg, hogyan érhetjük el az útvonalakat
export default new Router({
  routes: [
      {
          path: '/search',
          name: 'CreatureSearch',
          component: CreatureSearch
      },
      {
          path: '/sheet',
          name: 'Sheet',
          component: Sheet
      }
  ]
});
