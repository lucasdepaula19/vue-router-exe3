<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <br>
    <router-link to="/my-route">Go to my route</router-link>
    <br>
    <router-link to="/users">Go to users view</router-link>
    <router-view/>
    <!--HelloWorld msg="Hello Vue in CodeSandbox!"/-->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
