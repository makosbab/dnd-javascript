<template>
  <nav class="panel">
    <p class="panel-heading">Keresés</p>
    <div class="panel-block">
      <form @submit.prevent="search()">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Lény neve</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                  v-model="criteria.name"
                  class="input is-primary"
                  type="text"
                  placeholder="pl.: farkas"
                >
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">Típus</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="select">
                <select v-model="sType">
                  <option disabled hidden :value="''">Válassz típust</option>
                  <option v-for="(types, index) in creatureTypes" :key="index">{{types}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">Méret</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="select">
                <select>
                  <option hidden selected>Válassz méretet</option>
                  <option v-for="(size, index) in sizes" :key="index">{{size}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">Kihívási érték</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="select">
                <select v-model="criteria.challengeRating">
                  <option v-for="(rating, key) in ratings" :key='key'>{{rating}}</option>
                  <!-- <option>1</option>
                  <option>2</option> -->
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">Kül. tulajd.</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox">
                  Mágiahasználó
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="field-body">
            <div class="field is-grouped is-grouped-centered">
              <div class="control">
                <button class="button is-success">Keresés</button>
              </div>
              <div class="control">
                <button class="button is-danger" type="reset">Törlés</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- Panel block-->
    <div class="panel-block">
      <table class="table is-bordered is-hoverable is-fullwidth is-striped">
        <caption class="is-size-5">Találatok</caption>
        <thead>
          <tr>
            <th>lény neve</th>
            <th>típusa</th>
            <th>mérete</th>
            <th>kih. ért.</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(creature, index) in searchResults" :key="index">
            <td>
              <a href>{{creature.name}}</a>
            </td>
            <td>{{creature.size}}</td>
            <td>{{creature.type}}</td>
            <td>{{creature.challengeRating}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </nav>
</template>

<script>

import _ from 'lodash'
export default {
  name: "CreatureSearch",

  data() {
    return {
      criteria : {
        name : '',
        size : '',
        type : '',
        challengeRating: 0
      },
      sName : '', 
      sType : '',
      creatureTypes: [
        "Alakváltó",
        "Állat",
        "Rendellenesség",
        "Bestia",
        "Élőhalott",
        "Mágikus bestia"
      ],
      sizes: ["Közepes", "Nagy", "Óriási"],
      ratings: _.range(1, 21),
      searchResults: [
        {
          name: "Aboleth",
          size: "Óriási",
          type: "Rendellenesség",
          challengeRating: 7
        },
        {
          name: "Otyugh",
          size: "Óriási",
          type: "Rendellenesség",
          challengeRating: 7
        }
      ]
    };
  },

  methods: {
    search() {
      //const api = 'http://localhost:8080/api/search';
      
      alert(this.criteria.challengeRating)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
