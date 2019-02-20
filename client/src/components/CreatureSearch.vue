<template>
  <nav class="panel">
    <p class="panel-heading">Keresés</p>
    <div class="panel-block">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">To</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input" type="text" placeholder="pl.: farkas">
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input is-small" type="text" placeholder="search">
        <span class="icon is-small is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
    <p class="panel-tabs">
      <a class="is-active">all</a>
      <a>public</a>
      <a>private</a>
      <a>sources</a>
      <a>forks</a>
    </p>
    <a class="panel-block is-active">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      bulma
    </a>
    <a class="panel-block">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      marksheet
    </a>
    <a class="panel-block">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      minireset.css
    </a>
    <a class="panel-block">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      jgthms.github.io
    </a>
    <a class="panel-block">
      <span class="panel-icon">
        <i class="fas fa-code-branch" aria-hidden="true"></i>
      </span>
      daniellowtw/infboard
    </a>
    <a class="panel-block">
      <span class="panel-icon">
        <i class="fas fa-code-branch" aria-hidden="true"></i>
      </span>
      mojs
    </a>
    <label class="panel-block">
      <input type="checkbox">
      remember me
    </label>
    <div class="panel-block">
      <button class="button is-link is-outlined is-fullwidth">reset all filters</button>
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
  name: "CreatureSearch"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
