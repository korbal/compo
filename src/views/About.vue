<template>
<p class="text">
Hey fellow greenthumb! This is a search engine for compostable items. 

If you are not sure whether you can throw something in the compost bin, you can just search for it on canicompostit.com 

If you like it, share it with your friends, it's totally free! 

</p>
<Footer /></template>


<script>
import SearchBar3 from "../components/SearchBar3.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "About",
  components: {SearchBar3, Footer },
  data() {
    return {
      
    };
  }
 
};
</script>

<style>
.text {
  font-size: 20px;
  color: white;
  text-align: center;
  margin-top: 100px;
}
</style>