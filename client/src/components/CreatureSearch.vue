<template>
  <nav class="panel">
    <p class="panel-heading">Keresés</p>
    <div class="panel-block">
      <form>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Lény neve</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                  v-model="name"
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
                <select v-model="type">
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
                <select v-model="size">
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
                <select v-model="challengeRating">
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
                <button 
                class="button is-success"
                @click="search"
                >Keresés</button>
              </div>
              <div class="control">
                <button class="button is-danger" type="reset">Törlés</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- Panel block vége-->
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
import SearchService from '@/services/SearchService'
export default {
  name: "CreatureSearch",

  data() {
    return {

      name : '',
      size : '',
      type : '',
      challengeRating: 0,
      creatureTypes: [
        "Alakváltó",
        "Állat",
        "Külvilági",
        "Rendellenesség",
        "Bestia",
        "Élőhalott",
        "Mágikus bestia"
      ],
      sizes: ["Közepes", "Nagy", "Óriási", "Hatalmas"],
      ratings: _.range(1, 21),
      searchResults: [

        // {
        //   name: "Aboleth",
        //   size: "Óriási",
        //   type: "Rendellenesség",
        //   challengeRating: 7
        // },
        // {
        //   name: "Otyugh",
        //   size: "Óriási",
        //   type: "Rendellenesség",
        //   challengeRating: 7
        // }
      ]
    };
  },

  //Amikor ez a Vue komponens csatolódik az oldalhoz
  // mounted() {
  //   setTimeout(()=>{
  //     this.name = "Nyenyec"
  //   },1000)
  // },

  // //Figyelő beállítása
  // watch: {
  //   name (value) {
  //     console.log(`Value of name has changed to ${value}`)
  //   }
  // },

  // Elérni, hogy elinduljon a post request
  // this.searchResults = await PostService.getPosts();

  methods: {
    async search() {
      //const api = 'http://localhost:8080/api/search';
      
      const response = await SearchService.searchCreatures({
        name: this.name,
        type: this.type,
        size: this.size,
        challengeRating: this.challengeRating
      })
      
      this.searchResults = response.data;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
