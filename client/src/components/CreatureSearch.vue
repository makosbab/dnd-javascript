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
                <input class="input is-primary" type="text" placeholder="pl.: farkas">
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
                <select>
                  <option hidden selected>Válassz típust</option>
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
                <select>
                  <option>1</option>
                  <option>2</option>
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
      <table class="table is-hoverable is-fullwidth is-striped">
        <thead>
          <tr>
            <th>lény neve</th>
            <th>típusa</th>
            <th>mérete</th>
            <th>kih. ért.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href>Aboleth</a>
            </td>
            <td>Óriási</td>
            <td>Rendellenesség</td>
            <td>7</td>
          </tr>
        </tbody>
      </table>
    </div>
  </nav>
</template>

<script>
export default {
  name: "CreatureSearch",

  data() {
    return {
      creatureTypes: [
        "Alakváltó",
        "Állat",
        "Rendellenesség",
        "Bestia",
        "Élőhalott",
        "Mágikus bestia"
      ],
      sizes : [
        "Közepes", "Nagy", "Óriási"
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
