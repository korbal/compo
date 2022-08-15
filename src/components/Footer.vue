<template>
  <div class="footer">
    <router-link class="footer-item" to="/">Home</router-link>
    <router-link class="footer-item" :to="{ name: 'About' }">About</router-link>
 
  </div>
</template>

<script>
export default {

}
</script>

<style>

.footer {
  display: flex;
  flex-direction: row;
  justify-content: end;
}
.footer-item {
  width: 100px;
  height: 100px;
  margin: 20px;
  color: white;
  
}

</style>