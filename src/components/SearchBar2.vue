<template>
  <form class="search-form">
    <input
      type="text"
      class="search"
      ref="inputbox"
      placeholder="Compostable?"
      @keyup="displayMatches"
      @change="displayMatches"
      v-model="searchTerm"
    />
    <ul class="suggestions" ref="suggestions" @mousedown="openDescription">
      <li v-bind:innerHTML="searchTerm">Filter for an item</li>

      <!-- <li>or a state</li> -->
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
      searchTerm: "",
      filteredItems: []
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
    displayMatches() {
      const matchArray = this.findMatches(this.searchTerm, this.items);
      //console.log(matchArray);
      const html = matchArray
        .map(item => {
          const regex = new RegExp(this.searchTerm, "gi");
          const itemName = item.name.replace(
            regex,
            `<span class="hl">${this.searchTerm}</span>`
          );
          const itemDescription = item.description.replace(
            regex,
            `<span class="hl">${this.searchTerm}</span>`
          );
          return `
        <li>
          <span class="name">${itemName}</span>
          
        </li>
        `;
        })
        .join("");
      this.$refs.suggestions.innerHTML = html;
    },
    openDescription(e) {
      console.log(this.$refs.suggestions);
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