<template>
  <h1>{{ name }}</h1>
  <!-- <p>the item id is {{ id }}</p> -->
  <h2>Can I put this in the compost?</h2>
  <h2>
    <strong>{{ isCompostable }}</strong>
  </h2>
  <p>{{ description }}</p>
  <img :src="image" alt="" />
  <Footer />
</template>

<script>

import SearchBar3 from "../components/SearchBar3.vue";
import Footer from "../components/Footer.vue";

export default {
  
  props: ["id", "name", "isCompostable", "description", "image"],
  components: {SearchBar3, Footer },
  data() {
    return {
      //id: this.$route.params.id,
      uri:
        "https://script.google.com/macros/s/AKfycbyMniVCYDyakkM1Qo3kHh2athgwnzESL1P0GlXz67uR4MJ6u2A/exec"
    };
  },
  mounted() {}
};
</script>

<style>
</style>