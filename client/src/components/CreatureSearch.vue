<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Keresés</p>
    </header>
    <div class="card-content">
      <div class="field is-horizontal">
        <div class="field-label">
          <label class="label">Feltétel:</label>
        </div>
        <div class="field-body">
            <div class="control">
              <label class="radio">
                <input type="radio" name="question">
                Név szerint
              </label>
              <label class="radio">
                <input type="radio" name="question">
                Szint szerint
              </label>
            </div>
        </div>
      </div>
      <div class="field has-addons has-addons-centered">
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
      </div>
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
