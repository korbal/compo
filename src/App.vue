<template>
  <div id="nav">
    
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'About' }">About.</router-link>
    <!-- <router-link :to="{ name: 'Items' }">Items</router-link> -->
  </div>

  <router-view />
</template>

<style>



html {
  box-sizing: border-box;
  background: green;
  font-family: "helvetica neue";
  font-size: 20px;
  font-weight: 200;
  
  background-image: url('./assets/carrots_small.jpg');
  background-size: cover;
  max-height: 100vh;
  height: 100vh;
  
}



body {
  /* background: #f2f2f2; */
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* max-width: 600px;  */
  color: #2c3e50;
  margin: 60px auto;
  width: 300px;
  
  /* background-image: url('./assets/carrots.jpg'); */
  
}

#nav {
  padding: 60px;
}

#nav a {
  color: white;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: blue;
  font-weight: bold;
}

#app {
  
}

* {
  box-sizing: border-box;
}
</style>


