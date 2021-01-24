<template>
  <h1>{{ name }}</h1>
  <!-- <p>the item id is {{ id }}</p> -->
  <h2>Can I put this in the compost?</h2>
  <h2>
    <strong>{{ isCompostable }}</strong>
  </h2>
  <p>{{ description }}</p>
  <img :src="image" alt="" />
</template>

<script>
export default {
  props: ["id", "name", "isCompostable", "description", "image"],
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