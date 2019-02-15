<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Tulajdonságok</p>
    </header>
    <div class="card-content">
      <table class="table is-hoverable is-fullwidth is-striped">
        <thead>
          <tr>
            <th>
              <abbr title="Tulajdonság">Tul.</abbr>
            </th>
            <th>Pont</th>
            <th>
              <abbr title="Módosító">Mód.</abbr>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Erő</td>
            <td>{{monster.str}}</td>
            <td>{{strMod}}</td>
          </tr>
          <tr>
            <td>Ügy.</td>
            <td>{{monster.dex}}</td>
            <td>{{dexMod}}</td>
          </tr>
          <tr>
            <td>Áll.</td>
            <td>{{monster.con}}</td>
            <td>{{conMod}}</td>
          </tr>
          <tr>
            <td>Int.</td>
            <td>{{monster.int}}</td>
            <td>{{intMod}}</td>
          </tr>
          <tr>
            <td>Böl.</td>
            <td>{{monster.wis}}</td>
            <td>{{wisMod}}</td>
          </tr>
          <tr>
            <td>Kar.</td>
            <td>{{monster.char}}</td>
            <td>{{charMod}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AbilityScores",
  data() {
    return {
      monster: {
        name: "Aboleth",
        size: "Óriási",
        type: "Rendellenesség",
        subtype: "Vízi",
        str: 26,
        dex: 12,
        con: 20,
        int: 15,
        wis: 17,
        char: 17
      }
    };
  },
  methods: {
    getAttrMod : function (attr) {
      return Math.floor((attr - 10) / 2);
    }
  },
  computed: {
    strMod : function() {
      return this.getAttrMod(this.monster.str);
    },
    dexMod : function() {
      return this.getAttrMod(this.monster.dex);
    },
    conMod : function() {
      return this.getAttrMod(this.monster.con);
    },
    intMod : function() {
      return this.getAttrMod(this.monster.int);
    },
    wisMod : function() {
      return this.getAttrMod(this.monster.wis);
    },
    charMod : function() {
      return this.getAttrMod(this.monster.dex);
    }
  }
};
</script>

<style scoped>
</style>

