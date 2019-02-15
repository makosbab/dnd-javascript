<template>
  <div id="app">
    <CreatureSearch/>
    <div class="columns">
      <div class="column is-fourth">
        <BasicInformation />
        <Feats />
        <Skills />
      </div>
      <div class="column is-fourth">
        <AbilityScores />
        <br/>
        <SavingThrows />
      </div>
    </div>
  </div>
</template>

<script>
import CreatureSearch from "./components/CreatureSearch.vue";
import BasicInformation from "./components/BasicInformation.vue";
import AbilityScores from "./components/AbilityScores.vue";
import SavingThrows from "./components/SavingThrows.vue";
import Skills from "./components/Skills.vue";
import Feats from "./components/Feats.vue";

export default {
  name: "app",
  components: {
    BasicInformation,
    CreatureSearch,
    AbilityScores,
    SavingThrows,
    Skills,
    Feats
  }
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css";
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
</style>
