<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Karakter adottságai</p>
    </header>
    <div class="card-content">
      <div class="field">
        <label>Név:</label>
        <div class="control">
          <input type="”text”" class="input is-small is-primary" name="”name”" v-model=monster.name>
        </div>
      </div>
      <div class="field">
        <label>Méret:</label>
        <div class="control">
          <input type="”text”" class="input is-small is-primary" name="”meret”"  v-model=monster.size>
        </div>
      </div>
      <div class="field">
        <label>Oldal elérés:</label>
        <div class="control">
          <input type="”text”" class="input is-small is-primary" name="”oldal_eleres”">
        </div>
      </div>
      <div class="field">
        <label>Jellem:</label>
        <div class="control">
          <input type="”text”" class="input is-small is-primary" name="affiliation" v-model="monster.affiliation">
        </div>
      </div>
      <div class="field">
        <label>Sebesség:</label>
        <div class="control">
          <input type="”text”" class="input is-small is-primary" name="”Sebesseg_gyalog”" v-model=monster.speed>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            monster : {
                name: "Aboleth",
                size : "Óriási",
                type : "Rendellenesség",
                speed : "10 láb, úszva 60 láb",
                affiliation: "Törvényes gonosz"
            }
        }
    },
};
</script>

<style scoped>
</style>
