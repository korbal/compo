<template>
  <SearchBar3 />
  <!-- <div class="home">
    <div v-if="items.length">
      <div v-for="item in items" :key="item.id">
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div> -->
</template>

<script>
// @ is an alias to /src
import SearchBar from "../components/SearchBar.vue";
import SearchBar2 from "../components/SearchBar2.vue";
import SearchBar3 from "../components/SearchBar3.vue";

export default {
  name: "Home",
  components: { SearchBar, SearchBar2, SearchBar3 },
  data() {
    return {
      // endpoint_url:
      //   "https://script.google.com/macros/s/AKfycbyMniVCYDyakkM1Qo3kHh2athgwnzESL1P0GlXz67uR4MJ6u2A/exec",
      //endpoint_url:
      // "hhttps://script.google.com/macros/s/AKfycbyMniVCYDyakkM1Qo3kHh2athgwnzESL1P0GlXz67uR4MJ6u2A/exec",
      items: []
    };
  }
  // mounted() {
  //   fetch(this.endpoint_url)
  //     .then(response => response.json())
  //     .then(data => (this.items = data.plants));
  // }
};
</script>
<style>
html {
  box-sizing: border-box;
  background: lightgreen;
  font-family: "helvetica neue";
  font-size: 20px;
  font-weight: 200;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

input {
  width: 100%;
  padding: 20px;
}

.search-form {
  max-width: 400px;
  margin: 50px auto;
}

input.search {
  margin: 0;
  text-align: center;
  outline: 0;
  border: 10px solid #f7f7f7;
  width: 120%;
  left: -10%;
  position: relative;
  top: 10px;
  z-index: 2;
  border-radius: 5px;
  font-size: 40px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
}

.suggestions {
  margin: 0;
  padding: 0;
  position: relative;
  /*perspective: 20px;*/
}

.suggestions li {
  background: white;
  list-style: none;
  border-bottom: 1px solid #d8d8d8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
  margin: 0;
  padding: 20px;
  transition: background 0.2s;
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
}

.suggestions li:nth-child(even) {
}

.suggestions li:nth-child(odd) {
}

span.population {
  font-size: 15px;
}

.hl {
  background: #ffc600;
}
</style>
