<template>

<div class="flex-container">
  <div class="logo"><img src="./assets/cici-logo-transparent.png" alt=""></div>

    <div id="nav">
    
    <!-- <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'About' }">About..</router-link>
    <router-link :to="{ name: 'Items' }">Items</router-link> -->
  </div> <!-- NAV end-->

  
</div>

  <router-view />

</template>




<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: black;
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

.flex-container {
display: flex;
justify-content: flex-start;
align-items: center;
  
}


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

#logo {
}

#nav {
  padding: 10px;
  
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}


</style>


