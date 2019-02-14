<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Mentődobások</p>
    </header>
    <div class="card-content">
      <table class="table is-hoverable is-fullwidth is-striped">
        <thead>
          <tr>
            <th>Mentő</th>
            <th>Pont</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Szívósság</td>
            <td>{{monster.fortitude}}</td>
          </tr>
          <tr>
            <td>Gyorsaság</td>
            <td>{{monster.reflex}}</td>
          </tr>
          <tr>
            <td>Akaraterő</td>
            <td>{{monster.will}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name : "SavingThrows",

  data() {
    return {
      monster : 
      {
        fortitude : 7,
        reflex : 3,
        will : 11
      }      
    }
  },
};
</script>

<style scoped>
</style>
