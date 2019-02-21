import Vue from "vue";
import Router from "vue-router";
import CreatureSearch from '../components/CreatureSearch.vue'
import Sheet from '../components/Sheet.vue'

Vue.use(Router);

export default new Router({
  routes: [
      {
          path: '/',
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
