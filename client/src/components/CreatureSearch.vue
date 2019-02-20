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
                <select>
                  <option hidden selected>Válassz típust</option>
                  <option v-for="(types, index) in creatureTypes" :key='index'>{{types.type}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Kihívási érték</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Name">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left has-icons-right">
                <input
                  class="input is-success"
                  type="email"
                  placeholder="Email"
                  value="alex@smith.com"
                >
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
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
                <button class="button is-link">Keresés</button>
              </div>
              <div class="control">
                <button class="button is-light">Törlés</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </nav>
  <!-- <div class="card">
    <header class="card-header">
      <p class="card-header-title">Keresés</p>
    </header>
    <div class="card-content">
      <div class="field">
        <div class="control">
          <input class="input is-primary" type="text" placeholder="Primary input">
        </div>
      </div>
      <label class="checkbox">
        <input type="checkbox">
        Kihívási érték:
  </label>-->
  <!-- <div class="field is-horizontal">
        <div class="field-label">
          <label class="label">Feltétel:</label>
        </div>
        <div class="field-body">
          <div class="control">
            <label class="radio">
              <input type="radio" name="question">
              Név
            </label>
            <label class="radio">
              <input type="radio" name="question">
              Kihívási érték
            </label>
          </div>
        </div>
  </div>-->
  <!-- <div class="field has-addons has-addons-centered">
        <p class="control">
          <span class="select">
            <select>
              <option>szintje</option>
              <option>kih. értéke</option>
            </select>
          </span>
        </p>
        <p class="control">
          <input class="input" type="text" placeholder="keresési érték">
        </p>
        <p class="control">
          <a class="button is-dark">Keress!</a>
        </p>
  </div>-->
  <!-- <div class="tabs is-small">
        <ul>
          <li class="is-active">
            <a>Keresés név szerint</a>
          </li>
          <li>
            <a>Keresés kihívási szint szerint</a>
          </li>
        </ul>
  </div>-->
  <!-- <p class="control">
        <a class="button is-dark">Keress!</a>
      </p>
    </div>
  </div>-->
</template>

<script>
export default {
  name: "CreatureSearch",

  data() {
    return {
      creatureTypes : 
      [
        {type: 'Alakváltó'},
        {type: 'Bestia'} 
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
