<template>
  <div class="card">
    <header>
      <p class="card-header-title">Szakértelmek (jártasságok)</p>
    </header>
    <div class="card-content">
      <div class="field is-grouped is-grouped-multiline">

        <div class="control" v-for="(skill, index) in skills" :key="index">
          <div class="tags has-addons">
            <span class="tag is-dark">{{skill.name}}</span>
            <span class="tag is-danger">{{skill.score}}</span>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          name: "Koncentráció",
          score: 16
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>