<template>
  <form class="search-form">
    <input
      type="text"
      class="search"
      ref="inputbox"
      placeholder="Compostable?"
      @keyup="updateFilter"
      @change="updateFilter"
      v-model="searchTerm"
    />

    <ul
      class="suggestions"
      ref="suggestions"
      @mousedown="openDescription"
      v-if="searchTerm"
    >
      <!-- <li v-bind:innerHTML="searchTerm">Filter for an item</li> -->

      <li v-for="item in filteredItems" :key="item.id">
        <router-link
          :to="{
            name: 'ItemDetails',
            params: {
              id: item.id,
              name: item.name,
              isCompostable: item.isCompostable,
              description: item.description,
              image: item.image_url,
            },
          }"
        >
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </form>
</template>

<script>
export default {
  data() {
    return {
      endpoint_url:
        "https://script.google.com/macros/s/AKfycbyMniVCYDyakkM1Qo3kHh2athgwnzESL1P0GlXz67uR4MJ6u2A/exec",
      items: [],
      searchTerm: ""
    };
  },
  methods: {
    findMatches(wordToMatch, items) {
      return this.items.filter(item => {
        const regex = new RegExp(wordToMatch, "gi");
        //return item.name.match(regex) || item.description.match(regex);
        return item.name.match(regex);
      });
    },

    updateFilter() {
      //console.log("filter updated");
    },
    openDescription(e) {
      console.log(this.$refs.suggestions);
    }
  },
  computed: {
    filteredItems() {
      //return this.items.filter(item => item.pitch);
      return this.items.filter(item => {
        const regex = new RegExp(this.searchTerm, "gi");
        return item.name.match(regex);
      });
    }
  },
  mounted() {
    this.$refs.inputbox.focus();
    fetch(this.endpoint_url)
      .then(response => response.json())
      .then(data => (this.items = data.plants));
  }
};
</script>

<style>
</style>