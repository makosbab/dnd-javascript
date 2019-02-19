<template>
  <div class="card">
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
      </label>
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
      <p class="control">
        <a class="button is-dark">Keress!</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatureSearch"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
