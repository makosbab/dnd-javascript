<template>
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
</template>
<script>

import BasicInformation from "./BasicInformation.vue";
import AbilityScores from "./AbilityScores.vue";
import SavingThrows from "./SavingThrows.vue";
import Skills from "./Skills.vue";
import Feats from "./Feats.vue";

export default {
    components : {
        BasicInformation,
        AbilityScores,
        SavingThrows,
        Skills,
        Feats
    }
}
</script>

<style scoped>

</style>
