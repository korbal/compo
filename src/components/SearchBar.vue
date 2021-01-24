<template>
  <form class="search-form">
    <input
      type="text"
      class="search"
      placeholder="City or State"
      @keyup="displayMatches"
      @change="displayMatches"
      v-model="filteredCities"
    />
    <ul class="suggestions" ref="suggestions">
      <li>Filter for a city</li>
      <li>or a state</li>
    </ul>
  </form>
</template>

<script>
export default {
  data() {
    return {
      endpoint_cities:
        "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",
      cities: [],
      filteredCities: []
    };
  },
  methods: {
    findMatches(wordToMatch, cities) {
      return this.cities.filter(place => {
        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex);
      });
    },
    displayMatches() {
      const matchArray = this.findMatches(this.filteredCities, this.cities);
      //console.log(matchArray);
      const html = matchArray
        .map(place => {
          const regex = new RegExp(this.filteredCities, "gi");
          const cityName = place.city.replace(
            regex,
            `<span class="hl">${this.filteredCities}</span>`
          );
          const stateName = place.state.replace(
            regex,
            `<span class="hl">${this.filteredCities}</span>`
          );
          return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${place.population}</span>
        </li>
        `;
        })
        .join("");
      this.$refs.suggestions.innerHTML = html;
    }
  },
  mounted() {
    fetch(this.endpoint_cities)
      .then(blob => blob.json())
      .then(data => this.cities.push(...data));
  }
};
</script>

<style>
</style>