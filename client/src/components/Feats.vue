<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Képességek</p>
    </header>
    <div class="card-content">
      <div class="tags">
        <span class="tag" v-for="(feat, index) in feats" :key="index">{{feat}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",

  data() {
    return {
      feats: ["Éberség", "Harci Alkalmazások", "Vasakarat"]
    };
  }
};
</script>

<style scoped>
</style>