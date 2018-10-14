<template>
  <div id="app">
    <navBar/>
    <b-container class="main">
      <router-view/>
    </b-container>
    <br>
    <b-card-footer>Created by : Jonathan Riano</b-card-footer>
  </div>
</template>

<script>
import navBar from "./components/NavBar";
export default {
  components: { navBar },
  name: "App"
};
</script>

<style>
.main {
  box-shadow: 5px 5px 2px 2px #888888;
  width: 100%;
  padding: 20px;
}
</style>
